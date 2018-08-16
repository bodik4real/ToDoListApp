using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Account
{
    public class UserLoginModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
