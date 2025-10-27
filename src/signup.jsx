import React from "react";
import "./style.css";

const Signup = () => {
  return (
    <div className="auth-container ">
      <div className="auth-box">
        <div className="form-section">
          <h4 className="logo-text">Your logo</h4>
          <h1 className="title">Sign Up</h1>

          <label>Name</label>
          <input type="text"/>

          <label>Email</label>
          <input type="email"/>

          <label>Password</label>
          <input type="password" />

          <button className="btn">Register</button>

          <p className="continue">Or Continue With</p>

          <div className="social-icons">
            <button className="social google">G</button>
            <button className="social github">GH</button>
            <button className="social facebook">F</button>
          </div>

          <p className="register">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>

        <div className="image-section">
          <img src="./src/assets/images/img.png" alt="Signup Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Signup;