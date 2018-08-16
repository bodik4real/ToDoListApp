using System.Collections.Generic;
using System.Linq;
using WebApi.DAL.Contracts;
using WebApi.DAL.DbContexts;
using WebApi.DAL.Entities;

namespace WebApi.DAL.Repositories
{
    public class BoardRepository : IBoardRepository
    {
        private readonly ToDoListDbContext _context;

        public BoardRepository(ToDoListDbContext context)
        {
            _context = context;
        }

        public Board GetBoard(int boardId)
        {
            return _context.Board.FirstOrDefault(b => b.Id == boardId);
        }

        public List<Board> GetAll()
        {
            return _context.Board.ToList();
        }

        public List<Board> UserBoards(string userId)
        {
            return _context.Board.Where(b => b.UserId == userId).ToList();
        }

        public Board AddBoard(Board board)
        {
            _context.Board.Add(board);

            _context.SaveChanges();

            return _context.Board.Last();
        }

        public void UpdateBoard(Board board)
        {
            var updatedBoard = _context.Board.FirstOrDefault(b => b.Id == board.Id);

            if (updatedBoard == null)
            {
                return;
            }

            updatedBoard.Name = board.Name;

            _context.SaveChanges();
        }

        public void DeleteBoard(int boardId)
        {
            var boardForDelete = _context.Board.FirstOrDefault(b => b.Id == boardId);

            if (boardForDelete == null)
            {
                return;
            }

            var boardTaskItemForDelete = _context.BoardTaskItem.Where(b => b.BoardId == boardId).ToList();

            _context.Board.Remove(boardForDelete);

            _context.BoardTaskItem.RemoveRange(boardTaskItemForDelete);

            _context.SaveChanges();
        }

        public TaskItem AddTask(int boardId, TaskItem taskItem)
        {
            var boardTaskItem = new BoardTaskItem();
            boardTaskItem.BoardId = boardId;
            boardTaskItem.TaskItemId = taskItem.Id;
            boardTaskItem.TaskItem = taskItem;
            _context.BoardTaskItem.Add(boardTaskItem);
            _context.SaveChanges();

            return _context.TaskItem.Last();
        }
    }
}