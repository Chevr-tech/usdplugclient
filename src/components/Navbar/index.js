import "./style.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-fluid nav-container">
      <div className="container nav-item_cover border border-primary">
        <div className="nav-brand__cover">
          <div className="nav-brand__img-cover">
            <img src="" alt="" className="nav-brand__image" />
          </div>
          <div className="nav-brand__title">
            USD<span className="nav-brand__caption">PLUG</span>
          </div>
        </div>
        {/* Nav items */}
        <div className="nav-items_Links">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/" className="nav-item">
            Who we are
          </Link>
          <Link to="/" className="nav-item">
            News Room
          </Link>
          <Link to="/" className="nav-item">
            Contact Us
          </Link>
          <Link to="/" className="nav-item">
            Trade
          </Link>
        </div>
        <div className="nav-auth__btn-cover">
          <div className="nav-auth__btn ">Sign in</div>
          <div className="nav-auth__btn ">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
