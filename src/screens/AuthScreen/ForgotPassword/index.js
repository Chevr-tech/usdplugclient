import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../../components/Button";
import { color } from "../../../constants/color";
import "./style.css";

const ForgotPassword = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="auth-form__cover">
      <div className="form-signup  pt-3 px-3 pb-3">
        <div className="auth-caption text-center">
          Forgot password <span>🗝️</span>
        </div>
        <div className="form-we text-center mt-2">
          Please entrer the email address associated with your account.
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
            htmlFor="email"
            class="form-label"
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
            class="form-input"
            placeholder="email address"
            id="email"
            style={{
              height: "45px",
            }}
          />
        </div>
        <div className="form-btn mt-3">
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
{
  /* <div className="cover">
<div className="form p-3">
  <div className="auth-brand text-center"> Password Recovery</div>
  <div className="auth-caption text-center">
    
  </div>

  <div className="form-group">
    <label for="email" class="form-label">
      Email address
    </label>
    <input
      type="email"
      class="form-input"
      placeholder="email address"
      id="email"
    />
  </div>

  <div className="form-btn__cover">
    <div>Continue</div>
  </div>
  <div className="form-hint">
    Already have an account ?{" "}
    <Link to="/" className="auth-link">
      {" "}
      Sign in
    </Link>
  </div>
</div>
</div> */
}
