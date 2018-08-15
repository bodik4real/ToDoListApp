using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using ToDoListWebApi.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ToDoList.DAL.Identity
{
    public class IdentityDbContext : IdentityDbContext<User>
    {
    }
}
