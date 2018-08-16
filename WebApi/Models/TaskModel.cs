using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class TaskModel 
    {
        public int Id { get; set; }

        public string Value { get; set; }

        public DateTime CreatedDate { get; } = DateTime.UtcNow;

        public string UserId { get; set; }

        public int BoardId { get; set; }
    }
}
