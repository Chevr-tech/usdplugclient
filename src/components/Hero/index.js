import "./style.css";

const Hero = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-between">
        <div className="col-5 border border-primary">
          <div className="hero-left_cover">
            <div className="hero-top">
              <div className="hero-icon__cover"></div>
              <div className="hero-text">
                <span
                  style={{
                    fontSize: "17px",
                  }}
                >
                  👋
                </span>
                Hello there !!!.
              </div>
            </div>
            <div className="hero-middle">
              Buy, Sell and Exhange your <br /> crypto assets.
            </div>
          </div>
        </div>
        <div className="col-5 border border-primary">
          <div className="hero-left_cover"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
