namespace api.Models
{
    public class Payment
    {
        // payment id
        public int Id { get; set; }
        // order id
        public int OrderId { get; set; }
        // customer id
        public int CustomerId { get; set; }
        // payment date
        public string? PaymentDate { get; set; }
        // payment amount
        public double PaymentAmount { get; set; }
        // payment method
        public string? PaymentMethod { get; set; }
        // payment successful
        public bool PaymentSuccessful { get; set; }
    }
}