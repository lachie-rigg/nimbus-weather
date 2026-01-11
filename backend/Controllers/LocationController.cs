using Microsoft.AspNetCore.Mvc;
using backend.Services;

namespace backend.Controllers; 

[ApiController]
[Route("api/location")]
public class LocationController : ControllerBase
{
    private LocationService _locationService = new LocationService(); 
    
}