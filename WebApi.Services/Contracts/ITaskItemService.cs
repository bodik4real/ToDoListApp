using System.Collections.Generic;
using WebApi.DAL.Entities;
using WebApi.Services.Models;

namespace WebApi.Services.Contracts
{
    public interface ITaskItemService
    {
        ResponseModel<List<TaskItem>> GetUserTaskItems(string userId);

        ResponseModel<TaskItem> GetTaskItem(int taskItemId);

        ResponseModel<TaskItem> AddTaskItem(TaskItem taskItem);

        ResponseModel UpdateTaskItem(TaskItem taskItem);

        ResponseModel DeleteTaskItem(int taskItemId);
    }
}
