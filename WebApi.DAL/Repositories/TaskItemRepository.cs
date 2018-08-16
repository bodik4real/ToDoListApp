using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using WebApi.DAL.Contracts;
using WebApi.DAL.DbContexts;
using WebApi.DAL.Entities;

namespace WebApi.DAL.Repositories
{
    public class TaskItemRepository : ITaskItemRepository
    {
        private readonly ToDoListDbContext _context;

        public TaskItemRepository(ToDoListDbContext context)
        {
            _context = context;
        }

        public List<TaskItem> GetTaskItemsByBoardId(int boardId)
        {
            var bord = _context.Board
                  .Include(x => x.BoardTaskItems)
                  .Where(x => x.Id == boardId)
                  .FirstOrDefault();
           return _context.TaskItem.Where(t => bord.BoardTaskItems.Any(b=> b.TaskItemId == t.Id)).ToList();
        }

        public TaskItem GetTaskItem(int taskItemId)
        {
            return _context.TaskItem.FirstOrDefault(x => x.Id == taskItemId);
        }

        public TaskItem AddTaskItem(int boardId, TaskItem taskitem)
        {
            var boardTaskItem = new BoardTaskItem();

            boardTaskItem.BoardId = boardId;
            boardTaskItem.TaskItem = taskitem;
            boardTaskItem.TaskItemId = taskitem.Id;

            _context.TaskItem.Add(taskitem);

            _context.BoardTaskItem.Add(boardTaskItem);

            _context.SaveChanges();

            return _context.TaskItem.Last();
        }

        public TaskItem UpdateTaskItem(TaskItem taskItem)
        {
            var updatedTaskItem = _context.TaskItem.FirstOrDefault(t => t.Id == taskItem.Id);

            if (updatedTaskItem == null) return null;

            updatedTaskItem.Value = taskItem.Value;

            _context.SaveChanges();

            return _context.TaskItem.FirstOrDefault(x=> x.Id == taskItem.Id);
        }

        public void DeleteTaskItem(int taskItemId)
        {

            var boardTaskItemForDelte = _context.BoardTaskItem.FirstOrDefault(x => x.TaskItemId == taskItemId);
            if (boardTaskItemForDelte != null)
            {
                _context.BoardTaskItem.Remove(boardTaskItemForDelte);
            }

            var taskItemForDelete = _context.TaskItem.FirstOrDefault(x => x.Id == taskItemId);
            if (taskItemForDelete != null)
            {
                _context.TaskItem.Remove(taskItemForDelete);
            }

            _context.SaveChanges();
        }

    }
}