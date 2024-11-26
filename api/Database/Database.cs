using api.Handlers;
using api.Models;
using MySqlConnector;

namespace api.Databases
{
    public class Database
    {
        // db connection string
        private readonly string? cs;

        // Player handler & static list
        private AdminHandler adminHandler = new AdminHandler();
        private static List<Admin> AllAdmin = new List<Admin>();

        // Customer handler & static list
        private CustomerHandler customerHandler = new CustomerHandler();
        private static List<Customer> AllCustomer = new List<Customer>();

        // Order handler & static list
        private OrderHandler orderHandler = new OrderHandler();
        private static List<Order> AllOrder = new List<Order>();

        // Payment handler & static list
        private PaymentHandler paymentHandler = new PaymentHandler();
        private static List<Payment> AllPayment = new List<Payment>();


        public Database()
        {
            /* 
                we will use the db made by jeb after we have all tested our code on localhost.
                cs = "Server=qn0cquuabmqczee2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;Port=3306;User ID=bvlgcnefshzlt68q;Password=u9x7q1ky398srfal;Database=wpwwyo4a82kv2jrd;Convert Zero Datetime=True";
            */
            cs = "Server=127.0.0.1;User ID=root;Password=Moneyman6$;Database=titletowncatering";
        }

        /*
            ADMIN TASKS

                Written by Bryce Callahan 11/15/2024
        */
        // Get all admins
        public async Task<List<Admin>> GetAllAdmins()
        {
            if(cs != null)
            {
                // set list from admin handler
                AllAdmin = await adminHandler.GetAllAdmins(cs);
            }

            // return admin list
            return AllAdmin;
        }

        // Add Admin
        public async void AddNewAdmin(Admin admin)
        {
            if(cs != null)
            {
                // set list from admin handler
                await adminHandler.AddNewAdmin(cs, admin);
                await GetAllAdmins();
            }
        }

        // Delete Admin
        public async void DeleteAdmin(int adminID)
        {
            // set list from admin handler
            if(cs != null)
            {
                await adminHandler.DeleteAdmin(cs, adminID);
                await GetAllAdmins();
            }
        }
        public async void UpdateAdmin(int adminID, Admin updatedAdmin)
        {
            if (cs != null)
            {
                await adminHandler.UpdateAdmin(cs, adminID, updatedAdmin);
                await GetAllAdmins();
            }
        }
        /*
            CUSTOMER TASKS

                Written by Bryce Callahan 11/15/2024
        */
        // Get all customers
        public async Task<List<Customer>> GetAllCustomers()
        {
            if(cs != null)
            {
                // set list from customer handler
                AllCustomer = await customerHandler.GetAllCustomers(cs);
            }

            // return customer list
            return AllCustomer;
        }

        // Add Customer
        public async void AddNewCustomer(Customer customer)
        {
            if(cs != null)
            {
                // set list from admin handler
                await customerHandler.AddNewCustomer(cs, customer);
                await GetAllCustomers();
            }
        }

        // Delete Customer
        public async void DeleteCustomer(int customerID)
        {
            if(cs != null)
            {
                // set list from admin handler
                await customerHandler.DeleteCustomer(cs, customerID);
                await GetAllCustomers();
            }
        }


        /*
            ORDER TASKS

                Written by Connor G 11/18/2024
                updated by BC 11/19/2024
        */
        // Get all customers
        public async Task<List<Order>> GetAllOrders()
        {
            if(cs != null)
            {
                // set list from order handler
                AllOrder = await orderHandler.GetAllOrders(cs);
            }
            
            // return data
            return AllOrder;
        }
        // Add Order
        public async void AddNewOrder(Order Order)
        {
            if(cs != null)
            {
                // set list from admin handler
                await orderHandler.AddNewOrder(cs, Order);
                await GetAllOrders();
            }
        }


        /*
            Payment TASKS

                Written by Hayden Walls 11/18/2024
                updated by BC 11/21/2024
        */
        // Get all customers
        public async Task<List<Payment>> GetAllPayments()
        {
            if(cs != null)
            {
                // set list from payment handler
                AllPayment = await paymentHandler.GetAllPayments(cs);
            }
            
            // return data
            return AllPayment;
        }
    }
}