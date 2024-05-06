import React, { useState, useEffect } from 'react';

const TodaysRevenue = () => {
  const [revenue, setRevenue] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/totalRevenue')
      .then(response => response.json())
      .then(data => {
        // Assuming the response has a structure like { totalRevenue: 1759999 }
        setRevenue(data.totalRevenue);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          {revenue !== null ? (
            <h2>Today's Revenue is {revenue}</h2>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodaysRevenue;
