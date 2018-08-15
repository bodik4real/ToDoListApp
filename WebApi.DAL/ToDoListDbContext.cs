using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.DAL.Entities;
using WebApi.Entities;

namespace WebApi
{
    public class ToDoListDbContext : DbContext
    {
        private readonly IConfiguration _config;
        public ToDoListDbContext(IConfiguration config, DbContextOptions<ToDoListDbContext> options)
            : base(options)
        {
            _config = config ?? throw new ArgumentNullException(nameof(config));
        }

        public DbSet<TaskItem> TaskItem { get; set; }
        public DbSet<Board> Board { get; set; }
        public DbSet<BoardTaskItem> BoardTaskItem { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_config.GetConnectionString("DefaultConnection"), options =>
            {
                options.MigrationsHistoryTable("TaskItemMigrationsHistory", "WebApi");
            });
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<TaskItem>().ToTable("TaskItem");
            modelBuilder.Entity<BoardTaskItem>().ToTable("BoardTaskItem");
            modelBuilder.Entity<Board>().ToTable("Board");
        }
    }
}
