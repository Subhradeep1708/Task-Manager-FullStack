using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.EntityFrameworkCore;
using TaskManagerAPI.Data;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class TaskController : ControllerBase
    {
        private readonly AppDbContext _context;

        //constructor
        public TaskController(AppDbContext context)
        {
            _context = context;
        }

        //Get all task
        [HttpGet]
        public async Task<IActionResult> GetAllTask()
        {
            var tasks = await _context.Tasks.ToListAsync();
            return Ok(tasks);
        }

        // Create a task
        [HttpPost]
        public async Task<IActionResult> AddTask(TaskItem task)
        {
            task.Id = Guid.NewGuid();

            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return Ok(task);
        }

        // update tasks with id
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(Guid id, TaskItem updatedTask)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            //update 
            task.Text = updatedTask.Text;
            task.Status = updatedTask.Status;

            await _context.SaveChangesAsync();

            return Ok(task);
        }
        //delete tasks wit id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(Guid id)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(task);
            //save to db
            await _context.SaveChangesAsync();
            return Ok("Deleted Task Successfully");
        }

    }
}