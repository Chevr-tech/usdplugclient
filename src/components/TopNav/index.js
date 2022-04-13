import "./style.css";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { color } from "../../constants/color";
import { RiMenu3Line } from "react-icons/ri";
import DashboardSideNav from "../DashboardSideNav";

const TopNav = () => {
  const [option, setOption] = useState(false);
  const [nav, setNav] = useState(false);
  return (
    <div className="container-fluid py-2 px-3 d-flex align-items-center justify-content-center nav-cover">
      {nav && <DashboardSideNav closeBtn={setNav} />}
      <div className="nav-brand-cover">
        <div className="nav-brand_image">My dashboard</div>
        <div className="nav-right p-1">
          {/* dropdown */}
          <div className={option ? "nav-dropdown active" : "nav-dropdown"}>
            <Link to={"/profile"} className="nav-dd__item py-1 px-2 my-2">
              Profile
            </Link>
            <div className="nav-dd__item py-1 px-2 my-2">Logout</div>
          </div>
          <div className="nav-avatar">
            <div
              style={{
                color: color.white,
                padding: "3px 0 0 0 ",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              J
            </div>
          </div>
          <div
            className="nav-name__cover d-flex align-items-center justify-content-center"
            onClick={() => setOption((prev) => !prev)}
          >
            <div className="nav-name pr-3">James</div>
            <div className="nav-icon ml-2">
              <FiChevronDown size={15} color="#3f3f3" />
            </div>
          </div>
          <div className="m-icon mr-5" onClick={() => setNav((prev) => !prev)}>
            <RiMenu3Line size={26} color={color.darkColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
