using System.Collections.Generic;
using WebApi.DAL.Entities;

namespace WebApi.DAL.Contracts
{
    public interface ITaskItemRepository
    {
        TaskItem GetTaskItem(int taskItemId);

        TaskItem AddTaskItem(int boardId, TaskItem taskItem);

        TaskItem UpdateTaskItem(TaskItem taskItem);

        void DeleteTaskItem(int taskItemId);

        List<TaskItem> GetTaskItemsByBoardId(int boardId);
    }
}
