using System.Collections.Generic;
using WebApi.DAL.Entities;
using WebApi.Services.Models;

namespace WebApi.Services
{
    public interface IBoardService
    {
        ResponseModel<Board> GetBoard(int boardId);
        ResponseModel<List<Board>> UserBoards(string userId);
        ResponseModel AddBoard(Board board);
        ResponseModel UpdateBoard(Board board);
        ResponseModel DeleteBoard(int boardId);
    }
}
