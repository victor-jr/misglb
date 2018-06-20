using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Misglb.Data;
using Misglb.Models;
using System;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace misglb.Controllers
{
  [Route("api/[controller]")]
  public class ApplicationController : Controller {
    
    private readonly MisglbDbContext _context;

    public ApplicationController(MisglbDbContext context) 
    {
      _context = context;
    }
    
    [HttpGet("[action]")]
    public IEnumerable<Application> Applications() 
    {
      return _context.Applications;
    }

    [HttpPost("[action]")]
    public IActionResult Create([FromBody] Application application) 
    {
      if (application == null) {
        return BadRequest();
      }
      _context.Applications.Add(application);
      _context.SaveChanges();
      return CreatedAtRoute("GetApplication", new { id = application.ID }, application);
    }

    [HttpGet("{id}", Name = "GetApplication")]
    public IActionResult GetApplicationById(long id) 
    {
      Application application = _context.Applications
        .Include(a => a.CurrentContact)
        .Include(a => a.PermanentContact)
        .Include(a => a.EmergencyContact)
        .Include(a => a.Mother)
        .Include(a => a.Father)
        .Include(a => a.Guardian)
        .Include(a => a.CurrentCollege)
        .Include(a => a.PriorCollege)
        .Include(a => a.HighSchool)
        .FirstOrDefault(a => a.ID == id);
      if (application == null) {
        return NotFound();
      }
      return new ObjectResult(application);
    }

    // [HttpGet("{id}")]
    // [ProducesResponseType(200, Type = typeof(Application))]
    // [ProducesResponseType(404)]
    // public async Task<IActionResult> Application(int id) {
    //   Application app = await _context.Applications.FirstOrDefaultAsync(a => a.ID == id);
    //   if (app == null) {
    //     return NotFound();
    //   }
    //   return Ok(app);
    // }

    [HttpPost("user_applications")]
    public async Task<IActionResult> ApplicationByUserId([FromBody] Misglb.Models.User user)
    {
      List<Application> applications = await _context.Applications
        .Where(a => a.UserId.Equals(user.Sub))
        .ToListAsync();
      if (applications.Count == 0) {
        return NotFound();
      }
      return Ok(applications);
    }
  }
}