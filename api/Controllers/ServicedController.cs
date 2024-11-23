using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Databases;
using api.Models;

namespace api.Controllers
{
    [Route("[controller]")]
    public class ServicedController : Controller
    {
        public async Task<List<Serviced>> Get()
        {
            return await GetAllServiced();
        }

        // POST: api/Serviced
        [HttpPost]
        public async Task Post([FromBody] Serviced value)
        {
            Database dbHandler = new();
            string cs = dbHandler.cs;
            ServicedHandler myDatabase = new(cs);
            await myDatabase.PostServiced(value);
        }

        [HttpDelete ("{id}")]
        public async Task Delete(int id){
            Database dbHandler = new();
            string cs = dbHandler.cs;
            ServicedHandler myDatabase = new(cs);
            await myDatabase.DeleteServiced(id);
            // Maybe need 2 ids for this since a bridge table
        }

        [HttpPut]
        public async Task Put([FromBody] Serviced value){
            Database dbHandler = new();
            string cs = dbHandler.cs;
            ServicedHandler myDatabase = new(cs);
            await myDatabase.UpdateServiced(value);
        }
    }
}