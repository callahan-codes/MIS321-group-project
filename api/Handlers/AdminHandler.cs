using api.Models;
using MySqlConnector;
namespace api.Handlers
{
    /*
        Written by Bryce Callahan 11/15/2024

        this is the admin handler than gets/places all 
        admin data from/to the TTC admin db table.
    */
    public class AdminHandler
    {
        // Get All Admins
        public async Task<List<Admin>> GetAllAdmins(string cs)
        {
            // init empty admin list
            List<Admin> myAdmins = [];

            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();

            // create sql command for db 
            using var command = new MySqlCommand("SELECT * FROM `admin`", connection);

            // read response from db
            using var reader = await command.ExecuteReaderAsync();
            while(await reader.ReadAsync())
            {
                // read values from db
                int id = reader.GetInt32(0);
                string pass = reader.GetString(1);
                string email = reader.GetString(2);

                // add admine values to new admin list
                myAdmins.Add(new Admin(){ 
                    Id = id,
                    Password = pass,
                    Email = email,
                });
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

            // command paramaters
            command.Parameters.AddWithValue("@adminID", adminID);
            command.Parameters.AddWithValue("@adminPassword", adminPassword);
            command.Parameters.AddWithValue("@adminEmail", adminEmail);

            // prepare command
            command.Prepare();

            // execute command
            command.ExecuteNonQuery();
        }
    
        // Edit Admin
        public async Task UpdateAdminInfo(string cs, Admin admin)
        {
            // log
            Console.WriteLine($"Updating Admin {admin.Id}\nAdmin Data: {admin.Email} {admin.Password}");

            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();
            
            // create sql command for db
            using var command = new MySqlCommand("", connection);

            // command text | soft delete
            command.CommandText = @$"UPDATE admin SET AdminPassword = '{admin.Password}', AdminEmail = '{admin.Email}' WHERE AdminId = {admin.Id};";

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
            command.CommandText = @$"DELETE FROM admin WHERE (`AdminId` = '{adminID}');";

            // prepare command
            command.Prepare();

            // execute command
            command.ExecuteNonQuery();
        }
    }
}