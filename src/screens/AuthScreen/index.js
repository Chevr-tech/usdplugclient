import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { setToken } from "../../utlis/token";
import { Redirect } from "react-router-dom";
import { Button } from "../../components/Button";
import { color } from "../../constants/color";

const AuthScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      if (!email || !password || !phone || !name) {
        setError("All values are required.");
        setLoading(false);
        return;
      }
      await setToken("usdp_email", email);
      await setToken("usdp_password", password);
      setTimeout(() => {
        setLoading(false);
        window.location.pathname = "/dashboard";
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="auth-form__cover">
      <div className="form-signup  pt-3 px-3 pb-3">
        <div className="auth-caption ">
          Hello !! <span>👋</span>
        </div>
        <div className="form-we">Good to have you join us </div>
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
          <label className="form-label">Full name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="form-input"
            placeholder="first name"
            id="text"
          />
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Phone Number:</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            class="form-input"
            placeholder="number"
            id="text"
          />
        </div>
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
          <label htmlFor="password" class="form-label">
            Password
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
        <div className="form-btn mt-2">
          <Button
            text={"Sign Up"}
            bg={color.baseColor}
            height={"40px"}
            textColor={color.white}
            fontSize={"15px"}
            loaderColor={color.white}
            status={loading}
          />
        </div>
        <div className="form-hint text-center mt-1">
          Already have an account ?{" "}
          <Link to="/signin" className="auth-link">
            Sign in
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

export default AuthScreen;
