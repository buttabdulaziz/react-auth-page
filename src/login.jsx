import React from "react";
import "./style.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="form-section">
          <h4 className="logo-text">Your logo</h4>
          <h1 className="title">Login</h1>

          <label>Email</label>
          <input type="email" />

          <label>Password</label>
          <input type="password" />

          <a href="#" className="forgot">
            Forgot Password?
          </a>

          <button className="btn">Sign in</button>

          <p className="continue">Or Continue With</p>

          <div className="social-icons">
            <button className="social google">G</button>
            <button className="social github">GH</button>
            <button className="social facebook">F</button>
          </div>

          <p className="register">
            Don’t have an account yet? <a href="#">Register for free</a>
          </p>
        </div>

        <div className="image-section">
          <img src="./src/assets/images/img.png" alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;