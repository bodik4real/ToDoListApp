using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using WebApi.Models;
using WebApi.Services.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("CorsPolicy")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _configuration;

        public AccountController(
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager,
            IConfiguration configuration
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("login")]
        public async Task<ResponseModel<JwtAuthModel>> Login([FromBody] UserLoginModel model)
        {
            var response = new ResponseModel<JwtAuthModel>();
            var userName = _signInManager.UserManager.Users.Where(u => u.Email == model.Email).FirstOrDefault().UserName;

            try
            {
                var result = await _signInManager.PasswordSignInAsync(userName, model.Password, false, false);

                if (result.Succeeded)
                {
                    var appUser = _userManager.Users.SingleOrDefault(r => r.Email == model.Email);
                    response.Result = await GenerateJwtToken(model.Email, appUser);
                    response.IsSuccessful = true;
                }
                else
                {
                    response.ErrorMessage = "Failed to login with user’s creditionals";
                }
            }
            catch (Exception ex)
            {
                response.ErrorMessage = "Internal server occured: Failed to login";
            }

            return response;
        }

        [HttpPost]
        [Route("register")]
        public async Task<ResponseModel<JwtAuthModel>> Register([FromBody] UserRegistrationModel model)
        {
            var response = new ResponseModel<JwtAuthModel>();

            try
            {
                var user = new IdentityUser
                {
                    UserName = model.UserName,
                    Email = model.Email
                };

                IdentityResult result = null;

                result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, false);
                    response.Result = await GenerateJwtToken(model.Email, user);
                    response.IsSuccessful = true;
                }
                else
                {
                    response.ErrorMessage = "Failed to create new account";
                }
            }
            catch (Exception ex)
            {
                response.ErrorMessage = "Internal server occured: Failed to register";
            }
            return response;
        }

        private async Task<JwtAuthModel> GenerateJwtToken(string email, IdentityUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                _configuration["JwtIssuer"],
                _configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtAuthModel
            {
                AuthToken = new JwtSecurityTokenHandler().WriteToken(token),
                UserName = user.UserName,
                UserId = user.Id,
                JwtExpire = expires
            };
        }
    }
}
