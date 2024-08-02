# Exchange Rates API Project

**Hinda Yael Frommer**  
Email: [hindoush1111111@gmail.com](mailto:hindoush1111111@gmail.com)  
Phone: +972-55-672-7164

## Overview

This project provides an API for retrieving exchange rates for various currencies. It includes both server and client components, allowing you to interact with and test the API efficiently.

## Server Setup

### Requirements
- .NET 8.0 or later
- API Key for exchange rate service

### Getting Started

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Configure API Key**
   - Open `ExchangeRatesController.cs`
   - Replace `5e4dce3264a9680492897fc9` with your own API key.

3. **Build and Run the Application**
   ```bash
   dotnet build
   dotnet run
   ```

4. **Access the API**
   - **Swagger UI**: `https://localhost:44372/swagger` (only available in development mode)
   - **Endpoints**:
     - `GET /ExchangeRates/currencies`: Get a list of supported currencies.
     - `GET /ExchangeRates/exchange_rates/{currency}`: Get exchange rates for a specified currency. Replace `{currency}` with the desired currency code (e.g., `USD`, `EUR`).

### Configuration
- **CORS Policy**: Allows requests from any origin. Adjust in `Program.cs` if needed.

## Client Setup

### Requirements
- A modern web browser or any HTTP client tool (like Postman)

### Usage

1. **Test Endpoints**
   - Use Swagger UI or HTTP client tools to test API endpoints.
   - Example requests:
     - `GET https://localhost:44372/ExchangeRates/currencies`
     - `GET https://localhost:44372/ExchangeRates/exchange_rates/USD` (Replace `USD` with any supported currency code)

## Contributing

1. **Fork the Repository**
2. **Create a Branch** for your feature or fix.
3. **Submit a Pull Request** with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any issues or questions, please contact [hindoush1111111@gmail.com](mailto:hindoush1111111@gmail.com).
