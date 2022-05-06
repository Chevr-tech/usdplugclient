import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { setToken } from "../../utlis/token";
import { Redirect } from "react-router-dom";
import { Button } from "../../components/Button";
import { color } from "../../constants/color";
import axios from "../../utlis/axios";
import { toast } from "react-toastify";

const AuthScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  toast.configure();
  const handleSignup = async () => {
    try {
      setLoading(true);
      if (!email || !password || !phone || !name) {
        toast.warn("All values are required.");
        setLoading(false);
        return;
      }
      let res = await axios.post("/signup", {
        name: name,
        email: email,
        phone: phone,
        password: password,
      });
      if (res.status === 200) {
        await setToken("usdplug_userId", res.data.data.userId);
        await setToken("usdplug_email", email);
        let code = await axios.get(
          `/confirmation?userId=${res.data.data.userId}&type=${email}`
        );
      }
    } catch (err) {
      toast.error(err.message);
      setLoading((prev) => false);
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
          <label className="form-label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
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
            className="form-input"
            placeholder="number"
            id="text"
          />
        </div>
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
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="form-input"
            placeholder="password"
            id="email"
          />
        </div>
        <div className="form-btn mt-2" onClick={() => handleSignup()}>
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
          <a href="mailto:support@usdplug.com">support@usdplug.com</a>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
