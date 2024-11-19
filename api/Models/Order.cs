// written by Bryce Callahan 10/30/2024
//updated by Connor 11/18/24

public class Order
{
    public int Id { get; set; }
    public string Date { get; set; }
    public string Time { get; set; }
    public int Package { get; set; }
    public int PackageHours { get; set; }
    public bool Cancelled { get; set; }
    public string ServiceDate { get; set; }
    public string ServiceTime { get; set; }
    public string OrderedBy { get; set; }  
    public string ServicedBy { get; set; }  
}