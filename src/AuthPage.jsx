import { useState } from "react";
import "./style.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  // All data  usestates
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setIsLogin(false);
  };

  //LOGIN API
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5002/api/user/user-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pass }),
      });

      const data = await res.json();

      if (data.status) {
        setMessage("Login successful!");
        console.log("User data:", data.user);
      } else {
        setMessage(data.message || "Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server Error. Please try again later.");
    }
  };

  //REGISTER API
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(
        "http://localhost:5002/api/user/user-registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            pass,
            dob,
            gender,
            address,
            ph_number,
          }),
        }
      );

      const data = await res.json();

      if (data.status) {
        setMessage("Registration successful!");
        console.log("Registered user:", data);
        setIsLogin(true);
      } else {
        setMessage(data.error || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server Error. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* SIGNUP SECTION */}
        {!isLogin && (
          <form className="form-section" onSubmit={handleRegisterSubmit}>
            <h4 className="logo-text">Your logo</h4>
            <h1 className="title">Sign Up</h1>

            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />

            <label>Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label>Phone Number</label>
            <input
              type="text"
              value={phNumber}
              onChange={(e) => setPhNumber(e.target.value)}
            />

            <button className="btn" type="submit">
              Register
            </button>

            {message && <p className="message">{message}</p>}

            <p className="continue">Or Continue With</p>

            <div className="social-icons">
              <button className="social google">G</button>
              <button className="social github">GH</button>
              <button className="social facebook">F</button>
            </div>

            <p className="register">
              Already have an account?{" "}
              <button
                type="button"
                onClick={handleLoginClick}
                className="link-button"
              >
                Login
              </button>
            </p>
          </form>
        )}

        {/* LOGIN SECTION */}
        {isLogin && (
          <form className="form-section" onSubmit={handleLoginSubmit}>
            <h4 className="logo-text">Your logo</h4>
            <h1 className="title">Login</h1>

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />

            <a href="#" className="forgot">
              Forgot Password?
            </a>

            <button type="submit" className="btn">
              Sign in
            </button>

            {message && <p className="message">{message}</p>}

            <p className="continue">Or Continue With</p>

            <div className="social-icons">
              <button className="social google">G</button>
              <button className="social github">GH</button>
              <button className="social facebook">F</button>
            </div>

            <p className="register">
              Don’t have an account yet?{" "}
              <button
                type="button"
                onClick={handleRegisterClick}
                className="link-button"
              >
                Register for free
              </button>
            </p>
          </form>
        )}

        <div className="image-section">
          <img src="./src/assets/images/img.png" alt="Auth Illustration" />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
