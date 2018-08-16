using System.Collections.Generic;
using WebApi.DAL.Contracts;
using WebApi.DAL.Entities;
using System.Linq;

namespace WebApi.DAL.Repositories
{
    public class BoardRepository : IBoardRepository
    {
        private ToDoListDbContext _context;
        public BoardRepository(ToDoListDbContext context)
        {
            _context = context;
        }

        public Board GetBoard(int boardId)
        {
            return (from b in _context.Board
                    where b.Id == boardId
                    select b).FirstOrDefault();
        }

        public List<Board> GetAll()
        {
            return _context.Board.ToList();
        }

        public List<Board> UserBoards(string userId)
        {
            return (from item in _context.Board
                    where item.UserId == userId
                    select item)
                   .ToList();
        }

        public Board AddBoard(Board board)
        {
            _context.Board.Add(board);

            _context.SaveChanges();

            return _context.Board.Last();
        }

        public void UpdateBoard(Board board)
        {
            var updatedBoard = (from b in _context.Board
                                where b.Id == board.Id
                                select b)
                                .FirstOrDefault();

            if (updatedBoard == null)
            {
                return;
            }

            updatedBoard.Name = board.Name;

            _context.SaveChanges();
        }

        public void DeleteBoard(int boardId)
        {
            var BoardForDelete = (from b in _context.Board
                                  where b.Id == boardId
                                  select b)
                                  .FirstOrDefault();

            if (BoardForDelete == null)
            {
                return;
            }

            var boardTaskItemForDelete = (from b in _context.BoardTaskItem
                                       where b.BoardId == boardId
                                       select b).ToList();

            _context.Board.Remove(BoardForDelete);

            _context.BoardTaskItem.RemoveRange(boardTaskItemForDelete);

            _context.SaveChanges();
        }
    }
}
