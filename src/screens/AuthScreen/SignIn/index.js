import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../../../components/Navbar";
import { color } from "../../../constants/color";
import { useState } from "react";
import { Button } from "../../../components/Button";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="auth-form__cover">
      <div className="form-signup  pt-3 px-3 pb-3">
        <div className="auth-caption ">
          Welcome <span>👋</span>
        </div>
        <div className="form-we">Please login to continue </div>
        {error && (
          <div
            style={{
              fontSize: "11px",
              color: "tomato",
            }}
          >
            {error}
          </div>
        )}

        <div className="form-group mt-2">
          <label htmlFor="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="form-input"
            placeholder="email address"
            id="email"
          />
        </div>
        <div className="form-group mt-2">
          <label
            htmlFor="password"
            class="form-label d-flex align-items-center justify-content-between "
          >
            <div className="top-helper">Password</div>
            <Link
              to={"/forgotpassword"}
              className="top-helper"
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Forgot password
            </Link>
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-input"
            placeholder="password"
            id="email"
          />
        </div>
        <div className="form-btn mt-3">
          <Button
            text={"Sign in"}
            bg={color.baseColor}
            height={"40px"}
            textColor={color.white}
            fontSize={"15px"}
            loaderColor={color.white}
            status={loading}
          />
        </div>
        <div className="form-hint text-center mt-1">
          Don't have account yet ?{" "}
          <Link to="/signup" className="auth-link">
            Sign up
          </Link>
        </div>
        <div className="form-support text-center mt-2">
          Having issues with your account contact us for help
        </div>
        <div className="form-mail text-center d-block">
          <a href="mailto:chevrtech@gmail.com">chevrtech@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
