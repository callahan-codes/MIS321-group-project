using api.Models;
using api.Databases;
using Microsoft.AspNetCore.Mvc;

// written by Hayden Walls | updated by BC 11/21/2024

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        // database instance
        private Database database = new Database();

       // GET
        [HttpGet]
        public Task<List<Payment>> Get()
        {
            // get all admin
            return database.GetAllPayments();
        }
    }
}
