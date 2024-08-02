
# Currency Exchange Client

**Hinda Frommer**  
Email: [hindoush1111111@gmail.com](mailto:hindoush1111111@gmail.com)  
Phone: +972-55-672-7164

## Overview

This React application provides an interface for users to select a currency and view exchange rates against other supported currencies. It uses Vite for development and includes Axios for API requests and @tanstack/react-table for displaying data in a table format.

## Technologies Used

- **Language**: JavaScript
- **Framework**: React
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Table Library**: @tanstack/react-table
- **Styling**: Bootstrap, Custom CSS

## Setup and Installation

### Prerequisites

- Node.js (version 14 or later)
- NPM or Yarn

### Steps to Setup

1. **Create a New Vite Project**
   ```bash
   npm create vite@latest Client
   cd Client
   ```

2. **Install Dependencies**
   ```bash
   npm install axios @tanstack/react-table bootstrap
   ```

3. **Install Additional Dependencies**
   ```bash
   npm install
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

   This will start the Vite development server and open the application in your browser.

5. **Access the Application**
   Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/).

## Usage

- **Selecting a Currency**: Use the dropdown menu to select a currency. This will trigger a request to the API to fetch exchange rates for the selected currency.
- **Viewing Exchange Rates**: The exchange rates for the selected currency will be displayed in a table format.

## API Endpoints

The client application interacts with the following API endpoints:
- **Get Supported Currencies**: `https://localhost:44372/ExchangeRates/currencies`
- **Get Exchange Rates for a Selected Currency**: `https://localhost:44372/ExchangeRates/exchange_rates/{currency}`

   Replace `{currency}` with the desired currency code (e.g., `USD`, `EUR`).

## Custom Styling

- The application uses custom CSS located in `Currencies.css` for styling. Adjust styles as needed for your design preferences.

## Contributing

1. **Fork the Repository**
2. **Create a Branch** for your feature or fix.
3. **Submit a Pull Request** with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any issues or questions, please contact [hindoush1111111@gmail.com](mailto:hindoush1111111@gmail.com).
