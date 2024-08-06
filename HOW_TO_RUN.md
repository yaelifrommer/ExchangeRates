
# HOW_TO_RUN.md

# Hinda Yael Frommer

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

## **Project Structure**
- Client: `ExchangeRates\Client\Client`
- Server: `ExchangeRates\Server\ExchangeRatesApi\ExchangeRatesApi`

## **Running the Project**

### Option 1: Using Docker

Ensure Docker Desktop is Running:
Before proceeding, make sure Docker Desktop is running on your machine. You can start it from your applications or system tray.

1. **Navigate to the Project Directory:**
   ```sh
   cd ExchangeRates
   ```

2. **Build the Docker Images:**
   ```sh
   docker-compose build
   ```

3. **Run the Docker Containers:**
   ```sh
   docker-compose up
   ```
   This command will start both the client and server containers. The server will be accessible on port `44372`, and the client will be accessible on port `8080`.

4. **Access the Client:**
   Open your web browser and navigate to:
   ```sh
   http://localhost:8080
   ```
   The client application should load, and you can interact with it.

### Option 2: Running the Server and Client Locally

## **Running the Server**

1. **Navigate to the Server Directory:**
   ```sh
   cd ExchangeRates\Server\ExchangeRatesApi\ExchangeRatesApi
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
   Open the ExchangeRatesApi.sln file and run the project by clicking the green 'Run' button, which is labeled 'IIS Express'
   ```
   The server will start and listen on the default port (usually `http://localhost:5000`).

## **Running the Client**

1. **Navigate to the Client Directory:**
   ```sh
   Return to the main folder - where you cloned into.
   cd ExchangeRates\Client\Client
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
- For Docker users, you can build and run the project using Docker commands as described in Option 1.
