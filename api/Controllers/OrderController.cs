using api.Databases;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

//Created by Connor G 11/18/24
namespace api.Controllers
{
    public class OrderController
    {
         // GET: api/order
        [HttpGet]
        public Task<List<Order>> Get()
        {
            Database myDatabase = new();
            return myDatabase.GetAllOrders();
        }

        // GET: api/order/{id}
        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<Order> Get(int id)
        {
            Database myDatabase = new();
            var orders = await myDatabase.GetOrderById(id);
            return orders.Count > 0 ? orders[0] : null;
        }

        // POST: api/order
        [HttpPost]
        public async Task Post([FromBody] Order value)
        {
            Database myDatabase = new();
            await myDatabase.InsertOrder(value);
        }

        // DELETE: api/order/{id}
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            Database myDatabase = new();
            await myDatabase.DeleteOrder(id);
        }

        // PUT: api/order/{id}
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody] Order value)
        {
            Database myDatabase = new();
            await myDatabase.UpdateOrder(value, id);
        }
    }
}
    