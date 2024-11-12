using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using api.Models;
using MySqlConnector;

namespace api.Databases
{
    public class Database
    {
        private readonly string? cs;

        public Database()
        {
            cs = "Server=qn0cquuabmqczee2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;Port=3306;User ID=bvlgcnefshzlt68q;Password=u9x7q1ky398srfal;Database=wpwwyo4a82kv2jrd;Convert Zero Datetime=True";
        }

        public async Task<List<Admin>> GetAllAdmins()
        {

            List<Admin> myAdmins = [];

            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            using var command = new MySqlCommand("SELECT * FROM wpwwyo4a82kv2jrd.admins;", connection);

            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                myAdmins.Add(new Admin
                {
                    // All of the various things to get pulled
                    Id = 1,
                    Email = "Cool@123",
                    Password = "Username"
                });
            }

            return myAdmins;
        }

        public async Task<List<Customer>> GetAllCustomers()
        {

            List<Customer> myCustomers = [];

            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            using var command = new MySqlCommand("SELECT * FROM wpwwyo4a82kv2jrd.customers;", connection);

            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                myCustomers.Add(new Customer
                {
                    // All of the various things to get pulled
                    Id = 1,
                    Name = "Trump",
                    Email = "customer@gmail.com"
                });
            }

            return myCustomers;
        }

        public async Task<List<Order>> GetAllOrders()
        {

            List<Order> myOrders = [];

            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            using var command = new MySqlCommand("SELECT * FROM wpwwyo4a82kv2jrd.orders;", connection);

            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                myOrders.Add(new Order
                {
                    // All of the various things to get pulled
                    Id = 1,
                    Date = "now",
                    Time = "4",
                    Package = 1,
                    PackageHours = 4,
                    Cancelled = false,
                    ServiceDate = "tommorow",
                    ServiceTime = "6",
                    OrderedBy = "this should be custID not a string right?",
                    ServicedBy = "aming id"
                });
            }

            return myOrders;
        }
        public async Task<List<Payment>> GetAllPayments()
        {

            List<Payment> myPayments = [];

            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            using var command = new MySqlCommand("SELECT * FROM wpwwyo4a82kv2jrd.payments;", connection);

            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                myPayments.Add(new Payment
                {
                    // All of the various things to get pulled
                    Id = 1,
                    OrderId = 1,
                    CustomerId = 1,
                    PaymentDate = "now",
                    PaymentAmount = 4,
                    PaymentMethod = "balling harder than yesterday",
                    PaymentSuccessful = true

                });
            }

            return myPayments;
        }
    }
}