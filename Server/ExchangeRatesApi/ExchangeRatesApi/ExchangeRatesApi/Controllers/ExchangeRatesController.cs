
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ExchangeRatesApi.Controllers
{
    // Attribute to mark this class as an API Controller
    [ApiController]
    // Route attribute to define the base URL path for this controller
    [Route("[controller]")]
    public class ExchangeRatesController : ControllerBase
    {
        // List of supported currencies
        private static readonly List<string> Currencies = new() { "USD", "EUR", "GBP", "CNY", "ILS" };

        // HttpClient instance to make HTTP requests
        private readonly HttpClient _httpClient;

        // API Key for the external exchange rate API
        private readonly string _apiKey = "5e4dce3264a9680492897fc9"; 

        // Constructor to inject the HttpClient instance
        public ExchangeRatesController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        // GET method to return the list of supported currencies
        [HttpGet("currencies")]
        public IEnumerable<string> GetCurrencies()
        {
            return Currencies;
        }

        // GET method to return exchange rates for a given currency
        [HttpGet("exchange_rates/{currency}")]
        public async Task<ActionResult<Dictionary<string, double>>> GetExchangeRates(string currency)
        {
            // Check if the provided currency is supported
            if (!Currencies.Contains(currency))
            {
                return BadRequest("Currency not supported.");
            }

            // Make an HTTP GET request to the external API to fetch exchange rates
            var response = await _httpClient.GetAsync($"https://v6.exchangerate-api.com/v6/{_apiKey}/latest/{currency}");
            if (!response.IsSuccessStatusCode)
            {
                return StatusCode((int)response.StatusCode, "Failed to retrieve exchange rates.");
            }

            // Read the response content as a string
            var content = await response.Content.ReadAsStringAsync();

            // Deserialize the JSON response into an ExchangeRateResponse object
            var exchangeRates = JsonSerializer.Deserialize<ExchangeRateResponse>(content);
            var rates = new Dictionary<string, double>();

            // Populate the rates dictionary with the exchange rates for the supported currencies
            foreach (var curr in Currencies)
            {
                if (curr != currency && exchangeRates.ConversionRates.ContainsKey(curr))
                {
                    rates[curr] = exchangeRates.ConversionRates[curr];
                }
            }

            return rates;
        }
    }

    // Class to represent the structure of the JSON response from the external API
    public class ExchangeRateResponse
    {
        [JsonPropertyName("conversion_rates")]
        public Dictionary<string, double> ConversionRates { get; set; }
    }
}
