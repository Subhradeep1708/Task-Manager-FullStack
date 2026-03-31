namespace TaskManagerAPI.Models
{
    public class TaskItem
    {
        public Guid Id {get; set;}
        public required string Text {get; set;}
        public required string Status {get; set;}
    }
}