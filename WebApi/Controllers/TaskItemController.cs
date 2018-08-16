using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using WebApi.DAL.Entities;
using WebApi.Services.Contracts;
using WebApi.Services.Models;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/task")]
    [EnableCors("CorsPolicy")]
    [ApiController]
    [Authorize]
    public class TaskItemController : Controller
    {
        private readonly ITaskItemService _service;

        public TaskItemController(ITaskItemService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("get-by-board-id/{boardId:int}")]
        public ResponseModel<List<TaskItem>> GetTaskItemsByBoardId(int boardId)
        {
            return _service.GetTaskItemsByBoardId(boardId);
        }

        [HttpGet]
        [Route("get-by-id/{taskItemId:int}")]
        public ResponseModel<TaskItem> GetById(int taskItemId)
        {
            return _service.GetTaskItem(taskItemId);
        }

        [HttpPut]
        [Route("update")]
        public ResponseModel<TaskItem> Update(TaskItem taskItem)
        {
            return _service.UpdateTaskItem(taskItem);
        }

        [HttpDelete]
        [Route("delete/{taskItemId:int}")]
        public ResponseModel Delete(int taskItemId)
        {
            return _service.DeleteTaskItem(taskItemId);
        }

        [HttpPost]
        [Route("add-task")]
        public ResponseModel<TaskItem> AddTaskItem(TaskModel taskModel)
        {
            return _service.AddTaskItem(taskModel.BoardId, new TaskItem
            {
                Id = taskModel.Id,
                UserId = taskModel.UserId,
                Value = taskModel.Value
            });
        }
    }
}