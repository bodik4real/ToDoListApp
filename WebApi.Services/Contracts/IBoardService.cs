using System.Collections.Generic;
using WebApi.DAL.Entities;
using WebApi.Services.Models;

namespace WebApi.Services.Contracts
{
    public interface IBoardService
    {
        ResponseModel<Board> GetBoard(int boardId);

        ResponseModel<List<Board>> GetUserBoards(string userId);

        ResponseModel<Board> AddBoard(Board board);

        ResponseModel UpdateBoard(Board board);

        ResponseModel DeleteBoard(int boardId);
    }
}