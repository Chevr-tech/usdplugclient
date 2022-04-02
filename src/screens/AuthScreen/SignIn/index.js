import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../../../components/Navbar"
const SignIn = () => {
  return (
    <div className="cover">
      <div className="bar"></div>
      <Navbar/>
      <div className="form p-3">
        <div className="auth-brand text-center">Welcome back !!!</div>
        <div className="auth-caption text-center">
          Please fill in the form the continue
        </div>
        <div className="form-group">
          <label for="email" class="form-label">
            Email address or username
          </label>
          <input
            type="email"
            class="form-input"
            placeholder="email address or username"
            id="email"
          />
        </div>
        <div className="form-group">
          <label for="email" class="form-label">
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
          <div>Sign in</div>
        </div>
        <div className="form-hint">
          Don't have an account ?{" "}
          <Link to="/signup" className="auth-link">
            {" "}
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

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
