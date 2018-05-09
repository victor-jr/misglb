using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Misglb.Data;
using Misglb.Models;
using System;
using System.Diagnostics;

namespace misglb.Controllers
{
  [Route("api/[controller]")]
  public class ApplicationDataController : Controller {
    
    private readonly MisglbDbContext _context;

    public ApplicationDataController(MisglbDbContext context) {
      _context = context;
    }
    
    [HttpGet("[action]")]
    public IEnumerable<Application> Applications() {
      return _context.Applications;
    }

    [HttpPost("[action]")]
    public IActionResult Create([FromBody] Application application) {
      if (application == null) {
        return BadRequest();
      }

      _context.Applications.Add(application);
      _context.SaveChanges();

      return CreatedAtRoute("GetApplication", new { id = application.ID }, application);
    }

    [HttpGet("{id}", Name = "GetApplication")]
    public IActionResult GetApplicationById(long id) {
      Application application = _context.Applications.FirstOrDefault(a => a.ID == id);
      if (application == null) {
        return NotFound();
      }
      return new ObjectResult(application);
    }
  }
}