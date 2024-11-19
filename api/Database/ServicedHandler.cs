using System;
using System.Collections.Generic;
using System.IO.Pipelines;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using api.Controllers;
using api.Databases;
using api.Models;
using MySqlConnector;

namespace api.Database
{
    public class ServicedHandler
    {
        private string cs;
        public ServicedHandler(string cs){
            this.cs = cs;
        }

        public async Task<List<Serviced>> GetAllServiced()
        {

            List<Serviced> myServices = [];


            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            using var command = new MySqlCommand("SELECT * FROM wpwwyo4a82kv2jrd.Serviceds;", connection);

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
        public async Task PostServiced(Serviced Serviced)
        {
            System.Console.WriteLine("posting");
            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            string cmd = "insert into Serviceds(OrderId, AdminId ) values (@OrderId, @AdminId);";

            using var command = new MySqlCommand(cmd, connection);
            command.Parameters.AddWithValue("@name", Serviced.OrderId);
            command.Parameters.AddWithValue("@AdminId", Serviced.AdminId);
            await command.ExecuteNonQueryAsync();
        }

        // DELETE METHOD

        public async Task DeleteServiced(int id){
            // THIS METHOD MAY NEED 2 IDS TO BE PASSED SO YEAH
            // I AM NOT GOING TO UPDATE THIS METHOD UNTIL I KNOW IF WE ARE SOFT DELETING
            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            string cmd = "UPDATE Serviced SET is_deleted = 1 WHERE Serviced_id = @id;";
            using var command = new MySqlCommand(cmd, connection);
            command.Parameters.AddWithValue("@id", id);
            await command.ExecuteNonQueryAsync();
        }

        public async Task UpdateServiced(Serviced Serviced){

            using var connection = new MySqlConnection(cs);
            await connection.OpenAsync();
            string cmd = @$"UPDATE Serviceds SET Serviced_id = @id, Serviced_name = @name, Serviced_rating = @rating, date_entered = @date, favorited = @favorited, is_deleted = @deleted WHERE Serviced_id = @id;";

            using var command = new MySqlCommand(cmd, connection);
            
            command.Parameters.AddWithValue("@id", Serviced.Id);
            command.Parameters.AddWithValue("@name", Serviced.Name);
            command.Parameters.AddWithValue("@rating", Serviced.Rating);
            command.Parameters.AddWithValue("@date", Serviced.DateEntered);
            command.Parameters.AddWithValue("@favorited", Serviced.Favorited);
            command.Parameters.AddWithValue("@deleted", Serviced.IsDeleted);
            await command.ExecuteNonQueryAsync();
            System.Console.WriteLine("Done");
        }
    }
}