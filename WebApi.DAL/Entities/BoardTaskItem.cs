using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.DAL.Entities
{
    [Table("BoardTaskItem", Schema = "dbo")]
    public class BoardTaskItem
    {
        [Key]
        public int Id { get; set; }

        public int BoardId { get; set; }

        public int TaskItemId { get; set; }

        public TaskItem TaskItem { get; set; }
    }
}
