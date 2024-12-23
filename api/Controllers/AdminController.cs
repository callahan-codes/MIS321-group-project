using api.Models;
using api.Databases;
using Microsoft.AspNetCore.Mvc;


namespace api.Controllers
{
    /*
        Written by Bryce Callahan 11/15/2024

        this is the admin controller that
        calls the respective admin handler 
        function depending on the controller
        method.
    */

    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : Controller
    {
        // database instance
        private Database database = new Database();

        // GET
        [HttpGet]
        public Task<List<Admin>> Get()
        {
            // get all admin
            return database.GetAllAdmins();
        }

        // POST
        [HttpPost]
        public void Post([FromBody] Admin myAdmin)
        {
            // add new admin
            database.AddNewAdmin(myAdmin);
        }

        // PUT
        [HttpPut("{myAdmin}")]
        public void Put(Admin myAdmin)
        {
            // update admin
            database.UpdateAdminInfo(myAdmin);
        }

        // DELETE
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            // "delete" admin
            database.DeleteAdmin(id);
        }
    }
}