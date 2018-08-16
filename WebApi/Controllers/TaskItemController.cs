using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using WebApi.Entities;
using WebApi.Services;
using WebApi.Services.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("CorsPolicy")]
    [ApiController]
    [Authorize]
    public class TaskItemController : Controller
    {
        private ITaskItemService _service;

        public TaskItemController(ITaskItemService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("get-by-user-id/{userId}")]
        public ResponseModel<List<TaskItem>> GetByUserId(string userId)
        {
            return _service.UserTaskItems(userId);
        }

        [HttpGet]
        [Route("get-by-id/{taskItemId}")]
        public ResponseModel<TaskItem> GetById(int taskItemId)
        {
            return _service.GetTaskItem(taskItemId);
        }

        [HttpPost]
        [Route("save")]
        public ResponseModel<TaskItem> Save(TaskItem taskItem)
        {
            return _service.AddTaskItem(taskItem);
        }

        [HttpPost]
        [Route("update")]
        public ResponseModel Update(TaskItem taskItem)
        {
            return _service.UpdateTaskItem(taskItem);
        }

        [HttpGet]
        [Route("delete/{taskItemId}")]
        public ResponseModel Delete(int taskItemId)
        {
            return _service.DeleteTaskItem(taskItemId);
        }
    }
}