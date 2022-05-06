import { color } from "../../constants/color";
import "./style.css";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from "moment";
import { Button } from "../Button";

const OrderCard = ({ data }) => {
  const tokenName = (name) => {
    switch (name) {
      case "btc":
        return "bitcoin";
      case "bnb":
        return "binancecoin";
      case "eth":
        return "ethereum";
      case "usdt":
        return "tether";
      case "tron":
        return "tron";
      default:
        break;
    }
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        {data.map((item, i) => (
          <Link
            // :id/:token/:type
            to={`/orders/${item.id}/${tokenName(item?.token.toLowerCase())}/${
              item.type
            }`}
            className="col-12 bg-white my-1 py-3 px-2 "
            key={i}
          >
            <div className="d-flex od-card align-items-center ">
              <div className="od-img__cover d-flex align-items-center justify-content-center m-1">
                {item.type === "sell" ? (
                  <BsArrowDownLeft size={16} color={"tomato"} />
                ) : (
                  <BsArrowUpRight size={16} color={color.baseColor} />
                )}
              </div>
              <div className="od-content ">
                <div className="od-details d-flex justify-content-between ">
                  <div className="od-type">
                    {item.type[0].toUpperCase() + item.type.substring(1)} order
                  </div>
                  <div className="od-qty d-flex align-items-center">
                    <div className="od-e__t">Quantity: </div>
                    <div className="od-qty__value">{item.quantity}</div>
                  </div>
                </div>
                <div className="od-bottom d-flex align-item-start justify-content-between">
                  <div
                    className="od-token"
                    style={{
                      color:
                        item.status === "pending"
                          ? "orange"
                          : item.status === "approved"
                          ? "green"
                          : item.status === "rejected"
                          ? "tomato"
                          : "dodgerblue",
                    }}
                  >
                    {item.status}
                  </div>
                  <div className="od-amount">{item.token}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="row d-flex align-items-center justify-content-center mt-3 p-0">
        <Link
          to="/orders"
          className="col-sm-6 col-md-7 col-lg-5 col-xl-5 py-2 px-0 "
        >
          <Button
            text={"View All"}
            height={"40px"}
            fontSize={"16px"}
            bg={color.white}
            textColor={color.darkColor}

            // border={`1px solid ${color.baseColor}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default OrderCard;
