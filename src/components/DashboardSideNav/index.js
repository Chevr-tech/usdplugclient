import { Link } from "react-router-dom";
import { data } from "./data";
import "./style.css";
import { IoClose } from "react-icons/io5";
import { color } from "../../constants/color";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaMoneyCheckAlt, FaUserShield } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import { deleteToken } from "../../utlis/token";

const DashboardSideNav = ({ closeBtn }) => {
  const handleLogout = async () => {
    try {
      console.log("clicked");
      await deleteToken("usdp_password");
      window.location.pathname = "/";
      return;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="backdrop" onClick={() => closeBtn(false)}>
        <div className="dmobile-nav">
          <div className={"close-btn__cover"} onClick={() => closeBtn(false)}>
            <IoClose size={20} color={color.darkColor} />
          </div>
          <Link
            to="/dashboard"
            className="mobile-links__item mt-3 d-flex align-items-center"
          >
            <BsFillGrid1X2Fill size={16} color={"#3f3f3f"} />
            <div
              className="mobile-link"
              style={{
                textDecoration: "none",
              }}
            >
              Dashboard
            </div>
          </Link>
          <Link
            to="/orders"
            className="mobile-links__item mt-3 d-flex align-items-center"
          >
            <FaMoneyCheckAlt size={16} color={"#3f3f3f"} />
            <div
              className="mobile-link"
              style={{
                textDecoration: "none",
              }}
            >
              Orders
            </div>
          </Link>
          {/* <Link
            to="/trade"
            className="mobile-links__item mt-3 d-flex align-items-center"
          >
            <RiHandCoinFill size={16} color={"#3f3f3f"} />
            <div
              className="mobile-link"
              style={{
                textDecoration: "none",
              }}
            >
              Trade
            </div>
          </Link> */}
          <Link
            to="/settings"
            className="mobile-links__item mt-3 d-flex align-items-center"
          >
            <IoSettings size={16} color={"#3f3f3f"} />
            <div
              className="mobile-link"
              style={{
                textDecoration: "none",
              }}
            >
              Settings
            </div>
          </Link>{" "}
          <Link
            to="/profile"
            className="mobile-links__item mt-3 d-flex align-items-center"
          >
            <FaUserShield size={16} color={"#3f3f3f"} />
            <div
              className="mobile-link"
              style={{
                textDecoration: "none",
              }}
            >
              Profile
            </div>
          </Link>{" "}
          <Link
            to="/support"
            className="mobile-links__item mt-3 d-flex align-items-center"
          >
            <BiSupport size={16} color={"#3f3f3f"} />
            <div
              className="mobile-link"
              style={{
                textDecoration: "none",
              }}
            >
              Support
            </div>
          </Link>
          <div
            className="mobile-links__item mt-3 d-flex align-items-center"
            onClick={() => handleLogout()}
          >
            <FaUserShield size={16} color={"#3f3f3f"} />
            <div
              className="mobile-link"
              style={{
                textDecoration: "none",
              }}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSideNav;
