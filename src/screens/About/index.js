import Layout from "../../components/Layout";
import { color } from "../../constants/color";
import "./style.css";

const About = () => {
  return (
    <Layout>
      <div
        className="container "
        style={{
          margin: "90px auto 100px auto",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            margin: "auto",
          }}
        >
          <div
            className="about-title p-1 text-center"
            style={{
              color: color.darkColor,
            }}
          >
            Who we are
          </div>
          <div className="">
            <div className="about-content text-center">
              USDplug is a total e-business solution provider that specializes
              in the provision of fast, reliable and efficient e-currency
              exchange service to the clients who desire to buy and sell online
              with ease. We are one of the Nigeria's most reliable and fastest
              link to the World of e-currency. We help you convert your Cash to
              E-currency and we also help you convert your E-currency to Cash.
              We provide convenience for our clients in all areas of e-business.
            </div>
          </div>
        </div>

        <div className="row d-flex align-items-start justify-content-center mt-4">
          <div className="col-sm-12 c-con m-2 rounded-2 col-md-5 col-lg-3 col-xl-3 p-2">
            <div
              className="about-caption p-1"
              style={{
                color: color.darkColor,
              }}
            >
              OUR MISSION
            </div>
            <div className="about-subtext p-1">
              Our mission is to provide unbeatable, un-equalled and unique
              e-commerce Solutions. We do not even allow you to take any risks.
              We bear all the risk and deliver our services to your doorsteps
              wherever you may be in the world.
            </div>
          </div>

          <div className="col-sm-12 c-con m-2 rounded-2 col-md-5 col-lg-3 col-xl-3">
            <div
              className="about-caption p-1"
              style={{
                color: color.darkColor,
              }}
            >
              {" "}
              Who are our customers?
            </div>
            <div className="about-subtext p-1">
              We provide services to large Online Forex Brokers, Internet
              Merchants, Exchangers, Crypto users, Consultancy Companies and
              Individuals, who prefer safe e-currency exchange, cash to
              e-currency or e-currency to cash services.
            </div>
          </div>
          <div className="col-sm-12 c-con m-2 rounded-2 col-md-5 col-lg-4 col-xl-4">
            <div
              className="about-caption p-1"
              style={{
                color: color.darkColor,
              }}
            >
              Why are we different?{" "}
            </div>
            <div className="about-subtext p-1">
              We are one of the largest e-currency exchangers providing services
              to large companies as well as to any client wishing to buy or sell
              small amount. Our customers have always up-to-date information
              about their orders thanks to our order-tracking facility. Incoming
              and outgoing payments are always processed on the same business
              day.
            </div>
          </div>
          <div className="col-sm-12 c-con m-2 rounded-2 col-md-5 col-lg-3 col-xl-3">
            <div
              className="about-caption p-1"
              style={{
                color: color.darkColor,
              }}
            >
              Why choose us?{" "}
            </div>
            <div className="about-subtext p-1">
              USDplug is dedicated to becoming the industry leader in e-currency
              and crypto-currency exchange, payment solutions and related
              services for companies and individuals worldwide. USDplug was
              built on the principles of credibility and security. .
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
