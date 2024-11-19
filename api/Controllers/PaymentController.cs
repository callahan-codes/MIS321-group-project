//Hayden Walls 11/19/2024
using Microsoft.AspNetCore.Mvc;
using api.Databases;
using api.Models;

namespace api.Controllers
{
    //All things considered this controller should handle any requests payment related activities
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentController : ControllerBase
    {
        //Instantiates the database class
            private readonly Database database;

        //Simple constructor which instations a new database instance aswell
        public PaymentController()
        {
            database = new Database();
        }

        // GET: payment
        //Should retrieve all payments and returns a list of them
        [HttpGet]
        public async Task<ActionResult<List<Payment>>> GetAllPayments()
        {
            var payments = await database.GetAllPayments();
            return Ok(payments);
        }

        // POST: payment
        //This creates a new payment in the database
        [HttpPost]
        public async Task<IActionResult> AddPayment([FromBody] Payment payment)
        {
            if (payment == null)
            {
                //If a payment comes out as null (i.e. if its inputted incorrectly or smth, it should return a bad request erroe)
                return BadRequest("Payment cannot be null.");
            }

            await database.AddNewPayment(payment);
            return CreatedAtAction(nameof(GetAllPayments), new { id = payment.Id }, payment);
        }

        // DELETE: payment/via ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayment(int id)
        {
            await database.DeletePayment(id);
            return NoContent();
        }
    }
}
