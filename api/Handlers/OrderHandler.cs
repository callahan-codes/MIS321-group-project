using api.Models;
using MySqlConnector;
namespace api.Handlers
{
    public class OrderHandler
    {
        // created by Connor G 11/18/24
        // updated by BC 11/23/2024
        // updated by BC 11/26/2024
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
                    ServiceCompleted = reader.GetBoolean(11)
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
            bool orderServiceCompleted = order.ServiceCompleted;

            // custid
            // paymentid

            // command text
            command.CommandText = @$"INSERT INTO titletowncatering.order(OrderId, OrderDate, OrderTime, OrderCancelled, ServiceDate, ServiceTime, ServiceAddress, ServiceDuration, PackageType, OrderedBy, ServicedBy, ServiceComplete) 
            VALUES(@orderID, @orderDate, @orderTime, @orderCancelled, @orderServiceDate, @orderServiceTime, @orderServiceAddress, @orderDuration, @orderPackage, @orderedBy, @servicedBy, @serviceCompleted);";

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
            command.Parameters.AddWithValue("@serviceCompleted", orderServiceCompleted);
            

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
    }
}