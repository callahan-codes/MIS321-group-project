using api.Models;
using api.Databases;
using Microsoft.AspNetCore.Mvc;
using api.Handlers;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicedController : ControllerBase
    {
        private Database database = new Database();
        public async Task<List<Serviced>> Get()
        {
            return await database.GetAllServiced();
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
