using api.Models;
using api.Databases;
using Microsoft.AspNetCore.Mvc;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicedController : ControllerBase
    {
        private Database database = new Database();

        [HttpGet]
        public Task<List<Serviced>> Get()
        {
            return database.GetAllServiced();
        }

        // POST: api/Serviced
        [HttpPost]
        public void Post([FromBody] Serviced value)
        {
            database.AddNewServiced(value); 
        }

        [HttpDelete ("{id}")]
        public async Task Delete(int id){
            database.DeleteServiced(id);
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
