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
          fontSize: "15px",
        }}
        className={"mb-2"}
      >
        <div className="container-fluid p-0 mt-3 ">
          <div className="row ">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2 ">
              <div className="dashboard-card bg-white">
                <img src={VolumeImg} className="dashboard-bg" alt="" />
                <div className="dashboard-card__image-cover">
                  <img src={VolumeImg} className="dashboard-img" alt="" />
                </div>
                <div className="transaction-value"> ₦2, 249.00 </div>
                <div className="dashboard-card__title ">
                  Total trading volume
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
              <div className="info-admin">
                <div className="money-img__cover">
                  <img src={MoneyImg} alt="" className="money-img" />
                </div>
                <div className="info-container">
                  <div className="info-title text-center text-white">
                    Trade{" "}
                  </div>
                  <div className="info-cover">
                    <Link
                      to="/trade/?type=buy"
                      className="trade-btn__cover px-2"
                    >
                      <div className="trade-btn ">
                        <BsArrowBarDown size={20} color={color.white} />
                      </div>
                      <div className="trade-cta__btn mt-1"> Buy </div>
                    </Link>
                    <Link
                      to="/trade/?type=sell"
                      className="trade-btn__cover px-2"
                    >
                      <div className="trade-btn px-2 ">
                        <BsArrowBarUp size={20} color={color.white} />
                      </div>
                      <div className="trade-cta__btn mt-1"> Sell </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders */}
      <div className="container-fluid p-0 m-0 " style={{}}>
        <div className="trade-top bg-white py-2">
          <div className="trade-content mt-2">
            <div className="trade-history py-1 pr-3"> Order History. </div>
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
                fontSize={"12px"}
                loaderColor={color.baseColor}
              />
            </div>
            <div
              className="collapse-btn d-none"
              onClick={() => setHide((prev) => !prev)}
            >
              <Button
                text={hide ? "Show Orders" : "Hide Orders"}
                color={color.baseColor}
                bg={color.white}
                fontSize={"13px"}
                border={`1px solid ${color.baseColor}`}
                height={"33px"}
              />
            </div>
          </div>
        </div>
        <div className="dsk-order__table">
          <OrderTable />
        </div>
        <div className="order-card dsk-order__card">
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
            <div className="trade-history py-1 pr-3"> Explore market. </div>
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
              className="collapse-btn d-none"
              onClick={() => setHide((prev) => !prev)}
            >
              <Button
                text={hide ? "Show market" : "Hide market"}
                color={color.baseColor}
                bg={color.white}
                fontSize={"12px"}
                border={`1px solid ${color.baseColor}`}
                height={"33px"}
              />
            </div>
          </div>
        </div>
        <div className="dskt-market__table">
          <MarketTable />
        </div>
        <div
          className="market-card__dskt align-items-center p-2 dskt-market__card "
          style={{
            width: "100%",
            height: "auto",
            overflowX: "scroll",
            scrollbarWidth: "0 !important",
            overflowY: "hidden",
          }}
        >
          <div className="d-flex ">
            <MarketDsktCard />
          </div>
        </div>
      </div>
      <div>
        {/* News */}
        <div className=" d-none container-fluid p-0 dsk-ns mt-2 ">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="ns-card">
                <div className="ns-image_cover">
                  <image src="" alt="" />
                </div>
                {/* comments */}
                <div className="body">
                  ut also the leap into electronic typesetting, remaining
                  essentially unchanged.It was popul arise d in the 1960 s with
                  the release of Letra set sheets containing Lorem Ipsum
                  passages, and like Aldus PageM aker including versions of
                  Lorem Ipsum.
                </div>
                <div className="bs-b">
                  <div className="ns-date"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;

{
  /* <div className="container-fluid mt-3 d-none mb-3">
<div className="row d-flex align-items-center justify-content-between">
  <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 bg-white py-2">
    <CardTop link={"rates"} title={"Rate"} />
    <div className="rate-dskt__container"> </div>
  </div>
  <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2 bg-white">
    <CardTop title={"Market data"} link={"markets"} />
    <div className="market-container">
      <MarketCard />
    </div>
    <Link to="/market" className="more-btn__cover py-2">
      <div className="more-btn"> view more </div>
      <div className="more-icon__cover">
        <HiArrowNarrowRight size={14} color={"grey"} />
      </div>
    </Link>
  </div>
</div>
</div> */
}
