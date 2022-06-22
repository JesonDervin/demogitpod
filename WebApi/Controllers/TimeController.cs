using Microsoft.AspNetCore.Mvc;
namespace WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class TimeController : ControllerBase
{
    public ActionResult<string> Today()
    {
        return DateTime.Today.ToString();
    }
}