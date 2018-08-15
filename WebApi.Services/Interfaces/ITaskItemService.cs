using System;
using System.Collections.Generic;
using System.Text;
using WebApi.Entities;
using WebApi.Services.Models;

namespace WebApi.Services
{
    public interface ITaskItemService
    {
        ResponseModel<List<TaskItem>> UserTaskItems(string userId);
        ResponseModel<TaskItem> GetTaskItem(int taskItemId);
        ResponseModel AddTaskItem(TaskItem taskItem);
        ResponseModel UpdateTaskItem(TaskItem taskItem);
        ResponseModel DeleteTaskItem(int taskItemId);
    }
}
