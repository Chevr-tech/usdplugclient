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
            pathname: `https://wa.me/+2347018708634?text=Hello%20I%20want%20to%20trade!`,
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
                background: color.white,
              }}
              className="p-1 rounded shadow animate__animated animate__shakeX"
            >
              Quick Trade.
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
