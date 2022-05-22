import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../../../components/Navbar";
import { color } from "../../../constants/color";
import { useState } from "react";
import { Button } from "../../../components/Button";
import axios from "../../../utlis/axios";
import { toast } from "react-toastify";
import { setToken } from "../../../utlis/token";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading((prev) => true);
      if (!email || !password) {
        setError("Both values are required");
        setLoading((prev) => false);
        return;
      }
      let res = await axios.post("/login", {
        login: email,
        password: password,
      });
      toast.success("Logged successfully");
      await setToken("usdplug_token", res.data.data.auth_token);
      // console.log(res.data.data);
      return (window.location.pathname = "/dashboard");
    } catch (err) {
      console.log(err.response.data.data);
      if (err.response.status === 300) {
        toast.warn("You haven't verified your email address", {
          toastId: "3847375",
        });
        await setToken("usdplug_token", err.response.data.data.auth_token);
        await setToken("usdplug_userId", err.response.data.data.userId);
        setLoading((prev) => false);
        return (window.location.pathname = "/emailverification");
      } else if (err.response.status === 401) {
        toast.error("Invalid credentials. Please try again", {
          toastId: "25234rfdc",
        });
        setLoading((prev) => false);
        return;
      }
      toast.error(err.message);
      return;
    }
  };
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
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="email address"
            id="email"
          />
        </div>
        <div className="form-group mt-2">
          <label
            htmlFor="password"
            className="form-label d-flex align-items-center justify-content-between "
          >
            <div className="top-helper">Password</div>
            <Link
              to={"/forgotpassword"}
              className="top-helper"
              style={{
                fontSize: "13px",
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
            className="form-input"
            placeholder="password"
            id="email"
          />
        </div>
        <div className="form-btn mt-3" onClick={() => handleLogin()}>
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
          <a href="mailto:support@usdplug.com">support@usdplug.com</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
