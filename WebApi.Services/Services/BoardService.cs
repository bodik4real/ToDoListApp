using System;
using System.Collections.Generic;
using WebApi.DAL.Contracts;
using WebApi.DAL.Entities;
using WebApi.Services.Models;

namespace WebApi.Services
{
    public class BoardService : IBoardService
    {
        private IBoardRepository _repository;

        public BoardService(IBoardRepository repository)
        {
            _repository = repository;
        }

        public ResponseModel<Board> GetBoard(int boardId)
        {
            var response = new ResponseModel<Board>();
            if (boardId != 0)
            {
                response.Result = _repository.GetBoard(boardId); 
                response.IsSuccessful = true;
            }

            return response;
        }

        public ResponseModel<List<Board>> UserBoards(string userId)
        {
            var response = new ResponseModel<List<Board>>();
            if (userId != null)
            {        
                response.Result = _repository.UserBoards(userId);
                response.IsSuccessful = true;
            }

            return response;
        }

        public ResponseModel<Board> AddBoard(Board board)
        {
            var response = new ResponseModel<Board>();
            if (board != null)
            {
                response.Result = _repository.AddBoard(board);
                response.IsSuccessful = true;
            }

            return response;
        }

        public ResponseModel UpdateBoard(Board board)
        {
            var response = new ResponseModel();
            if (board != null)
            {
                _repository.UpdateBoard(board);
                response.IsSuccessful = true;
            }

            return response;
        }

        public ResponseModel DeleteBoard(int boardId)
        {
            var response = new ResponseModel();
            if (boardId != 0)
            {
                try
                {
                    _repository.DeleteBoard(boardId);
                    response.IsSuccessful = true;
                }
                catch(Exception ex)
                {
                    response.ErrorMessage = ex.Message;
                }
            }

            return response;
        }
    }
}
