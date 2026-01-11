namespace backend.dto; 

public class LocationDto(string suburb, string state, int postcode)
{
    public string Suburb { get; set; } = suburb;
    public string State { get; set; } = state;
    public int Postcode { get; set; } = postcode;
}