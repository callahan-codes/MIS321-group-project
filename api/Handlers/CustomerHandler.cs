using api.Models;
using MySqlConnector;
namespace api.Handlers
{
    /*
        Written by Bryce Callahan 11/15/2024
            updated by BC 11/26/2024

        this is the customer handler than gets/places all 
        customer data from/to the TTC customer db table.
    */

    public class CustomerHandler
    {
        // Get All Customers
        public async Task<List<Customer>> GetAllCustomers(string cs)
        {
            // init empty customerlist
            List<Customer> myCustomers = [];

            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();

            // create sql command for db 
            using var command = new MySqlCommand("SELECT * FROM `customer`", connection);

            // read response from db
            using var reader = await command.ExecuteReaderAsync();
            while(await reader.ReadAsync())
            {
                // read values from db
                int id = reader.GetInt32(0);
                string fname = reader.GetString(1);
                string lname = reader.GetString(2);
                string email = reader.GetString(3);

                // add customer values to new customerlist
                myCustomers.Add(new Customer(){ 
                    Id = id,
                    FName = fname,
                    LName = lname,
                    Email = email,
                });
            }

            // return list
            return myCustomers;
        }
    
        // Create New Customer
        public async Task AddNewCustomer(string cs, Customer customer)
        {
            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();
            
            // create sql command for db
            using var command = new MySqlCommand("", connection);

            // assign customer data
            int customerID = customer.Id;
            string? customerFName = customer.FName;
            string? customerLName = customer.LName;
            string? customerEmail = customer.Email;

            // command text
            command.CommandText = @$"INSERT INTO customer(CustId, CustFName, CustLName, CustEmail) VALUES(@customerID, @customerFName, @customerLName, @customerEmail);";

            // command paramaters
            command.Parameters.AddWithValue("@customerID", customerID);
            command.Parameters.AddWithValue("@customerFName", customerFName);
            command.Parameters.AddWithValue("@customerLName", customerLName);
            command.Parameters.AddWithValue("@customerEmail", customerEmail);

            // prepare command
            command.Prepare();

            // execute command
            command.ExecuteNonQuery();
        }

        
        // connect to db | update data
        public async Task UpdateCustomerInfo(string cs, Customer customer)
        {
            // log
            Console.WriteLine($"Updating Order {customer.Id}");

            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();
            
            // create sql command for db
            using var command = new MySqlCommand("", connection);

            // command text | soft delete
            command.CommandText = @$"UPDATE customer SET CustFName = '{customer.FName}', CustLName = '{customer.LName}', CustEmail = '{customer.Email}' WHERE CustId = {customer.Id};";

            // prepare command
            command.Prepare();

            // execute command
            command.ExecuteNonQuery();
        }
    
        // Delete An customer
        public async Task DeleteCustomer(string cs, int customerID)
        {
            Console.WriteLine($"Deleting Recipe {customerID} {cs}");

            // instantiate mysqlconnection object
            using var connection = new MySqlConnection(cs);

            // open connection
            await connection.OpenAsync();
            
            // create sql command for db
            using var command = new MySqlCommand("", connection);

            // command text | soft delete
            command.CommandText = @$"DELETE FROM customer WHERE (`CustId` = '{customerID}');";

            // prepare command
            command.Prepare();

            // execute command
            command.ExecuteNonQuery();
        }
    
    }
}