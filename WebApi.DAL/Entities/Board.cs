using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebApi.DAL.Entities
{
    public class Board
    { 
        [Key]
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Name { get; set; }
        public ICollection<BoardTaskItem> BoardTaskItems { get; set; }
    }
}
