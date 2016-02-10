using Microsoft.AspNet.Mvc;

namespace TS_require_Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
           return View();
        }
        
        public IActionResult Site2()
        {
            return View();
        }
    }
}
