import React from 'react';

const Sales = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Sales Page</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input type="text" className="form-control" id="productName" placeholder="Enter product name" />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input type="number" className="form-control" id="quantity" placeholder="Enter quantity" />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input type="number" className="form-control" id="amount" placeholder="Enter amount" />
            </div>
            <div className="text-center mt-3"> {/* Add margin top */}
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Submit</button> 
             </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sales;
