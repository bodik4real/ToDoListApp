using System;

namespace WebApi.Models
{
    public class JwtAuthModel
    {
        public string AuthToken { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public DateTime JwtExpire { get; set; }
    }
}
