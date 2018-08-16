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

        public ResponseModel<List<TaskItem>> GetTaskItemsByBoardId(int boardId)
        {
            var response = new ResponseModel<List<TaskItem>>();
            try
            {
                if (boardId != 0)
                {
                    response.Result = _repository.GetTaskItemsByBoardId(boardId);
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

        public ResponseModel<TaskItem> AddTaskItem(int boardId, TaskItem taskItem)
        {
            var response = new ResponseModel<TaskItem>();
            try
            {
                if (taskItem != null)
                {
                    response.Result = _repository.AddTaskItem(boardId, taskItem);
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

        public ResponseModel<TaskItem> UpdateTaskItem(TaskItem taskItem)
        {
            var response = new ResponseModel<TaskItem>();
            try
            {
                if (taskItem != null)
                {
                    response.Result =  _repository.UpdateTaskItem(taskItem);
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