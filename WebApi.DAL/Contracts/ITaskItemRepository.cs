using System.Collections.Generic;
using WebApi.DAL.Entities;

namespace WebApi.DAL.Contracts
{
    public interface ITaskItemRepository
    {
        List<TaskItem> UserTaskItems(string userId);

        TaskItem GetTaskItem(int taskItemId);

        TaskItem AddTaskItem(TaskItem photo);

        void UpdateTaskItem(TaskItem taskItem);

        void DeleteTaskItem(int taskItemId);
    }
}
