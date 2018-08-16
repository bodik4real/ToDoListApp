using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.DAL.Entities
{
    [Table("Board", Schema = "dbo")]
    public class Board
    {
        [Key] public int Id { get; set; }

        public string UserId { get; set; }

        public string Name { get; set; }

        public ICollection<BoardTaskItem> BoardTaskItems { get; set; }
    }
}