// written by Bryce Callahan 10/30/2024

namespace api.Models
{
    // admin class
    public class Admin
    {
        /*
            init admin data:
                - ID
                - Email
                - Password
        */
        public int Id { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}