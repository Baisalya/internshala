import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Top5 = () => {
  const [topSales, setTopSales] = useState([]);

  useEffect(() => {
    // Fetch top 5 sales data from the backend
    const fetchTop5Sales = async () => {
      try {
        const response = await axios.get('http://localhost:3001/top5sales');
        setTopSales(response.data); // Assuming response.data is an array of top 5 sales objects
      } catch (error) {
        console.error('Error fetching top 5 sales:', error);
        // Handle error, show error message, etc.
      }
    };

    fetchTop5Sales();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Top 5 Sales</h2>
        </div>
      </div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Sales ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          {topSales.map((sale, index) => (
            <tr key={sale._id}>
              <td>{index + 1}</td>
              <td>{sale.salesId}</td>
              <td>{sale.productName}</td>
              <td>{sale.quantity}</td>
              <td>{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top5;
