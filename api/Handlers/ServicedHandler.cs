using api.Models;
using MySqlConnector;
namespace api.Handlers
{
    public class ServicedHandler
    {
        public async Task<List<Serviced>> GetAllServiced(string cs)
        {

            List<Serviced> myServices = [];


            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            using var command = new MySqlCommand("SELECT * FROM titletowncatering.Serviced;", connection);

            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                myServices.Add(new Serviced
                {
                    // I DONT KNOW WHICH COLUMN IS WHICH THIS MIGHT RETURN THE VLAUES IN WRONG ORDDER
                    OrderId = reader.GetInt32(0),
                    AdminId = reader.GetInt32(1)
                });
            }

            return myServices;
        }

        // POST METHOD
        public async Task PostServiced(Serviced Serviced, string cs)
        {
            System.Console.WriteLine("posting");
            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            string cmd = "insert into Serviced(OrderId, AdminId ) values (@OrderId, @AdminId);";

            using var command = new MySqlCommand(cmd, connection);
            command.Parameters.AddWithValue("@name", Serviced.OrderId);
            command.Parameters.AddWithValue("@AdminId", Serviced.AdminId);
            await command.ExecuteNonQueryAsync();
        }

        // DELETE METHOD

        public async Task DeleteServiced(int id, string cs){
            // THIS METHOD MAY NEED 2 IDS TO BE PASSED SO YEAH
            // I AM NOT GOING TO UPDATE THIS METHOD UNTIL I KNOW IF WE ARE SOFT DELETING
            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            string cmd = "UPDATE Serviced SET is_deleted = 1 WHERE OrderId = @order, AdminId = @admin;";
            using var command = new MySqlCommand(cmd, connection);
            command.Parameters.AddWithValue("@order", orderId);
            command.Parameters.AddWithValue("@admin", adminId);
            await command.ExecuteNonQueryAsync();
        }

        public async Task UpdateServiced(Serviced Serviced, string cs){

            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            string cmd = @$"UPDATE Serviceds SET OrderId = @order, AdminId = @admin;";

            using var command = new MySqlCommand(cmd, connection);
            
            command.Parameters.AddWithValue("@order", Serviced.OrderId);
            command.Parameters.AddWithValue("@admin", Serviced.AdminId);
            await command.ExecuteNonQueryAsync();
        }
    }
}