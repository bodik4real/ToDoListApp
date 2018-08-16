using System.Collections.Generic;
using WebApi.Entities;

namespace WebApi.DAL.Contracts
{
    public interface ITaskItemRepository
    {
        List<TaskItem> UserTaskItems(string userId);
        TaskItem GetTaskItem(int taskItemId);
        void AddTaskItem(TaskItem photo);
        void UpdateTaskItem(TaskItem taskItem);
        void DeleteTaskItem(int taskItemId);
    }
}
