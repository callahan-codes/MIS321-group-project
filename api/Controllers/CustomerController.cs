using api.Models;
using api.Databases;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;


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
    public class CustomerController : Controller
    {
        // database instance
        private Database database = new Database();

        // GET
        [HttpGet]
        public Task<List<Customer>> Get()
        {
            // get all admin
            return database.GetAllCustomers();
        }

        // POST
        [HttpPost]
        public void Post([FromBody] Customer myCustomer)
        {
            // add new admin
            database.AddNewCustomer(myCustomer);
        }

        // DELETE
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            // "delete" admin
            database.DeleteCustomer(id);
        }

    }
}