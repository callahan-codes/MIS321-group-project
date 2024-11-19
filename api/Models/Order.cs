// written by Bryce Callahan 10/30/2024
    // updated by BC 11/19/2024

namespace api.Models
{
    public class Order
    {
        // primary key - order ID
        public int Id { get; set; }
        // order date
        public string? Date  { get; set; }
        // order time
        public string? Time { get; set; }
        // order duration
        public int Duration { get; set; }
        // package ordered (1-3)
        public int Package { get; set; }
        /* 
            do we even need order cost? we can always just compute it
            whenever we pull the data and assign it to a variable.
            lmk what yall think when you read this.

            we should also consider using doubles instead of ints 
            so we can get cents for payment.

            public double OrderCost { get; set; }
        */
        // is order cancelled
        public bool Cancelled { get; set; }
        // when the service is to be provided
        public string? ServiceDate { get; set; }
        // what time the service is to be provided
        public string? ServiceTime { get; set; }
        // what time the service is to be provided
        public string? ServiceAddress { get; set; }
        // who the order came from
        public int OrderedBy { get; set; } // customer ID
        // who the order is serviced by
        public int ServicedBy { get; set; } // admin ID
        // the payment id
        public int PaymentId { get; set; } // payment id
    }
}