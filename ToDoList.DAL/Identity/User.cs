using Microsoft.AspNetCore.Identity;
using System;

namespace ToDoListWebApi.Models
{
    public class User : IdentityUser
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public DateTime LastLogin { get; set; }
    }
}
