import Footer from "../Footer";
import WhatsappImg from "../../assets/images/wlogo.png";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { color } from "../../constants/color";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid "
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Link
          to={{
            pathname: `https://wa.me/+2347018708634?text=Thank%20you%20for%20contacting%Usdplug%20
          %20Which%20of%20the%20Services%20would%20you%20be%20needing.%20
          1.%20Buying%20or%20selling%20Bitcoin%20and%20USDT. %20      %20          %20      %20
          2.%20Consulting%20and%20Advisory%20services.%20      %20           %20      %20
         `,
          }}
          target={"_blank"}
          className="whatsimg d-flex align-items-center justify-content-center "
          style={{
            position: "fixed",
            width: "auto",
            height: "auto",
            // borderRadius: "50%",
            bottom: "20px",
            zIndex: "90",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: color.darkColor,
              }}
            >
              Quick trade
            </div>
            <div
              className=""
              style={{
                width: "55px",
                borderRadius: "50%",
                height: "55px",
                boxShadow: "0 0px 5px #eeeeeede",
              }}
            >
              <img
                src={WhatsappImg}
                alt={"whats app logo"}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </Link>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
