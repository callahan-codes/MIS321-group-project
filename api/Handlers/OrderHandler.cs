using api.Models;
using MySqlConnector;
namespace api.Handlers
{
    public class OrderHandler
    {
        // created by Connor G 11/18/24
        // updated by BC 11/23/2024
        public async Task<List<Order>> GetAllOrders(string cs)
        {

            List<Order> myOrders = [];

            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            using var command = new MySqlCommand("SELECT * FROM titletowncatering.order;", connection);

            using var reader = await command.ExecuteReaderAsync();
           while (await reader.ReadAsync())
            {
                myOrders.Add(new Order
                {

                    // Populate with actual data from the reader
                    Id = reader.GetInt32(0),  
                    Date = reader.GetString(1), 
                    Time = reader.GetString(2), 
                    Cancelled = reader.GetBoolean(3),
                    ServiceDate = reader.GetString(4),
                    ServiceTime = reader.GetString(5),
                    ServiceAddress = reader.GetString(6),
                    Duration = reader.GetInt32(7),
                    Package = reader.GetInt32(8), 
                    OrderedBy = reader.GetInt32(9), 
                    ServicedBy = reader.GetInt32(10),
                    PaymentId = 1
                });
            }

            Console.WriteLine("Returned Orders: ");
            foreach(var order in myOrders)
            {
                Console.WriteLine($"\t- ID: {order.Id}");
            }

            return myOrders;
        }

        public async Task AddNewOrder(string cs, Order order)
        {
            Console.WriteLine("hi");
            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();
            
            // create sql command for db
            using var command = new MySqlCommand("", connection);

            // assign customer data
            int orderID = order.Id;
            string? orderDate = order.Date;
            string? orderTime = order.Time;
            bool orderCancelled = order.Cancelled;
            string? orderServiceDate = order.ServiceDate;
            string? orderServiceTime = order.ServiceTime;
            string? orderServiceAddress = order.ServiceAddress;
            int orderDuration = order.Duration;
            int orderPackage = order.Package;
            int orderOrderedBy = order.OrderedBy;
            int orderServicedBy = order.ServicedBy;
            int paymentID = order.PaymentId;

            // custid
            // paymentid

            // command text
            command.CommandText = @$"INSERT INTO titletowncatering.order(OrderId, OrderDate, OrderTime, OrderCancelled, ServiceDate, ServiceTime, ServiceAddress, ServiceDuration, PackageType, OrderedBy, ServicedBy, PaymentId) 
            VALUES(@orderID, @orderDate, @orderTime, @orderCancelled, @orderServiceDate, @orderServiceTime, @orderServiceAddress, @orderDuration, @orderPackage, @orderedBy, @servicedBy, @paymentID);";

            Console.WriteLine(command.CommandText);

            // command paramaters
            command.Parameters.AddWithValue("@orderID", orderID);
            command.Parameters.AddWithValue("@orderDate", orderDate);
            command.Parameters.AddWithValue("@orderTime", orderTime);
            command.Parameters.AddWithValue("@orderCancelled", orderCancelled);
            command.Parameters.AddWithValue("@orderServiceDate", orderServiceDate);
            command.Parameters.AddWithValue("@orderServiceTime", orderServiceTime);
            command.Parameters.AddWithValue("@orderServiceAddress", orderServiceAddress);
            command.Parameters.AddWithValue("@orderDuration", orderDuration);
            command.Parameters.AddWithValue("@orderPackage", orderPackage);
            command.Parameters.AddWithValue("@orderedBy", orderOrderedBy);
            command.Parameters.AddWithValue("@servicedBy", orderServicedBy);
            command.Parameters.AddWithValue("@paymentID", paymentID);
            

            // prepare command
            command.Prepare();

            // execute command
            command.ExecuteNonQuery();
        }

