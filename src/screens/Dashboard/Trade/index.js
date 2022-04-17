import DashboardLayout from "../../../components/DashboardLayout";
import "./style.css";
import { Select } from "antd";
import "antd/dist/antd.css";
import { FiChevronDown } from "react-icons/fi";
import { color } from "../../../constants/color";
import { useState } from "react";
import TokenDropdown from "../../../components/TokenDropdown";
import SellTab from "../../../components/SellTab";

const Trade = () => {
  const { Option } = Select;
  const [tabIndex, setTabIndex] = useState("sell");
  return (
    <DashboardLayout>
      <div
        className="container-fluid pt-2 pb-5 px-0 bg-white mt-3 "
        style={{
          height: "auto",
          width: "100%",
          marginBottom: "200px",
        }}
      >
        <div className="tr-tab p-1 mt-3 d-flex align-items-center justify-content-between ">
          <div
            className={
              tabIndex === "sell"
                ? "tr-c p-2 rounded-1 active"
                : "tr-c p-2 rounded-1"
            }
            onClick={() => setTabIndex((prev) => "sell")}
          >
            Sell
          </div>
          <div
            className={
              tabIndex === "buy"
                ? "tr-c p-2 rounded-1 active"
                : "tr-c p-2 rounded-1"
            }
            onClick={() => setTabIndex((prev) => "buy")}
          >
            Buy
          </div>
        </div>
        <div className="tab-content__cover">
          <div
            className={
              tabIndex === "sell" ? "tab-content active" : "tab-content "
            }
          >
            <SellTab />
          </div>
          <div
            className={
              tabIndex === "buy" ? "tab-content active" : "tab-content "
            }
          >
            Tab Buy
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Trade;
