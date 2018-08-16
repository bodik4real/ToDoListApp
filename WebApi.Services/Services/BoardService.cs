using System;
using System.Collections.Generic;
using WebApi.DAL.Contracts;
using WebApi.DAL.Entities;
using WebApi.Services.Contracts;
using WebApi.Services.Models;

namespace WebApi.Services
{
    public class BoardService : IBoardService
    {
        private readonly IBoardRepository _repository;

        public BoardService(IBoardRepository repository)
        {
            _repository = repository;
        }

        public ResponseModel<Board> GetBoard(int boardId)
        {
            var response = new ResponseModel<Board>();
            try
            {
                if (boardId != 0)
                {
                    response.Result = _repository.GetBoard(boardId);
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

        public ResponseModel<List<Board>> GetUserBoards(string userId)
        {
            var response = new ResponseModel<List<Board>>();
            try
            {
                if (userId != null)
                {
                    response.Result = _repository.UserBoards(userId);
                    response.IsSuccessful = true;
                }
                else
                {
                    response.ErrorMessage = "Incorrect userId";
                    response.IsSuccessful = false;
                }
            }
            catch (Exception e)
            {
                response.ErrorMessage = e.Message;
                response.IsSuccessful = false;
            }

            return response;
        }

        public ResponseModel<Board> AddBoard(Board board)
        {
            var response = new ResponseModel<Board>();
            try
            {
                if (board != null)
                {
                    response.Result = _repository.AddBoard(board);
                    response.IsSuccessful = true;
                }
                else
                {
                    response.ErrorMessage = "Can't save board. Incorrect input data";
                    response.IsSuccessful = false;
                }
            }
            catch (Exception e)
            {
                response.ErrorMessage = e.Message;
                response.IsSuccessful = false;
            }

            return response;
        }

        public ResponseModel UpdateBoard(Board board)
        {
            var response = new ResponseModel();
            try
            {
                if (board != null)
                {
                    _repository.UpdateBoard(board);
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

        public ResponseModel DeleteBoard(int boardId)
        {
            var response = new ResponseModel();
            try
            {
                if (boardId != 0)
                {
                    _repository.DeleteBoard(boardId);
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