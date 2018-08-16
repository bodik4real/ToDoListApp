using System.Collections.Generic;
using WebApi.DAL.Contracts;
using WebApi.Entities;
using System.Linq;

namespace WebApi.DAL.Repositories
{
    public class TaskItemRepository : ITaskItemRepository
    {
        private ToDoListDbContext _context;
        public TaskItemRepository(ToDoListDbContext context)
        {
            _context = context;
        }
        public List<TaskItem> UserTaskItems(string userId)
        {
            return (from item in _context.TaskItem
                    where item.UserId == userId
                    select item)
                    .ToList();
        }

        public TaskItem GetTaskItem(int taskItemId)
        {
            var photo = _context.TaskItem
                .Where(x => x.Id == taskItemId)
                .FirstOrDefault();

            return photo;
        }

        public void AddTaskItem(TaskItem photo)
        {
            _context.TaskItem.Add(photo);

            _context.SaveChanges();
        }

        public void UpdateTaskItem(TaskItem taskItem)
        {
            var updatedTaskItem = (from a in _context.TaskItem
                                   where a.Id == taskItem.Id
                                   select a)
                                .FirstOrDefault();

            if (updatedTaskItem == null)
            {
                return;
            }

            updatedTaskItem.Value = taskItem.Value;

            _context.SaveChanges();
        }

        public void DeleteTaskItem(int taskItemId)
        {
            var taskItemForDelete = _context.TaskItem.Where(x => x.Id == taskItemId).FirstOrDefault();
            _context.Remove(taskItemForDelete);
        }
    }
}
