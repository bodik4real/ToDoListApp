using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebApi.Entities;
using WebApi.Services;
using WebApi.Services.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TaskItemController : ControllerBase
    {
        private ITaskItemService _service;
        public TaskItemController(ITaskItemService service)
        {
            _service = service;
        }
        [HttpGet]
        public ResponseModel<List<TaskItem>> UserTaskItems(string userId)
        {
            return _service.UserTaskItems(userId);
        }

        [HttpGet]
        public ResponseModel<TaskItem> GetTaskItem(int taskItemId)
        {
            return _service.GetTaskItem(taskItemId);
        }

        [HttpPost]
        public ResponseModel AddTaskItem(TaskItem taskItem)
        {
            return _service.AddTaskItem(taskItem);
        }

        [HttpPost]
        public ResponseModel UpdateTaskItem(TaskItem taskItem)
        {
            return _service.UpdateTaskItem(taskItem);
        }

        [HttpGet]
        public ResponseModel DeleteTaskItem(int taskItemId)
        {
            return _service.DeleteTaskItem(taskItemId);
        }
    }
}