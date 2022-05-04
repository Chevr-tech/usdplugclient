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
  console.log(data, "");
  // const ordernum = data.meta.orderNum
  const sample = [
    {
      asset: "crypto",
      date: "2022-05-01T22:06:34.421Z",
      id: "626f046a9082fa9bc51043cb",
      metadata: {
        orderNum: "570526",
        quantity: 0.04,
      },
      quickWallet: {
        address: "0xscldlci3irui347e7fnwdnkcwui34",
        id: "626c5d257604f326c7e41ca7",
        network: "btc",
      },
      user: {
        wallet: "0xscldlci3irui347e7fnwdnkcwui34",
        id: "6266f6972e77bf3e885ffbc4",
        bank: {
          bank: "Access Bank",
          bankCode: "044",
          number: "0059381944",
        },
      },
      status: "pending",
      token: "BTC",
      type: "sell",
    },
  ];
  const details = (item) => {
    return (
      <div className="details-cover">
        <Link to={`/order/${item?.id}`} className="details-link">
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
                : null,
            fontSize: "12px",
            backgroundColor:
              item.status === "pending"
                ? "#ffe5b4"
                : item.status === "approved"
                ? "#acffac"
                : item.status === "rejected"
                ? "#ffb4a7"
                : null,
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
