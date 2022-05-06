import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../../components/Button";
import { color } from "../../../constants/color";
import "./style.css";
import axios from "../../../utlis/axios";
import { toast } from "react-toastify";
import { getToken } from "../../../utlis/token";
import { useEffect } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        let userEmail = await getToken("usdplug_email");
        if (!userEmail) {
          return setEmail((prev) => "");
        }
        setEmail((prev) => userEmail);
        return;
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const handleFp = async () => {
    try {
      setLoading((prev) => true);
      if (!email) {
        toast.error("Please enter a value");
        setLoading((prev) => false);
        return;
      }
      let res = await axios.post("/forgot-password", {
        type: "email",
        account: email,
      });
      setLoading((prev) => false);
      toast.success(res.data.message, {
        toastId: "293492",
      });
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
        setLoading((prev) => false);
        return;
      }
      toast.error(err.message);
      setLoading((prev) => false);
    }
  };
  return (
    <div className="auth-form__cover">
      <div className="form-signup  pt-3 px-3 pb-3">
        <div className="auth-caption text-center">
          Forgot password <span>🗝️</span>
        </div>
        <div className="form-we text-center mt-2">
          Please entrer the phone number associated with your account.
        </div>
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
          <label
            htmlFor="number"
            className="form-label"
            style={{
              fontSize: "16px",
            }}
          >
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="enter email "
            id="email"
            style={{
              height: "45px",
            }}
          />
        </div>
        <div className="form-btn mt-3" onClick={() => handleFp()}>
          <Button
            text={"Continue"}
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

export default ForgotPassword;
