using System.ComponentModel.DataAnnotations;
using WebApi.Entities;

namespace WebApi.DAL.Entities
{
    public class BoardTaskItem
    {
        [Key]
        public int Id { get; set; }
        public int BoardId { get; set; }
        public int TaskItemId { get; set; }
        public TaskItem TaskItem { get; set; }
    }
}
