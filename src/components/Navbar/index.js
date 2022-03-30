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
          <Link to="/" className="nav-brand__cover">
            <div className="nav-brand__img-cover">
              <img src={Logo} alt="" className="nav-brand__image" />
            </div>
            {/* <div className="nav-brand__title">
              USD<span className="nav-brand__caption">PLUG</span>
            </div> */}
          </Link>
          {/* Nav items */}
          <div className="nav-items_Links">
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/whoweare" className="nav-item">
              Who we are
            </Link>
            <Link to={"/newsroom"} className="nav-item">
              News Room
            </Link>
            <Link to={"/newsroom"} className="nav-item">
              Contact Us
            </Link>
            <Link to={"/rate"} className="nav-item">
              Rate
            </Link>
          </div>
          <div className="nav-left__cover">
            <div className="nav-auth__btn-cover">
              <Link to="/signin" className="nav-auth__btn">
                Sign in
              </Link>
              <Link to="/signup" className="nav-auth__btn">
                Sign up
              </Link>
            </div>
            <div className="menu-btn__cover" onClick={() => setCloseMenu(true)}>
              <HiOutlineMenuAlt3 size={25} color={color.darkColor} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
