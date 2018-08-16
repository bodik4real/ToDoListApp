using System;
using System.Collections.Generic;
using WebApi.DAL.Contracts;
using WebApi.DAL.Entities;
using WebApi.Services.Contracts;
using WebApi.Services.Models;

namespace WebApi.Services
{
    public class TaskItemService : ITaskItemService
    {
        private readonly ITaskItemRepository _repository;

        public TaskItemService(ITaskItemRepository repository)
        {
            _repository = repository;
        }

        public ResponseModel<List<TaskItem>> GetUserTaskItems(string userId)
        {
            var response = new ResponseModel<List<TaskItem>>();
            try
            {
                if (userId != null)
                {
                    response.Result = _repository.UserTaskItems(userId);
                    response.IsSuccessful = true;
                }
            }
            catch (Exception e)
            {
                response.ErrorMessage = e.Message;
                response.IsSuccessful = false;
            }

            return response;
        }

        public ResponseModel<TaskItem> GetTaskItem(int taskItemId)
        {
            var response = new ResponseModel<TaskItem>();
            try
            {
                if (taskItemId != 0)
                {
                    response.Result = _repository.GetTaskItem(taskItemId);
                    response.IsSuccessful = true;
                }
            }
            catch (Exception e)
            {
                response.ErrorMessage = e.Message;
                response.IsSuccessful = false;
            }

            return response;
        }

        public ResponseModel<TaskItem> AddTaskItem(TaskItem taskItem)
        {
            var response = new ResponseModel<TaskItem>();
            try
            {
                if (taskItem != null)
                {
                    response.Result = _repository.AddTaskItem(taskItem);
                    response.IsSuccessful = true;
                }
            }
            catch (Exception e)
            {
                response.ErrorMessage = e.Message;
                response.IsSuccessful = false;
            }

            return response;
        }

        public ResponseModel UpdateTaskItem(TaskItem taskItem)
        {
            var response = new ResponseModel();
            try
            {
                if (taskItem != null)
                {
                    _repository.UpdateTaskItem(taskItem);
                    response.IsSuccessful = true;
                }
            }
            catch (Exception e)
            {
                response.ErrorMessage = e.Message;
                response.IsSuccessful = false;
            }

            return response;
        }

        public ResponseModel DeleteTaskItem(int taskItemId)
        {
            var response = new ResponseModel();
            try
            {
                if (taskItemId != 0)
                {
                    _repository.DeleteTaskItem(taskItemId);
                    response.IsSuccessful = true;
                }
            }
            catch (Exception e)
            {
                response.ErrorMessage = e.Message;
                response.IsSuccessful = false;
            }

            return response;
        }
    }
}