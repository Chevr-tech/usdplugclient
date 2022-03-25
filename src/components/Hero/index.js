import "./style.css";
import { RiExchangeDollarFill } from "react-icons/ri";
import { color } from "../../constants/color";

const Hero = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-between">
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 border border-primary">
          <div className="hero-left_cover">
            <div className="hero-top">
              <div className="hero-icon__cover">
                <RiExchangeDollarFill size={16} color={color.baseColor} />
              </div>
              <div className="hero-text">Hello there !!!.</div>
            </div>
            <div className="hero-middle">
              Buy, Sell and Exhange your <br /> crypto assets.
            </div>
            <div className="hero-caption">
              USDPlug is built with security and flexibility for customers to
              initiate transactions with ease.{" "}
              {/* <span className="cta-text hero">Ready to trade ?</span> */}
            </div>
            <div className="hero-cta__btn-cover">
              <div className="hero-cta__btn">
                <div>Explore</div>
              </div>
              <div className="hero-cta__btn">
                <div>Get Started</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 border border-primary">
          <div className="hero-left_cover"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
