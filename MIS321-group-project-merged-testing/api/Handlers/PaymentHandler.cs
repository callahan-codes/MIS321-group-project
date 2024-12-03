using api.Models;
using MySqlConnector;
namespace api.Handlers
{
    public class PaymentHandler
    {
        // Retrieve all payments
        // Written by Hayden Walls
        //      updated by BC 11/21/2024
        public async Task<List<Payment>> GetAllPayments(string connectionString)
        {
            var payments = new List<Payment>();

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM titletowncatering.PAYMENT";
                MySqlCommand command = new MySqlCommand(query, connection);
                await connection.OpenAsync();
                using (MySqlDataReader reader = await command.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        payments.Add(new Payment
                        {
                            Id = reader.GetInt32(0),
                            OrderId = reader.GetInt32(1),
                            CustomerId = reader.GetInt32(2),
                            PaymentDate = reader.GetString(3),
                            PaymentAmount = reader.GetDouble(4),
                            PaymentMethod = reader.GetString(5),
                            PaymentSuccessful = reader.GetBoolean(6)
                        });
                    }
                }
            }

                        // log admins pulled to console | will remove after testing.
            Console.WriteLine($"Returned Payment List:");
            foreach(var payment in payments)
            {
                Console.WriteLine($"\t- ID: {payment.Id} | Order ID: {payment.OrderId}");
            }

            return payments;
        }
    }
}