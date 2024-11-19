using System.Threading.Tasks;
using System.Collections.Generic;
using api.Models;
using MySqlConnector;

namespace api.Handlers
{
    public class PaymentHandler
    {
        // Retrieve all payments
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
                            Id = reader.GetInt32("PaymentID"),
                            OrderId = reader.GetInt32("OrderID"),
                            CustomerId = reader.GetInt32("CustID"),
                            PaymentDate = reader.GetDateTime("PaymentDate"),
                            PaymentAmount = reader.GetDouble("PaymentAmount"),
                            PaymentMethod = reader.GetString("PaymentMethod"),
                            PaymentSuccessful = reader.GetBoolean("PaymentStatus")
                        });
                    }
                }
            }

            return payments;
        }

        // Add a new payment
        public async Task AddPayment(string connectionString, Payment payment)
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = @"
                    INSERT INTO titletowncatering.PAYMENT 
                    (OrderId, CustId, PaymentDate, PaymentAmount, PaymentMethod, PaymentStatus)
                    VALUES (@OrderId, @CustId, @PaymentDate, @PaymentAmount, @PaymentMethod, @PaymentStatus);";

                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@OrderId", payment.OrderId);
                command.Parameters.AddWithValue("@CustId", payment.CustomerId);
                command.Parameters.AddWithValue("@PaymentDate", payment.PaymentDate);
                command.Parameters.AddWithValue("@PaymentAmount", payment.PaymentAmount);
                command.Parameters.AddWithValue("@PaymentMethod", payment.PaymentMethod);
                command.Parameters.AddWithValue("@PaymentStatus", payment.PaymentSuccessful);

                await connection.OpenAsync();
                await command.ExecuteNonQueryAsync();
            }
        }

        // Delete a payment
        public async Task DeletePayment(string connectionString, int paymentId)
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "DELETE FROM titletowncateringPAYMENT WHERE PaymentID = @PaymentID";

                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@PaymentID", paymentId);

                await connection.OpenAsync();
                await command.ExecuteNonQueryAsync();
            }
        }
    }
}
