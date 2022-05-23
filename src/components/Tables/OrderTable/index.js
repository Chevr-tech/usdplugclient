import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  Sort,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import * as React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { color } from "../../../constants/color";
import { Link } from "react-router-dom";
import moment from "moment";
import "./style.css";
import { RiArrowUpDownLine, RiArrowUpLine } from "react-icons/ri";
import { CgArrowDown } from "react-icons/cg";

const OrderTable = ({ data }) => {
  // const ordernum = data.meta.orderNum

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
      case "airusd":
        return "tether"; //PERFECT MONEY
      case "perfect money":
        return "tether";
      default:
        break;
    }
  };

  const details = (item) => {
    return (
      <div className="details-cover">
        <Link
          to={`/orders/${item?.id}/${tokenName(item.token.toLowerCase())}/${
            item.type
          }`}
          className="details-link"
        >
          <div className="details-text"> details</div>
          <BiRightArrowAlt size={14} color={"dodgerblue"} />
        </Link>
      </div>
    );
  };

  const status = (item) => {
    return (
      <div className="row aligns-items-center justify-content-center">
        <div
          className="status-cover"
          style={{
            color:
              item.status === "pending"
                ? "orange"
                : item.status === "approved"
                ? "green"
                : item.status === "rejected"
                ? "tomato"
                : item.status === "processing"
                ? "dodgerblue"
                : "black",
            fontSize: "12px",
            backgroundColor:
              item.status === "pending"
                ? "#ffe5b4"
                : item.status === "approved"
                ? "#acffac"
                : item.status === "rejected"
                ? "#ffb4a7"
                : item.status === "processing"
                ? "#c1e0ff"
                : "black",
          }}
        >
          {item.status[0].toUpperCase() + item.status.substring(1)}
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid p-0">
      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={{
          pageSize: 10,
        }}
        toolbar={["Search"]}
        allowSorting={true}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="num"
            width="30"
            textAlign="Center"
            headerText="#"
          />
          <ColumnDirective
            field="orderNum"
            width="50"
            textAlign="Center"
            headerText="Order Number"
            headerTextAlign="Center"
            // template={id}
          />
          <ColumnDirective
            field="type"
            width="100"
            textAlign="Center"
            headerTextAlign="Center"
            headerText="Order Type"
            template={(item) => {
              return (
                <div className="order-type">
                  <div className="order-icon__cover">
                    {item.type == "sell" ? (
                      <RiArrowUpLine size={16} color={"#f37f6a"} />
                    ) : (
                      <CgArrowDown size={16} color={"#3ec03e"} />
                    )}
                  </div>
                  <div className="order-value text-left">
                    {item.type === "buy" ? "Buy" : "Sell"}
                  </div>
                </div>
              );
            }}
          />
          <ColumnDirective
            field="token"
            textAlign="Center"
            width="100"
            headerText="Token"
            headerTextAlign="Center"
          />
          <ColumnDirective
            field="status"
            width="100"
            textAlign="Center"
            headerText="Status"
            headerTextAlign="Center"
            template={status}
          />
          <ColumnDirective
            field="quantity"
            width="100"
            format="C2"
            textAlign="Center"
            headerText="Quantity"
            template={(item) => {
              return (
                <div
                  style={{
                    fontSize: "13px",
                    color: color.darkColor,
                  }}
                >
                  {item?.quantity}
                </div>
              );
            }}
          />
          <ColumnDirective
            field="date"
            width="100"
            textAlign="Center"
            headerText="Date Created"
            headerTextAlign="Center"
            template={(item) => {
              return (
                <div
                  className="order-date"
                  style={{
                    fontSize: "13px",
                  }}
                >
                  {moment(item.date).format("LLL")}
                </div>
              );
            }}
          />
          <ColumnDirective
            field="id"
            width="100"
            headerTextAlign="Center"
            headerText="Action"
            template={details}
          />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default OrderTable;
