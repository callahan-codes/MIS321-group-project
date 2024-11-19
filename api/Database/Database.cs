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
//updated Connor G 11/18/24
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
                    // Populate with actual data from the reader
                    Id = reader.GetInt32(0),  
                    Date = reader.GetString(1), 
                    Time = reader.GetString(2), 
                    Package = reader.GetInt32(3),  
                    PackageHours = reader.GetInt32(4),  
                    Cancelled = reader.GetBoolean(5),  
                    ServiceDate = reader.GetString(6),  
                    ServiceTime = reader.GetString(7), 
                    OrderedBy = reader.GetString(8),  
                    ServicedBy = reader.GetString(9)  
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


        //Created by Connor G 11/18/24
         private async Task<List<Order>> SelectOrders(string sql, List<MySqlParameter> parms)
        {
            List<Order> myOrders = new();

            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            using var command = new MySqlCommand(sql, connection);

            if (parms != null)
            {
                command.Parameters.AddRange(parms.ToArray());
            }
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                myOrders.Add(new Order
                {
                    Id = reader.GetInt32(0),
                    Date = reader.GetString(1),
                    Time = reader.GetString(2),
                    Package = reader.GetInt32(3),
                    PackageHours = reader.GetInt32(4),
                    Cancelled = reader.GetBoolean(5),
                    ServiceDate = reader.GetString(6),
                    ServiceTime = reader.GetString(7),
                    OrderedBy = reader.GetString(8),
                    ServicedBy = reader.GetString(9)
                });
            }

            return myOrders;
        }

        //Created by Connor G 11/18/24
        private async Task OrdersNoReturn(string sql, List<MySqlParameter> parms)
        {
            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            using var command = new MySqlCommand(sql, connection);

            if (parms != null)
            {
                command.Parameters.AddRange(parms.ToArray());
            }
            await command.ExecuteNonQueryAsync();
        }


        //Created by Connor G 11/18/24
        public async Task<List<Order>> GetOrderById(int id)
        {
            string sql = "SELECT * FROM orders WHERE Id = @id;";
            List<MySqlParameter> parms = new();
            parms.Add(new MySqlParameter(@"id", MySqlDbType.Int32) { Value = id });
            return await SelectOrders(sql, parms);
        }

        //Created by Connor G 11/18/24
        public async Task InsertOrder(Order myOrder)
        {
            string sql = @"INSERT INTO orders (Date, Time, Package, PackageHours, Cancelled, ServiceDate, ServiceTime, OrderedBy, ServicedBy)
                           VALUES (@Date, @Time, @Package, @PackageHours, @Cancelled, @ServiceDate, @ServiceTime, @OrderedBy, @ServicedBy);";

            List<MySqlParameter> parms = new();
            parms.Add(new MySqlParameter(@"Date", MySqlDbType.String) { Value = myOrder.Date });
            parms.Add(new MySqlParameter(@"Time", MySqlDbType.String) { Value = myOrder.Time });
            parms.Add(new MySqlParameter(@"Package", MySqlDbType.Int32) { Value = myOrder.Package });
            parms.Add(new MySqlParameter(@"PackageHours", MySqlDbType.Int32) { Value = myOrder.PackageHours });
            parms.Add(new MySqlParameter(@"Cancelled", MySqlDbType.Bit) { Value = myOrder.Cancelled });
            parms.Add(new MySqlParameter(@"ServiceDate", MySqlDbType.String) { Value = myOrder.ServiceDate });
            parms.Add(new MySqlParameter(@"ServiceTime", MySqlDbType.String) { Value = myOrder.ServiceTime });
            parms.Add(new MySqlParameter(@"OrderedBy", MySqlDbType.Int32) { Value = myOrder.OrderedBy });
            parms.Add(new MySqlParameter(@"ServicedBy", MySqlDbType.Int32) { Value = myOrder.ServicedBy });

            await OrdersNoReturn(sql, parms);
        }

       //Created by Connor G 11/18/24
        public async Task UpdateOrder(Order myOrder, int id)
        {
            string sql = @"UPDATE orders 
                           SET Date = @Date, 
                               Time = @Time, 
                               Package = @Package, 
                               PackageHours = @PackageHours, 
                               Cancelled = @Cancelled, 
                               ServiceDate = @ServiceDate, 
                               ServiceTime = @ServiceTime, 
                               OrderedBy = @OrderedBy, 
                               ServicedBy = @ServicedBy
                           WHERE Id = @id;";

            List<MySqlParameter> parms = new();
            parms.Add(new MySqlParameter(@"id", MySqlDbType.Int32) { Value = id });
            parms.Add(new MySqlParameter(@"Date", MySqlDbType.String) { Value = myOrder.Date });
            parms.Add(new MySqlParameter(@"Time", MySqlDbType.String) { Value = myOrder.Time });
            parms.Add(new MySqlParameter(@"Package", MySqlDbType.Int32) { Value = myOrder.Package });
            parms.Add(new MySqlParameter(@"PackageHours", MySqlDbType.Int32) { Value = myOrder.PackageHours });
            parms.Add(new MySqlParameter(@"Cancelled", MySqlDbType.Bit) { Value = myOrder.Cancelled });
            parms.Add(new MySqlParameter(@"ServiceDate", MySqlDbType.String) { Value = myOrder.ServiceDate });
            parms.Add(new MySqlParameter(@"ServiceTime", MySqlDbType.String) { Value = myOrder.ServiceTime });
            parms.Add(new MySqlParameter(@"OrderedBy", MySqlDbType.Int32) { Value = myOrder.OrderedBy });
            parms.Add(new MySqlParameter(@"ServicedBy", MySqlDbType.Int32) { Value = myOrder.ServicedBy });

            await OrdersNoReturn(sql, parms);
        }

        //Created by Connor G 11/18/24
        public async Task DeleteOrder(int id)
        {
            string sql = "UPDATE orders SET Cancelled = 1 WHERE Id = @id;";
            List<MySqlParameter> parms = new();
            parms.Add(new MySqlParameter(@"id", MySqlDbType.Int32) { Value = id });
            await OrdersNoReturn(sql, parms);
        }
    }
}