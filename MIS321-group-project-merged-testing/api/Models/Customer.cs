// written by Bryce Callahan 10/30/2024

namespace api.Models
{
    // customer class
    public class Customer
    {
        /*
            init customer data:
                - ID
                - Name
                - Email
        */
        public int Id { get; set; }
        public string? FName { get; set; }
        public string? LName { get; set; }
        public string? Email { get; set; }
    }
}