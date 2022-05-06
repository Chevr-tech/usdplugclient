import "./style.css";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { color } from "../../constants/color";
import { RiMenu3Line } from "react-icons/ri";
import DashboardSideNav from "../DashboardSideNav";
import { useEffect } from "react";
import { deleteToken, getToken } from "../../utlis/token";
import axios from "../../utlis/axios";
import { toast } from "react-toastify";
const TopNav = () => {
  const [option, setOption] = useState(false);
  const [nav, setNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accountDetails, setAccountDetails] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let userId = await getToken("usdplug_userId");
        let res = await axios.get(`/profile?user=${userId}`);

        setEmail((prev) => res.data.data.email);
        setName((prev) => res.data.data.name);
        setPhone((prev) => res.data.data.phone);
        setLoading((prev) => false);
      } catch (err) {
        toast.error(err.message);
      }
    })();
  }, []);
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
            <div
              className="nav-dd__item py-1 px-2 my-2"
              onClick={async () => {
                await deleteToken("usdplug_token");
                window.location.pathname = "/";
              }}
            >
              Logout
            </div>
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
              {loading ? null : name[0].toUpperCase()}
            </div>
          </div>
          <div
            className="nav-name__cover d-flex align-items-center justify-content-center"
            onClick={() => setOption((prev) => !prev)}
          >
            <div className="nav-name pr-3">
              {loading ? null : name[0].toUpperCase() + name.substring(1)}
            </div>
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
