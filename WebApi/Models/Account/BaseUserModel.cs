using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class BaseUserModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
