﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;

namespace WebApi.Identity
{
    public class IdentityDbContext : IdentityDbContext<IdentityUser>
    {
        private readonly IConfiguration _config;

        public IdentityDbContext(IConfiguration config, DbContextOptions<IdentityDbContext> options)
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

            builder.Entity<IdentityUser>().ToTable("User");
        }
    }
}
