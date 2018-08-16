using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Account
{
    public class UserRegistrationModel 
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public string UserName { get; set; }
    }
}
