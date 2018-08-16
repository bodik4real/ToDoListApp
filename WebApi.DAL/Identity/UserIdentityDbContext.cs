using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace WebApi.Identity
{
    public class UserIdentityDbContext : IdentityDbContext
    {
        private readonly IConfiguration _config;

        public UserIdentityDbContext(IConfiguration config, DbContextOptions<UserIdentityDbContext> options)
                : base(options)
        {
            _config = config ?? throw new System.ArgumentNullException(nameof(config));
        }

        public DbSet<IdentityUser> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_config.GetConnectionString("DefaultConnection"), options =>
            {
                options.MigrationsHistoryTable("UsersMigrationsHistory", "WebApi");
            });
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
