using Microsoft.AspNet.Mvc;

namespace TS_require_Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        [HttpPost]
        public IActionResult Create([FromBody] PersonModel item)
        {
            return CreatedAtAction("Create",item);
        }

    }
}
