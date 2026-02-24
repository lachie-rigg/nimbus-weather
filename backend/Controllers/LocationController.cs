using Microsoft.AspNetCore.Mvc;
using backend.Services;
using System;


namespace backend.Controllers; 

[ApiController]
[Route("api/location")]
public class LocationController : ControllerBase
{
    private LocationService _locationService;

    public LocationController()
    {
        _locationService = new LocationService();
    }

    
}