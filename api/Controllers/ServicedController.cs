using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Database;
using api.Models;
using api.Databases;

namespace api.Controllers
{
    [Route("[controller]")]
    public class ServicedController : Controller
    {
        public async Task<List<Serviced>> Get()
        {
            DatabaseHandler dbHandler = new();
            string cs = dbHandler.cs;
            ServicedHandler myDatabase = new(cs);
            return await myDatabase.GetAllServiced();
        }

        // POST: api/Serviced
        [HttpPost]
        public async Task Post([FromBody] Serviced value)
        {
            DatabaseHandler dbHandler = new();
            string cs = dbHandler.cs;
            ServicedHandler myDatabase = new(cs);
            await myDatabase.PostServiced(value);
        }

        [HttpDelete ("{id}")]
        public async Task Delete(int id){
            DatabaseHandler dbHandler = new();
            string cs = dbHandler.cs;
            ServicedHandler myDatabase = new(cs);
            await myDatabase.DeleteServiced(id);
            // Maybe need 2 ids for this since a bridge table
        }

        [HttpPut]
        public async Task Put([FromBody] Serviced value){
            DatabaseHandler dbHandler = new();
            string cs = dbHandler.cs;
            ServicedHandler myDatabase = new(cs);
            await myDatabase.UpdateServiced(value);
        }
    }
}