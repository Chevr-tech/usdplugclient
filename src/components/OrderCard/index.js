import { color } from "../../constants/color";
import "./style.css";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from "moment";
import { Button } from "../Button";

const OrderCard = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {Array.from(Array(2)).map((item, i) => (
          <Link
            to={"/order/325925"}
            className="col-12 bg-white my-1 py-2 px-2 "
          >
            {/* <div className="od-date text-center">
              {moment(Date.now()).format("lll")}
            </div> */}
            <div className="d-flex od-card align-items-center ">
              <div className="od-img__cover d-flex align-items-center justify-content-center m-1">
                <BsArrowDownLeft size={19} color={"tomato"} />
              </div>
              <div className="od-content mt-1">
                <div className="od-details d-flex justify-content-between ">
                  <div className="od-type">Sell Order</div>
                  <div className="od-qty d-flex align-items-center">
                    <div className="od-e__t">Quantity: </div>
                    <div>300</div>
                  </div>
                </div>
                <div className="od-bottom d-flex align-item-start justify-content-between">
                  <div
                    className="od-token"
                    style={{
                      color: "dodgerblue",
                    }}
                  >
                    Processing
                  </div>
                  <div className="od-amount">ETH</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {Array.from(Array(3)).map((item, i) => (
          <Link
            to={"/order/325925"}
            className="col-12 bg-white my-1 py-2 px-2 "
            key={i}
          >
            {/* <div className="od-date text-center">
              {moment(Date.now()).format("lll")}
            </div> */}
            <div className="d-flex od-card align-items-center ">
              <div className="od-img__cover d-flex align-items-center justify-content-center m-1">
                <BsArrowUpRight size={19} color={color.baseColor} />
              </div>
              <div className="od-content mt-1">
                <div className="od-details d-flex justify-content-between ">
                  <div className="od-type">Buy Order</div>
                  <div className="od-qty d-flex align-items-center">
                    <div className="od-e__t">Quantity: </div>
                    <div>300</div>
                  </div>
                </div>
                <div className="od-bottom d-flex align-item-start justify-content-between">
                  <div
                    className="od-token"
                    style={{
                      color: "orange",
                    }}
                  >
                    Pending
                  </div>
                  <div className="od-amount">BNB</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="row d-flex align-items-center justify-content-center mt-3 p-0">
        <div className="col-sm-6 col-md-7 col-lg-5 col-xl-5 p-0">
          <Button
            text={"View All"}
            height={"40px"}
            fontSize={"15px"}
            bg={color.white}
            textColor={color.darkColor}
            // border={`1px solid ${color.baseColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
