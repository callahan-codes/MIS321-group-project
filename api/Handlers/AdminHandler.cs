using api.Models;
using MySqlConnector;
namespace api.Handlers
{
    /*
        Written by Bryce Callahan 11/15/2024
        Updated by Connor T. Gilstrap 11/23/2024
         Updated by Connor T. Gilstrap 11/26/2024

        This is the admin handler that gets/places all 
        admin data from/to the TTC admin db table.
    */
    public class AdminHandler
    {
        // Get All Admins
        public async Task<List<Admin>> GetAllAdmins(string cs)
        {
            // init empty admin list
            List<Admin> myAdmins = new List<Admin>();

            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();

            // create sql command for db 
            using var command = new MySqlCommand("SELECT * FROM titletowncatering.admin", connection);

            // read response from db
            using var reader = await command.ExecuteReaderAsync();
            while(await reader.ReadAsync())
            {
                // read values from db
                int id = reader.GetInt32(0);
                string pass = reader.GetString(1);
                string email = reader.GetString(2);

                // add admin values to new admin list
                myAdmins.Add(new Admin(){ 
                    Id = id,
                    Password = pass,
                    Email = email,
                });
            }

            
            // log admins pulled to console | will remove after testing.
            Console.WriteLine($"Returned Admin List:");
            foreach(var admin in myAdmins)
            {
                Console.WriteLine($"\t- ID: {admin.Id} | Email: {admin.Email}");
            }

            // return list
            return myAdmins;
        }
    
        // Create New Admin
        public async Task AddNewAdmin(string cs, Admin admin)
        {
            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();
            
            // create sql command for db
            using var command = new MySqlCommand("", connection);

            // assign admin data
            int adminID = admin.Id;
            string? adminEmail = admin.Email;
            string? adminPassword = admin.Password;    

            // command text
            command.CommandText = @$"INSERT INTO admin(AdminId, AdminPassword, AdminEmail) VALUES(@adminID, @adminPassword, @adminEmail);";

            // command parameters
            command.Parameters.AddWithValue("@adminID", adminID);
            command.Parameters.AddWithValue("@adminPassword", adminPassword);
            command.Parameters.AddWithValue("@adminEmail", adminEmail);

            // prepare command
            command.Prepare();

            // execute command
            command.ExecuteNonQuery();
        }
    
        // Delete An Admin
        public async Task DeleteAdmin(string cs, int adminID)
        {
            Console.WriteLine($"Deleting Recipe {adminID} {cs}");

            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();
            
            // create sql command for db
            using var command = new MySqlCommand("", connection);

            // command text | soft delete
            command.CommandText = @$"DELETE FROM `titletowncatering`.`admin` WHERE (`AdminId` = '{adminID}');";

            // prepare command
            command.Prepare();

            // execute command
            command.ExecuteNonQuery();
        }
    
        public async Task UpdateAdmin(string cs, int adminID, Admin updatedAdmin)
        {
            Console.WriteLine($"Updating Admin {adminID} {cs}");

            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();

            // create sql command for db
            using var command = new MySqlCommand("", connection);

            // command text to update admin details
            command.CommandText = @$"UPDATE `titletowncatering`.`admin` 
                                    SET `AdminPassword` = @adminPassword, 
                                        `AdminEmail` = @adminEmail 
                                    WHERE `AdminId` = @adminID;";

            // assign parameters
            command.Parameters.AddWithValue("@adminID", adminID);
            command.Parameters.AddWithValue("@adminPassword", updatedAdmin.Password);
            command.Parameters.AddWithValue("@adminEmail", updatedAdmin.Email);

            // prepare command
            command.Prepare();

            // execute command
            command.ExecuteNonQuery();
        }
    }
}
