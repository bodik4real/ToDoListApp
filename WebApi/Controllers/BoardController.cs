using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net;
using WebApi.DAL.Entities;
using WebApi.Models;
using WebApi.Services;
using WebApi.Services.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class BoardController : ControllerBase
    {
        private IBoardService _service;

        public BoardController(IBoardService service)
        {
            _service = service;
        }

        [HttpGet]
        public ResponseModel<Board> GetBoard(int boardId)
        {
            return _service.GetBoard(boardId);
        }

        [HttpGet]
        public ResponseModel<List<Board>> UserBoards(string userId)
        {
            return _service.UserBoards(userId);
        }

        [HttpGet]
        public ResponseModel Delete(int boardId)
        {
            return _service.DeleteBoard(boardId);
        }

        [HttpPost]
        public ResponseModel Add(Board board)
        {
            return _service.AddBoard(board);
        }

        [HttpPost]
        public ResponseModel UpdateBoard(Board board)
        {
            return _service.UpdateBoard(board);
        }
    }
}