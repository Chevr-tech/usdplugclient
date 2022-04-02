import "./style.css";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const TopNav = () => {
  const [option, setOption] = useState(false);
  return (
    <div className="container-fluid py-2 px-3 d-flex align-items-center justify-content-center nav-cover">
      <div className="nav-brand-cover">
        <div className="nav-brand_image">USDPLUG clients</div>
        <div
          className="nav-right p-1"
          onClick={() => setOption((prev) => !prev)}
        >
          <div className={option ? "nav-dropdown active" : "nav-dropdown"}>
            <Link to={"/profile"} className="nav-dd__item py-1 px-2 my-2">
              Profile
            </Link>
            <div className="nav-dd__item py-1 px-2 my-2">Logout</div>
          </div>
          <div className="nav-avatar">
            <img
              className="avatar-image"
              src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"
            />
          </div>
          <div className="nav-name__cover d-flex align-items-center justify-content-center">
            <div className="nav-name pr-3">Admin</div>
            <div className="nav-icon ml-2">
              <FiChevronDown size={15} color="#3f3f3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
