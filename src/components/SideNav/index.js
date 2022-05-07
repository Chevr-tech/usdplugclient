import { Link, useLocation } from "react-router-dom";
import { color } from "../../constants/color";
import { data } from "./data";
import "./style.css";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaMoneyCheckAlt, FaUserShield } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { deleteToken } from "../../utlis/token";

const SideNav = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeClass, setActiveClass] = useState("");
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

  const activeSwitch = (name) => {
    switch (name) {
      case "orders":
        return "active";
      case "dashboard":
        return "active";
      case "trade":
        return "active";
      case "settings":
        return "active";
      case "support":
        return "active";
      default:
        return "";
    }
  };

  useEffect(() => {
    setActiveClass((prev) => window.location.pathname.replace("/", ""));
  }, []);
  return (
    <div className="sidenav p-3">
      {/* <div className="sidenav-title">USD</div> */}
      <div className="sidenav-items">
        <div className="menu-items">
          {/* dashboard */}
          <Link
            to={`/dashboard`}
            className={`sidnav-link d-block ${
              window.location.pathname == "/dashboard" ? "active" : ""
            }  d-flex align-items-center py-2 px-1`}
          >
            <div className={"sidenav-link__icon-cover"}>
              <BsFillGrid1X2Fill
                size={16}
                color={activeTab === 0 ? color.white : "#6d6d6d"}
              />
            </div>
            <div className="sidenav-link__title">Dashboard</div>
          </Link>
          {/* Orders */}
          <Link
            to={`/orders`}
            className={`sidnav-link d-block ${
              window.location.pathname == "/orders" ? "active" : ""
            } d-flex align-items-center py-2 px-1 `}
          >
            <div className={"sidenav-link__icon-cover"}>
              <FaMoneyCheckAlt
                size={16}
                color={activeTab === 1 ? color.white : "#6d6d6d"}
              />
            </div>
            <div className="sidenav-link__title">Order</div>
          </Link>{" "}
          {/* Trade */}
          <Link
            to={`/trade`}
            className={
              activeTab === 2
                ? `sidnav-link d-block ${
                    window.location.pathname == "/trade" ? "active" : ""
                  } d-flex align-items-center py-2 px-1 `
                : "sidnav-link d-block d-flex align-items-center py-2 px-1"
            }
            onClick={() => setActiveTab(2)}
          >
            <div className={"sidenav-link__icon-cover"}>
              <RiHandCoinFill
                size={16}
                color={activeTab === 2 ? color.white : "#6d6d6d"}
              />
            </div>
            <div className="sidenav-link__title">Trade</div>
          </Link>
          {/* Settings */}
          <Link
            to={`/settings`}
            className={
              activeTab === 3
                ? `sidnav-link d-block ${
                    window.location.pathname == "/settings" ? "active" : ""
                  } d-flex align-items-center py-2 px-1 `
                : "sidnav-link d-block d-flex align-items-center py-2 px-1"
            }
            onClick={() => setActiveTab(3)}
          >
            <div className={"sidenav-link__icon-cover"}>
              <IoSettings
                size={16}
                color={activeTab === 3 ? color.white : "#6d6d6d"}
              />
            </div>
            <div className="sidenav-link__title">Settings</div>
          </Link>
          {/* Orders */}
          <Link
            to={`/profile`}
            className={
              activeTab === 4
                ? `sidnav-link d-block ${
                    window.location.pathname == "/profile" ? "active" : ""
                  } d-flex align-items-center py-2 px-1 `
                : "sidnav-link d-block d-flex align-items-center py-2 px-1"
            }
            onClick={() => setActiveTab(4)}
          >
            <div className={"sidenav-link__icon-cover"}>
              <FaUserShield
                size={16}
                color={activeTab === 4 ? color.white : "#6d6d6d"}
              />
            </div>
            <div className="sidenav-link__title">Profile</div>
          </Link>
          {/* Orders */}
          <Link
            to={`/support`}
            className={
              activeTab === 5
                ? `sidnav-link d-block ${
                    window.location.pathname == "/support" ? "active" : ""
                  } d-flex align-items-center py-2 px-1 `
                : "sidnav-link d-block d-flex align-items-center py-2 px-1"
            }
            onClick={() => setActiveTab(5)}
          >
            <div className={"sidenav-link__icon-cover"}>
              <BiSupport
                size={16}
                color={activeTab === 5 ? color.white : "#6d6d6d"}
              />
            </div>
            <div className="sidenav-link__title">Support</div>
          </Link>
          {/* Logout */}
          <div
            // to={`/orders`}
            className={
              "sidnav-link d-block d-flex align-items-center py-2 px-1 "
            }
            onClick={() => handleLogout()}
          >
            <div className={"sidenav-link__icon-cover"}>
              <MdLogout size={16} color={"#6d6d6d"} />
            </div>
            <div className="sidenav-link__title">Logout </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
