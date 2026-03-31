using Microsoft.AspNetCore.Mvc;

namespace TaskManagerAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class TestController: ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("App is working");
        }
    }

}