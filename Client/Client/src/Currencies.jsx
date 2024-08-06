import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Currencies.css'; // Use custom CSS for styling

// Main component to display currency exchange rates
const Currencies = () => {
  // State to store list of currencies
  const [currencies, setCurrencies] = useState([]);

  // State to store exchange rates data
  const [exchangeRates, setExchangeRates] = useState({});

  // State to keep track of the selected currency
  const [selectedCurrency, setSelectedCurrency] = useState('');

  // State for error messages
  const [error, setError] = useState('');

  // Get the list of currencies from the server when the component starts
  useEffect(() => {
    axios
      .get('http://localhost:44372/ExchangeRates/currencies')
      .then((response) => {
        console.log('Currencies data:', response.data); // Show data in the console
        setCurrencies(response.data); // Save currencies in state
      })
      .catch((err) => {
        console.error('Failed to fetch currencies:', err); // Show error in the console
        setError('Failed to load currencies'); // Save error message
      });
  }, []); // Run once when the component is mounted

  // Fetch exchange rates for the selected currency
  useEffect(() => {
    if (selectedCurrency) {
      axios
        .get(`http://localhost:44372/ExchangeRates/exchange_rates/${selectedCurrency}`)
        .then((response) => {
          console.log('Exchange rates data:', response.data); // Show exchange rates in the console
          if (response.data && typeof response.data === 'object') {
            setExchangeRates(response.data); // Save exchange rates in state
          } else {
            setExchangeRates({});
            setError('Invalid data structure returned'); // Save error message if data is not correct
          }
        })
        .catch((err) => {
          console.error('Failed to fetch exchange rates:', err); // Show error in the console
          setExchangeRates({});
          setError('Failed to load exchange rates'); // Save error message
        });
    }
  }, [selectedCurrency]); // Run when selectedCurrency changes

  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'base', // Column for the base currency
        header: 'Base',
        cell: () => selectedCurrency || 'NULL', // Show the selected currency or 'NULL' if none selected
      },
      {
        accessorKey: 'currency', // Column for the target currency
        header: 'Currency',
      },
      {
        accessorKey: 'rate', // Column for the exchange rate
        header: 'Exchange Rate',
        cell: (info) => info.getValue().toFixed(4), // Format numbers to four decimal places
      },
    ],
    [selectedCurrency] // Update columns when selectedCurrency changes
  );

  // Prepare data for the table
  const data = useMemo(() => {
    if (exchangeRates && typeof exchangeRates === 'object') {
      return Object.entries(exchangeRates).map(([currency, rate]) => ({
        currency,
        rate,
      }));
    }
    return [];
  }, [exchangeRates]); // Update data when exchangeRates changes

  // Initialize the table with data and columns
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Render the component
  return (
    <div className="container-fluid main-background">
      {/* Fixed box with "בס"ד" at the top-right corner */}
      <div className="bsd-box">בס"ד</div>
  
      {/* Main layout area using flexible design for alignment and spacing */}
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center site-layout">
  
        {/* Header section with vertical title */}
        <header className="site-header text-center py-5 px-3">
          <h1 className="site-title display-4">Global Exchange Hub</h1>
        </header>
  
        {/* Content area for displaying currency information */}
        <div className="content-wrapper mx-auto text-center mt-md-5">
          <h1 className="display-4 font-weight-bold mb-4">Currency Exchange Rates</h1>
          
          {/* Display error messages if any errors occur */}
          {error && <p className="text-danger">{error}</p>}
  
          {/* Dropdown for selecting a currency */}
          <div className="d-flex justify-content-center mb-4">
            <select
              className="form-control form-control-lg w-50"
              onChange={(e) => setSelectedCurrency(e.target.value)}
              value={selectedCurrency}
            >
              <option value="">Select a currency</option>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
  
          {/* Table of exchange rates for the selected currency */}
          {selectedCurrency && (
            <div className="table-responsive">
              <h2 className="mt-5">{selectedCurrency} Exchange Rates</h2>
              <div className="decorative-div mb-3"></div>
              <table className="table table-hover mt-3">
                <thead className="thead-dark">
                  {/* Map through each header group to render table headers */}
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {/* Render each header cell in the header group */}
                      {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {/* Map through each row of data to render table rows */}
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {/* Render each cell within the row */}
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Decorative footer element */}
          <div className="footer-decorative mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Currencies;
