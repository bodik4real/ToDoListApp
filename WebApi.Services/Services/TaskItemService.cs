using System.Collections.Generic;
using WebApi.DAL.Contracts;
using WebApi.Entities;
using WebApi.Services.Models;

namespace WebApi.Services
{
    public class TaskItemService : ITaskItemService
    {
        private ITaskItemRepository _repository;

        public TaskItemService(ITaskItemRepository repository)
        {
            _repository = repository;
        }

        public ResponseModel<List<TaskItem>> UserTaskItems(string userId)
        {
            var response = new ResponseModel<List<TaskItem>>();
            if (userId != null)
            {
                response.Result = _repository.UserTaskItems(userId);
                response.IsSuccessful = true;
            }

            return response;
        }

        public ResponseModel<TaskItem> GetTaskItem(int taskItemId)
        {
            var response = new ResponseModel<TaskItem>();
            if (taskItemId!=0)
            {
                response.Result = _repository.GetTaskItem(taskItemId);
                response.IsSuccessful = true;
            }

            return response;
        }

        public ResponseModel<TaskItem> AddTaskItem(TaskItem taskItem)
        {
            var response = new ResponseModel<TaskItem>();
            if (taskItem != null)
            {
                response.Result = _repository.AddTaskItem(taskItem);
                response.IsSuccessful = true;
            }

            return response;
        }

        public ResponseModel UpdateTaskItem(TaskItem taskItem)
        {
            var response = new ResponseModel();
            if (taskItem != null)
            {
                _repository.UpdateTaskItem(taskItem);
                response.IsSuccessful = true;
            }

            return response;
        }

        public ResponseModel DeleteTaskItem(int taskItemId)
        {
            var response = new ResponseModel();
            if (taskItemId != 0)
            {
                _repository.DeleteTaskItem(taskItemId);
                response.IsSuccessful = true;
            }

            return response;
        }
    }
}
