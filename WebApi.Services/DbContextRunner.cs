using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WebApi.DAL.DbContexts;

namespace WebApi.Services
{
    public static class DbContextRunner
    {
        public static void ConfigureDbContexts(this IServiceCollection services, string sqlConnection)
        {
            services.AddDbContext<ToDoListDbContext>(options =>
            {
                options.UseSqlServer(sqlConnection,
                    sqlServerOptions => sqlServerOptions.MigrationsAssembly("WebApi.DAL"));
            });

            services.AddDbContext<UserIdentityDbContext>(options =>
            {
                options.UseSqlServer(sqlConnection,
                    sqlServerOptions => sqlServerOptions.MigrationsAssembly("WebApi.DAL"));
            });

            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<UserIdentityDbContext>()
                .AddDefaultTokenProviders();
        }
    }
}