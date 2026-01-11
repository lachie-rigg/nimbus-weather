using backend.Services;

namespace backend.Controllers;

public interface ILocationController
{
    LocationService LocationService { get; }
    
    public Task<List<string>> AsyncSearchLocation(string query); 
}