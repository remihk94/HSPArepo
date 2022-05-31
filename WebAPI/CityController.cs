using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using HSPA.Models;

namespace HSPA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        public CityController()
        {
        }

        [HttpGet("")]
        public IEnumerable<string> GetStrings()
        {
            return new string[] { "Aleppo" , "Hama" , "Lattaqia" , "Homs" , "Damascus" };
        }

    }
}