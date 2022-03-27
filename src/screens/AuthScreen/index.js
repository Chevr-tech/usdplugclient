import { Link } from "react-router-dom";
import "./style.css";

const AuthScreen = () => {
  return (
    <div className="cover">
      <div className="form p-3">
        <div className="auth-brand text-center">USDPLUG</div>
        <div className="auth-caption text-center">
          Hello !!, Good to have you join us. Sign up to get started.
        </div>
        <div className="form-group">
          <label for="text" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-input"
            placeholder="first name"
            id="text"
          />
        </div>
        <div className="form-group">
          <label for="text" class="form-label">
            Second name
          </label>
          <input
            type="text"
            class="form-input"
            placeholder="second name"
            id="text"
          />
        </div>
        <div className="form-group">
          <label for="text" class="form-label">
            Phone Number:
          </label>
          <input
            type="text"
            class="form-input"
            placeholder="first name"
            id="text"
          />
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
        <div className="form-group">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-input"
            placeholder="password"
            id="email"
          />
        </div>
        <div className="form-btn__cover">
          <div>Sign up</div>
        </div>
        <div className="form-hint">
          Already have an account ?{" "}
          <Link to="/" className="auth-link">
            {" "}
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;

// {
/* <div className="auth-cover">
<div className="row">
  <div
    className="col-sm-12 col-md-8 col-lg-6 col-lg-6 border border-primary"
    style={{
      height: "100vh",
    }}
  >
    <div className="auth-form p-3">
      <form action="" className="auth">
        {Array.from(Array(4)).map((item, i) => (
          <div className="form-group">
            <label for="exampleInputT1" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputText1"
              aria-describedby="emailHelp"
            />
            {/* <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
    //   </div> */
// }
//           </div>
//         ))}
//         <div className="auth-btn">Sign in</div>
//       </form>
//     </div>
//   </div>
//   <div
//     className="col-sm-12 col-md-8 col-lg-6 col-lg-6 border border-primary"
//     style={{
//       height: "100vh",
//     }}
//   ></div>
// </div>
// </div> */}
