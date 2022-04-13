import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { setToken } from "../../utlis/token";
import { Redirect } from "react-router-dom";

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
    <div className="container-fluid auth-page p-0 m-0">
      <div className="row p-0 align-items-center justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0 m-0">
          <div className="auth-form__cover">
            <div className="form-signup  pt-3 px-3 pb-3">
              <div className="auth-caption ">
                Hello !! <span>👋</span>
                <br />
                Sign up to get started.
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
                <label class="form-label">Full name</label>
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
                <label class="form-label">Phone Number:</label>
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
                <label for="email" class="form-label">
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
                <label for="password" class="form-label">
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
              <div className="form-btn__cover" onClick={() => handleSignup()}>
                <div>{loading ? "Creating account..." : "Sign up"}</div>
              </div>
              {/* <div className="form-hint">
                Already have an account ?{" "}
                <Link to="/signin" className="auth-link">
                  {" "}
                  Sign in
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0 m-0 d-none"
          style={{
            overflow: "hidden",
          }}
        >
          <div className="auth-bg p-3">
            <div className="auth-right p-3">
              <div className="auth-r__text pt-5 text-center">
                Built with trust and security
              </div>
              <div className="auth-caption text-center text-white mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
