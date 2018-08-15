using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using ToDoListWebApi.Models;

namespace ToDoListWebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddIdentity<User, IdentityRole>();

            services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
                b => b.MigrationsAssembly("ToDoListWebApi")));
            services.AddDefaultIdentity<IdentityUser>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                                            .AddJwtBearer(options =>
                                            {
                                                options.RequireHttpsMetadata = false;
                                                options.TokenValidationParameters = new TokenValidationParameters
                                                {
                                        // ��������, ����� �� �������������� �������� ��� ��������� ������
                                        ValidateIssuer = true,
                                        // ������, �������������� ��������
                                        ValidIssuer = AuthOptions.ISSUER,

                                        // ����� �� �������������� ����������� ������
                                        ValidateAudience = true,
                                        // ��������� ����������� ������
                                        ValidAudience = AuthOptions.AUDIENCE,
                                        // ����� �� �������������� ����� �������������
                                        ValidateLifetime = true,

                                        // ��������� ����� ������������
                                        IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                                        // ��������� ����� ������������
                                        ValidateIssuerSigningKey = true,
                                                };
                                            });

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
