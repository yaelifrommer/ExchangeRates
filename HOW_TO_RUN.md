# HOW_TO_RUN.md

## Prerequisites
- Ensure you have [Docker](https://www.docker.com/products/docker-desktop) (optional) or the following installed:
  - [.NET SDK](https://dotnet.microsoft.com/download) (version 8.0 or higher)
  - [Node.js](https://nodejs.org/) (version 18 or higher)
  - [npm](https://www.npmjs.com/) (comes with Node.js)

## Cloning the Repository

To get started, clone the repository from GitHub:

1. Open your command line interface (CLI).
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:

   ```sh
   git clone https://github.com/yaelifrommer/ExchangeRates.git
```
## Project Structure
- Client: `ExchangeRatesApp\Client\Client`
- Server: `ExchangeRatesApp\Server\ExchangeRatesApi\ExchangeRatesApi`

## Running the Server

1. **Navigate to the Server Directory:**
   ```sh
   cd ExchangeRatesApp\Server\ExchangeRatesApi\ExchangeRatesApi
   ```

2. **Restore Dependencies:**
   ```sh
   dotnet restore
   ```

3. **Build the Project:**
   ```sh
   dotnet build
   ```

4. **Run the Server:**
   ```sh
   dotnet run
   ```
   The server will start and listen on the default port (usually `http://localhost:5000`).

## Running the Client

1. **Navigate to the Client Directory:**
   ```sh
   cd ExchangeRatesApp\Client\Client
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Start the Development Server:**
   ```sh
   npm run dev
   ```
   The client will start and be available at `http://localhost:5173`.

## Additional Notes

- Ensure the server is running before starting the client to avoid any connectivity issues.
- For Docker users, you can build and run the project using Docker commands as described previously.
