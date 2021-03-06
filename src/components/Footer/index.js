import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { color } from "../../constants/color";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer-container p-4">
      <div className="container">
        <div className="row align-items-start justify-content-center">
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <div className="footer-brand d-flex align-items-center">
              <div className="footer-image ">
                <img src="" alt="" className="footer-image" />
              </div>
              <div className="footer-title">USDPLUG</div>
            </div>
            <div className="footer-caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              aliquid.
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <div className="footer-item__title">Join our community</div>
            <div className="footer-item__cover ">
              <Link
                to={{
                  pathname: "https://www.facebook.com",
                }}
                target={"_blank"}
                className="footer-social__item"
              >
                <AiFillInstagram size={17} color={color.darkColor} />
              </Link>
              <Link
                to={{
                  pathname: "https://www.facebook.com",
                }}
                target={"_blank"}
                className="footer-social__item"
              >
                <GrTwitter size={17} color={color.darkColor} />
              </Link>
              <Link
                to={{
                  pathname: "https://www.facebook.com",
                }}
                target={"_blank"}
                className="footer-social__item"
              >
                <FaFacebook size={17} color={color.darkColor} />
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <div className="footer-item__title">Reach Us</div>
            <div className="footer-address">
              Address: St. Anthony Lodge, Ifite-Awka, Awka, Anambra.
            </div>
            <div className="footer-phone">0810281218</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