        // connect to db | update data
        public async Task UpdateOrderServiced(string cs, Order myOrder)
        {
            // log
            Console.WriteLine($"Updating Order {myOrder.Id}");

            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();
            
            // create sql command for db
            using var command = new MySqlCommand("", connection);

            // command text | soft delete
            command.CommandText = @$"UPDATE titletowncatering.order SET ServicedBy = {myOrder.ServicedBy} WHERE OrderId = {myOrder.Id};";

            // prepare command
            command.Prepare();

            // execute command
            command.ExecuteNonQuery();
        }
    
        
//    //Created by Connor G 11/18/24
//          private async Task<List<Order>> SelectOrders(string sql, List<MySqlParameter> parms)
//         {
//             List<Order> myOrders = new();

//             using var connection = new MySqlConnection(cs);
//             await connection.OpenAsync();
//             using var command = new MySqlCommand(sql, connection);

//             if (parms != null)
//             {
//                 command.Parameters.AddRange(parms.ToArray());
//             }
//             using var reader = await command.ExecuteReaderAsync();

//             while (await reader.ReadAsync())
//             {
//                 myOrders.Add(new Order
//                 {
//                     Id = reader.GetInt32(0),
//                     Date = reader.GetString(1),
//                     Time = reader.GetString(2),
//                     Package = reader.GetInt32(3),
//                     PackageHours = reader.GetInt32(4),
//                     Cancelled = reader.GetBoolean(5),
//                     ServiceDate = reader.GetString(6),
//                     ServiceTime = reader.GetString(7),
//                     OrderedBy = reader.GetString(8),
//                     ServicedBy = reader.GetString(9)
//                 });
//             }

//             return myOrders;
//         }

//         //Created by Connor G 11/18/24
//         private async Task OrdersNoReturn(string cs, string sql, List<MySqlParameter> parms)
//         {
//             using var connection = new MySqlConnection(cs);
//             await connection.OpenAsync();
//             using var command = new MySqlCommand(sql, connection);

//             if (parms != null)
//             {
//                 command.Parameters.AddRange(parms.ToArray());
//             }
//             await command.ExecuteNonQueryAsync();
//         }


//         //Created by Connor G 11/18/24
//         public async Task<List<Order>> GetOrderById(int id)
//         {
//             string sql = "SELECT * FROM orders WHERE Id = @id;";
//             List<MySqlParameter> parms = new();
//             parms.Add(new MySqlParameter(@"id", MySqlDbType.Int32) { Value = id });
//             return await SelectOrders(sql, parms);
//         }

//         //Created by Connor G 11/18/24
//         public async Task InsertOrder(Order myOrder)
//         {
//             string sql = @"INSERT INTO orders (Date, Time, Package, PackageHours, Cancelled, ServiceDate, ServiceTime, OrderedBy, ServicedBy)
//                            VALUES (@Date, @Time, @Package, @PackageHours, @Cancelled, @ServiceDate, @ServiceTime, @OrderedBy, @ServicedBy);";

//             List<MySqlParameter> parms = new();
//             parms.Add(new MySqlParameter(@"Date", MySqlDbType.String) { Value = myOrder.Date });
//             parms.Add(new MySqlParameter(@"Time", MySqlDbType.String) { Value = myOrder.Time });
//             parms.Add(new MySqlParameter(@"Package", MySqlDbType.Int32) { Value = myOrder.Package });
//             parms.Add(new MySqlParameter(@"PackageHours", MySqlDbType.Int32) { Value = myOrder.PackageHours });
//             parms.Add(new MySqlParameter(@"Cancelled", MySqlDbType.Bit) { Value = myOrder.Cancelled });
//             parms.Add(new MySqlParameter(@"ServiceDate", MySqlDbType.String) { Value = myOrder.ServiceDate });
//             parms.Add(new MySqlParameter(@"ServiceTime", MySqlDbType.String) { Value = myOrder.ServiceTime });
//             parms.Add(new MySqlParameter(@"OrderedBy", MySqlDbType.Int32) { Value = myOrder.OrderedBy });
//             parms.Add(new MySqlParameter(@"ServicedBy", MySqlDbType.Int32) { Value = myOrder.ServicedBy });

//             await OrdersNoReturn(sql, parms);
//         }

//        //Created by Connor G 11/18/24
//         public async Task UpdateOrder(Order myOrder, int id)
//         {
//             string sql = @"UPDATE orders 
//                            SET Date = @Date, 
//                                Time = @Time, 
//                                Package = @Package, 
//                                PackageHours = @PackageHours, 
//                                Cancelled = @Cancelled, 
//                                ServiceDate = @ServiceDate, 
//                                ServiceTime = @ServiceTime, 
//                                OrderedBy = @OrderedBy, 
//                                ServicedBy = @ServicedBy
//                            WHERE Id = @id;";

//             List<MySqlParameter> parms = new();
//             parms.Add(new MySqlParameter(@"id", MySqlDbType.Int32) { Value = id });
//             parms.Add(new MySqlParameter(@"Date", MySqlDbType.String) { Value = myOrder.Date });
//             parms.Add(new MySqlParameter(@"Time", MySqlDbType.String) { Value = myOrder.Time });
//             parms.Add(new MySqlParameter(@"Package", MySqlDbType.Int32) { Value = myOrder.Package });
//             parms.Add(new MySqlParameter(@"PackageHours", MySqlDbType.Int32) { Value = myOrder.PackageHours });
//             parms.Add(new MySqlParameter(@"Cancelled", MySqlDbType.Bit) { Value = myOrder.Cancelled });
//             parms.Add(new MySqlParameter(@"ServiceDate", MySqlDbType.String) { Value = myOrder.ServiceDate });
//             parms.Add(new MySqlParameter(@"ServiceTime", MySqlDbType.String) { Value = myOrder.ServiceTime });
//             parms.Add(new MySqlParameter(@"OrderedBy", MySqlDbType.Int32) { Value = myOrder.OrderedBy });
//             parms.Add(new MySqlParameter(@"ServicedBy", MySqlDbType.Int32) { Value = myOrder.ServicedBy });

//             await OrdersNoReturn(sql, parms);
//         }

//         //Created by Connor G 11/18/24
//         public async Task DeleteOrder(int id)
//         {
//             string sql = "UPDATE orders SET Cancelled = 1 WHERE Id = @id;";
//             List<MySqlParameter> parms = new();
//             parms.Add(new MySqlParameter(@"id", MySqlDbType.Int32) { Value = id });
//             await OrdersNoReturn(sql, parms);
//         }
    }
}