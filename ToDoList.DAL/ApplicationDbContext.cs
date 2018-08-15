using Microsoft.EntityFrameworkCore;
using ToDoListWebApi.Models;

namespace ToDoListWebApi
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
