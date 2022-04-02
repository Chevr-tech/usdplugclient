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
import { data } from "./data";
import { BiRightArrowAlt } from "react-icons/bi";
import { color } from "../../../constants/color";
import { Link } from "react-router-dom";
import moment from "moment";

const OrderTable = () => {
  let num = 1;
  const result = data.map((item) => {
    return {
      id: item.id,
      type: item.type,
      rate: item.rate,
      num: num++,
      status: item.status,
      token: item.token,
      quantity: item.quantity,
    };
  });

  const details = () => {
    return (
      <div className="details-cover">
        <Link to="/order/232fecd" className="details-link">
          <div className="details-text"> details</div>
          <BiRightArrowAlt size={14} color={"dodgerblue"} />
        </Link>
      </div>
    );
  };
  return (
    <div className="container-fluid">
      <GridComponent
        dataSource={result}
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
            field="type"
            width="100"
            textAlign="Center"
            headerTextAlign="Center"
            headerText="Order Type"
          />
          <ColumnDirective
            field="token"
            textAlign="Center"
            width="100"
            headerText="Token"
            headerTextAlign="Center"
          />
          <ColumnDirective field="status" width="100" textAlign="Center" />
          <ColumnDirective
            field="quantity"
            width="100"
            format="C2"
            textAlign="Center"
            headerText="Quantity"
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
