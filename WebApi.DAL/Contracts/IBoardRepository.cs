using System.Collections.Generic;
using WebApi.DAL.Entities;

namespace WebApi.DAL.Contracts
{
    public interface IBoardRepository
    {
         Board GetBoard(int boardId);   
        
         List<Board> GetAll();

         List<Board> UserBoards(string userId);

         Board AddBoard(Board board);

         void UpdateBoard(Board board);

         void DeleteBoard(int boardId);       
    }
}
