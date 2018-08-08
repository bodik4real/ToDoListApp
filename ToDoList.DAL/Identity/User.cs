using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;

namespace ToDoListWebApi.Models
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public DateTime LastLogin { get; set; }
        public IEnumerable<TaskItem> Tasks { get; set; }
    }
}
