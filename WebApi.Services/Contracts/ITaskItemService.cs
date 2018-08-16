using System.Collections.Generic;
using WebApi.DAL.Entities;
using WebApi.Services.Models;

namespace WebApi.Services.Contracts
{
    public interface ITaskItemService
    {
        ResponseModel<List<TaskItem>> GetTaskItemsByBoardId(int boardId);

        ResponseModel<TaskItem> GetTaskItem(int taskItemId);

        ResponseModel<TaskItem> UpdateTaskItem(TaskItem taskItem);

        ResponseModel DeleteTaskItem(int taskItemId);

        ResponseModel<TaskItem> AddTaskItem(int boardId, TaskItem taskItem);
    }
}
