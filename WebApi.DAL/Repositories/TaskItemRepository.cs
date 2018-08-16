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

        public List<TaskItem> UserTaskItems(string userId)
        {
            return _context.TaskItem.Where(t => t.UserId == userId).ToList();
        }

        public TaskItem GetTaskItem(int taskItemId)
        {
            return _context.TaskItem.FirstOrDefault(x => x.Id == taskItemId);
        }

        public TaskItem AddTaskItem(TaskItem taskitem)
        {
            _context.TaskItem.Add(taskitem);

            _context.SaveChanges();

            return _context.TaskItem.Last();
        }

        public void UpdateTaskItem(TaskItem taskItem)
        {
            var updatedTaskItem = _context.TaskItem.FirstOrDefault(t => t.Id == taskItem.Id);

            if (updatedTaskItem == null) return;

            updatedTaskItem.Value = taskItem.Value;

            _context.SaveChanges();
        }

        public void DeleteTaskItem(int taskItemId)
        {
            var taskItemForDelete = _context.TaskItem.FirstOrDefault(x => x.Id == taskItemId);
            if (taskItemForDelete != null) _context.Remove(taskItemForDelete);
        }
    }
}