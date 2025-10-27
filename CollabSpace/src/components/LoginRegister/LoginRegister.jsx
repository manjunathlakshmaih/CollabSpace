import { useState } from "react";
import "./LoginRegister.css";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
  const [activeForm, setActiveForm] = useState("");

  const RegisterLink = () => {
    setActiveForm(' active')
  }

  const LoginLink = () => {
    setActiveForm('')
  }
  return (
    <div className= {`wrapper${activeForm}`}>
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#" onClick={RegisterLink}>Register</a>
            </p>
          </div>
        </form>
      </div>
        <div className="form-box register">
          <form action="">
            <h1>Registeration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUserAlt className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="register-link">
              <p>
                Already have an account? <a href="#" onClick={LoginLink}>Login</a>
              </p>
            </div>
          </form>
        </div>
    </div>
  );
};

export default LoginRegister;
