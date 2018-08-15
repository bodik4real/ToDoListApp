using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    [Table("TaskItem", Schema = "dbo")]
    public class TaskItem
    {   
        public int Id { get; set; }
        [MaxLength(60)]
        public string Value { get; set; }
        public DateTime CreatedDate { get; } = DateTime.UtcNow;
        public string UserId { get; set; }
    }
}
