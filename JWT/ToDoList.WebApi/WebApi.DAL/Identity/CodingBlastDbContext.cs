using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace WebApi.DAL.Identity
{
    internal class CodingBlastDbContext : IdentityDbContext
    {
        public CodingBlastDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}