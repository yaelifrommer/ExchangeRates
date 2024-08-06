# Stage 1: Build the .NET 8 server

# Use the official .NET 8 SDK image to build the server
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory
WORKDIR /app

# Copy the project files to the container
COPY ExchangeRatesApi/ExchangeRatesApi/ExchangeRatesApi/ExchangeRatesApi.csproj ./
RUN dotnet restore

# Copy the rest of the server code
COPY ExchangeRatesApi/ExchangeRatesApi/ExchangeRatesApi/. ./
RUN dotnet build -c Release -o /app/build

# Publish the server application
RUN dotnet publish -c Release -o /app/publish

# Stage 2: Serve the server application
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app
COPY --from=build /app/publish ./

# Expose port 44372 for HTTPS
EXPOSE 44372

# Set the entry point for the container
ENTRYPOINT ["dotnet", "ExchangeRatesApi.dll"]
