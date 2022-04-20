import "./style.css";
import { Link } from "react-router-dom";
import { color } from "../../constants/color";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import MobileNav from "../MobileNav";
import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(false);
  return (
    <>
      {closeMenu && <MobileNav closeBtn={setCloseMenu} />}
      <div className="container-fluid nav-container">
        <div className=" nav-item_cover ">
          <a to="/" className="nav-brand__cover ">
            <div className="nav-brand__img-cover">
              <img src={Logo} alt="" className="nav-brand__image" />
            </div>
          </a>
          {/* Nav items */}
          <div className="nav-items_links">
            <Link to="/" className="nav-item">
              Home
            </Link>
            <a href="/#whoweare" className="nav-item">
              Who we are
            </a>
            <Link to={"/newsroom"} className="nav-item">
              News Room
            </Link>
            <a href={"/#footer"} className="nav-item">
              Contact Us
            </a>
            <Link to={"/rate"} className="nav-item">
              Rate
            </Link>
          </div>
          <div className="nav-left__cover">
            <div className="nav-auth__btn-cover">
              <Link to="/signin" className="nav-auth__btn">
                Sign in
              </Link>
              <Link to="/signup" className="nav-auth__btn d-none">
                Sign up
              </Link>
            </div>
            <div className="menu-btn__cover" onClick={() => setCloseMenu(true)}>
              <HiOutlineMenuAlt3 size={30} color={color.darkColor} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
