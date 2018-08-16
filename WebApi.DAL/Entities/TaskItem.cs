using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Entities
{
    [Table("TaskItem", Schema = "dbo")]
    public class TaskItem
    {
        [Key]
        public int Id { get; set; }
        public string Value { get; set; }
        public DateTime CreatedDate { get; } = DateTime.UtcNow;
        public string UserId { get; set; }
    }
}
