import React from 'react';

const Top5 = () => {
  // Dummy data for the table
  const salesData = [
    { id: 1, productName: "Laptop", quantity: 2, amount: 100 },
    { id: 2, productName: "Phone", quantity: 5, amount: 80 },
    { id: 3, productName: "Tv", quantity: 1, amount: 150 },
  
  ];

  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
          <h2>Top 5 Sales</h2>
        </div></div>
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
          {salesData.map((sale, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{sale.id}</td>
              <td>{sale.productName}</td>
              <td>{sale.quantity}</td>
              <td>{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Top5;
