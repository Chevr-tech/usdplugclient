import DashboardLayout from "../../../components/DashboardLayout";
import "./style.css";
import { RiSendPlaneFill, RiExchangeDollarFill } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import OrderTable from "../../../components/Tables/OrderTable/";
import { Button } from "../../../components/Button";
import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";
import { color } from "../../../constants/color";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardTop from "../../../components/CardTop";
import MarketCard from "../../../components/MarketCard";
import { HiArrowNarrowRight } from "react-icons/hi";
import VolumeImg from "../../../assets/svg/volume.svg";
import MoneyImg from "../../../assets/svg/money.svg";
import MarketTable from "../../../components/Tables/MarketTable/";
import OrderCard from "../../../components/OrderCard";
import MarketDsktCard from "../../../components/MarketDsktCard";

const Home = () => {
  const [hide, setHide] = useState(false);
  return (
    <DashboardLayout>
      <div
        style={{
          width: "auto",
          height: "auto",
          marginBottom: "200px",
        }}
      >
        <div className="container-fluid p-0 mt-3 mb-3">
          <div className="row align-items-center justify-content-between">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-card">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-card ">
                    <div className="dashboard-card bg-white ">
                      <img src={VolumeImg} className="dashboard-bg" alt="" />
                      <div className="dashboard-card__image-cover">
                        <img src={VolumeImg} className="dashboard-img" alt="" />
                      </div>
                      <div className="transaction-value">₦2,249.00</div>
                      <div className="dashboard-card__title ">
                        Total trading volume
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-card ">
                    <div className="dashboard-card bg-white  "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-lg-6 my-md-3">
              <div className="info-admin ">
                <div className="money-img__cover">
                  <img src={MoneyImg} alt="" className="money-img" />
                </div>
                <div className="info-container">
                  <div className="info-title text-center text-white">Trade</div>
                  <div className="info-cover">
                    <Link
                      to="/order/?type=buy"
                      className="trade-btn__cover px-2"
                    >
                      <div className="trade-btn ">
                        <BsArrowBarDown size={20} color={color.white} />
                      </div>
                      <div className="trade-cta__btn mt-1 ">Buy</div>
                    </Link>
                    <Link
                      to="/order/?type=sell"
                      className="trade-btn__cover px-2"
                    >
                      <div className="trade-btn px-2 ">
                        <BsArrowBarUp size={20} color={color.white} />
                      </div>
                      <div className="trade-cta__btn mt-1">Sell</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-3 d-none mb-3">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 bg-white py-2">
              <CardTop link={"rates"} title={"Rate"} />
              <div className="rate-dskt__container"></div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2 bg-white">
              <CardTop title={"Market data"} link={"markets"} />
              <div className="market-container">
                <MarketCard />
              </div>
              <Link to="/market" className="more-btn__cover py-2">
                <div className="more-btn">view more</div>
                <div className="more-icon__cover">
                  <HiArrowNarrowRight size={14} color={"grey"} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Orders */}
        <div
          className="container-fluid px-0 m-0 "
          style={{
            marginTop: "7px",
          }}
        >
          <div className="trade-top bg-white py-2">
            <div className="trade-content">
              <div className="trade-history py-1 pr-3">Order History.</div>
            </div>
            <div className="right-btn__cover">
              <div className="refresh-btn">
                <Button
                  text={"Refresh"}
                  color={color.baseColor}
                  bg={color.white}
                  border={`1px solid ${color.baseColor}`}
                  height={"33px"}
                  status={false}
                  loaderColor={color.baseColor}
                />
              </div>
              <div
                className="collapse-btn"
                onClick={() => setHide((prev) => !prev)}
              >
                <Button
                  text={hide ? "Show Orders" : "Hide Orders"}
                  color={color.baseColor}
                  bg={color.white}
                  border={`1px solid ${color.baseColor}`}
                  height={"33px"}
                />
              </div>
            </div>
          </div>
          <div className="d-none">
            <OrderTable />
          </div>
          <div className="order-card">
            <OrderCard />
          </div>
        </div>

        {/* Market */}
        <div
          className="container-fluid px-0 mx-0 mt-4 bg-white"
          style={{
            marginTop: "7px",
          }}
        >
          <div className="trade-top py-2">
            <div className="trade-content">
              <div className="trade-history py-1 pr-3">Explore market.</div>
            </div>
            <div className="right-btn__cover">
              <div className="refresh-btn">
                <Button
                  text={"Refresh"}
                  color={color.baseColor}
                  bg={color.white}
                  border={`1px solid ${color.baseColor}`}
                  height={"33px"}
                  status={false}
                  loaderColor={color.baseColor}
                />
              </div>
              <div
                className="collapse-btn"
                onClick={() => setHide((prev) => !prev)}
              >
                <Button
                  text={hide ? "Show market" : "Hide market"}
                  color={color.baseColor}
                  bg={color.white}
                  border={`1px solid ${color.baseColor}`}
                  height={"33px"}
                />
              </div>
            </div>
          </div>
          <div className="d-none">
            <MarketTable />
          </div>
          <div
            className="market-card__dskt  d-flex align-items-center p-2"
            style={{
              width: "100%",
              height: "400px",
              overflowX: "scroll",
              overflowY: "hidden",
            }}
          >
            <div className="d-flex">
              <MarketDsktCard />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
