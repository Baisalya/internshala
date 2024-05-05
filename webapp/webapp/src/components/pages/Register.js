// Register.js
import React from 'react';

const Register = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h2>Registration Form</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form>
        <div className="form-group">
            <label htmlFor="productName">First Name</label>
            <input type="text" className="form-control" id="firstname" placeholder="Enter First name" />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Last Name</label>
            <input type="text" className="form-control" id="productName" placeholder="Enter Last name" />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Email</label>
            <input type="text" className="form-control" id="email" placeholder="Enter Email id" />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Password</label>
            <input type="text" className="form-control" id="password" placeholder="Enter password" />
          </div>
         
          <div className="text-center mt-3">
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Submit</button> 
           </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Register;
