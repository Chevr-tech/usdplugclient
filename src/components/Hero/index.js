import "./style.css";
import { RiExchangeDollarFill } from "react-icons/ri";
import { color } from "../../constants/color";
import PhoneBg from "../../assets/images/phonebg.png";

const Hero = () => {
  return (
    <div className="container-fluid mt-4" style={{}}>
      <div className="row justify-content-around">
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 border border-primary">
          <div className="hero-left_cover">
            <div className="hero-top">
              <div className="hero-text ">
                Hello there !!!.{" "}
                <span
                  style={{
                    fontSize: "20px",
                  }}
                >
                  👋
                </span>
              </div>
            </div>
            <div className="hero-middle mt-2 text-center">
              Buy, Sell and Exhange your crypto assets and Gift cards
            </div>
            <div className="hero-caption mt-2 ">
              USDPlug is built with security and flexibility for customers to
              initiate transactions with ease.{" "}
              {/* <span className="cta-text hero">Ready to trade ?</span> */}
            </div>
            <div className="hero-cta__btn-cover">
              <div className="hero-cta__btn">
                <div>Explore</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 border border-primary  hr-img__c">
          <div className="hero-right__cover ">
            <img src={PhoneBg} alt={"phone image "} className="phoneimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
