using api.Models;
using api.Databases;
using Microsoft.AspNetCore.Mvc;
namespace api.Controllers
{
    // written by Bryce Callahan
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        // database instance
        private Database database = new Database();

        // GET
        [HttpGet]
        public Task<List<Order>> Get()
        {
            // get all admin
            return database.GetAllOrders();
        }

        // POST
        [HttpPost]
        public void Post([FromBody] Order myOrder)
        {
            // add new admin
            database.AddNewOrder(myOrder);
        }

        // PUT
        [HttpPut("{myOrder}")]
        public void Put(Order myOrder)
        {
            // update order
            database.UpdateOrderService(myOrder);
        }

        // // DELETE
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        //     // "delete" admin
        //     database.DeleteCustomer(id);
        // }
    }
}
