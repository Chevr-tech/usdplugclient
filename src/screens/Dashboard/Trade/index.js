import DashboardLayout from "../../../components/DashboardLayout";
import "./style.css";
import { Select } from "antd";
import "antd/dist/antd.css";
import { FiChevronDown } from "react-icons/fi";
import { color } from "../../../constants/color";
import { useState } from "react";
import TokenDropdown from "../../../components/TokenDropdown";

const Trade = () => {
  const [orderType, setOrderType] = useState(1);
  const [dd, setDD] = useState(false);
  const [token, setToken] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);
  const { Option } = Select;
  return (
    <DashboardLayout>
      <div
        className="conatiner-fluid bg-white mt-3 trc-c"
        onClick={() => {
          if (dd) {
            setDD(false);
          }
        }}
      >
        <div className="trc">
          <div className="trc-tab__container p-1 d-flex align-items-center justify-content-center ">
            <div
              className={
                orderType === 1
                  ? "trc-tab active py-2 px-2 text-center"
                  : "trc-tab py-2 px-2 text-center"
              }
              onClick={() => setOrderType(1)}
            >
              Sell
            </div>
            <div
              className={
                orderType === 2
                  ? "trc-tab active py-2 px-2 text-center"
                  : "trc-tab py-2 px-2 text-center"
              }
              onClick={() => setOrderType(2)}
            >
              Buy
            </div>
          </div>

          <div className="tr-select p-1">
            <div className="tr-token-value ">
              <div
                className="tr-helper"
                style={{
                  color: "#16cbc7",
                }}
              >
                Select token
              </div>
              <div
                className="tr-left d-flex align-items-center justify-content-start"
                onClick={() => setDD((prev) => !prev)}
              >
                <div
                  className="tr-icon"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <FiChevronDown size={16} color={color.dark} />
                </div>
                {dd && (
                  <TokenDropdown
                    token={token}
                    setToken={setToken}
                    closeDD={setDD}
                  />
                )}
                {token ? (
                  <>
                    <div className="tr-mg__cover">
                      <img src={token.image} alt="" className="tr-img" />
                    </div>
                    <div className="tr-symbol__cover ">
                      <div className="tr-symbol">{token.id}</div>
                      <div className="tr-id">{token.symbol}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="tr-symbol__cover ">
                      <div
                        className="tr-id"
                        style={{
                          color: color.darkColor,
                          fontSize: "15px",
                          marginTop: "10px",
                        }}
                        onClick={() => setDD((prev) => !prev)}
                      >
                        Click to select token
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="tr-token__input p-1">
              <div className="tr-helper-q text-right">Qunatity</div>
              <input
                type="number"
                placeholder="enter quantity "
                className="tr-input "
              />
            </div>
          </div>
          <div className="tr-bank__container p-2">
            {/* <div className="tr-price">
              Current token price: {currentPrice ? currentPrice : null}
            </div> */}
            <div className="tr-amount">
              <div className="tr-bank__cover">
                <div
                  className="tr-helper"
                  style={{
                    color: "#16cbc7",
                  }}
                >
                  Your bank details
                </div>
                <div className="tr-bank__name">Zannu Julius</div>
                <div className="tr-bank__account">0059381944</div>
                <div className="tr-bank__bank">Access Bank</div>
              </div>
              <div className="tr-token__input p-1">
                <div className="tr-helper-q text-right">
                  Amount you will recieve
                </div>
                <input
                  type="number"
                  placeholder="enter quantity "
                  className="tr-input "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Trade;
