﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using WebApi.DAL.Entities;
using WebApi.Services.Contracts;
using WebApi.Services.Models;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("CorsPolicy")]
    [Authorize]
    [ApiController]
    public class BoardController : Controller
    {
        private readonly IBoardService _service;

        public BoardController(IBoardService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("get-by-id/{boardId:int}")]
        public ResponseModel<Board> GetById(int boardId)
        {
            return _service.GetBoard(boardId);
        }

        [HttpGet]
        [Route("get-user-boards/{userId}")]
        public ResponseModel<List<Board>> GetUserBoards(string userId)
        {
            return _service.GetUserBoards(userId);
        }

        [HttpDelete]
        [Route("delete/{boardId:int}")]
        public ResponseModel Delete(int boardId)
        {
            return _service.DeleteBoard(boardId);
        }

        [HttpPost]
        [Route("save")]
        public ResponseModel<Board> Save(Board board)
        {
            return _service.AddBoard(board);
        }

        [HttpPut]
        [Route("update")]
        public ResponseModel Update(Board board)
        {
            return _service.UpdateBoard(board);
        }
    }
}