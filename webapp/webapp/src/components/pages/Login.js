// Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h2>Login Form</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form>
          <div className="form-group">
            <label htmlFor="productName">Email</label>
            <input type="text" className="form-control" id="email" placeholder="Enter Email Id" />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Password</label>
            <input type="text" className="form-control" id="pPssword" placeholder="Enter your password" />
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

export default Login;
