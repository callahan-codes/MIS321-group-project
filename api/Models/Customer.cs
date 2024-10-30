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
        public string? Name { get; set; }
        public string? Email { get; set; }
    }
}