using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GameOfLife.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Game()
        {
            ViewData["Message"] = "TypeScript Game of Life";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
