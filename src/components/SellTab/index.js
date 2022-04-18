import { useState } from "react";
import { color } from "../../constants/color";
import { Button } from "../Button";
import "./style.css";
import "antd/dist/antd.css";
import { Select } from "antd";
import { MdOutlineContentPaste } from "react-icons/md";
import copy from "copy-to-clipboard";
import TokenImg from "../../assets/svg/SVG/tokenimg.svg";
import CreditImg from "../../assets/svg/SVG/creditimg.svg";
import SendToken from "../../assets/svg/SVG/sendtoken.svg";

const SellTab = () => {
  const [step, setStep] = useState(1);
  const [token, setToken] = useState("");
  const { Option } = Select;
  return (
    <div className="container-fluid mt-1 ">
      <div className="stepper-icon__cover my-2 d-flex align-items-center justify-content-between bot">
        <div
          className={
            step >= 1
              ? "stepper-icon px-1 rounded-2 active"
              : "stepper-icon px-1 rounded-2"
          }
        ></div>
        <div
          className={
            step >= 2
              ? "stepper-icon px-1 rounded-2 active"
              : "stepper-icon px-1 rounded-2"
          }
        ></div>
        <div
          className={
            step >= 3
              ? "stepper-icon px-1 rounded-2 active"
              : "stepper-icon px-1 rounded-2"
          }
        ></div>
        <div
          className={
            step >= 4
              ? "stepper-icon px-1 rounded-2 active"
              : "stepper-icon px-1 rounded-2"
          }
        ></div>
      </div>
      {step === 1 && (
        <div className="step-content">
          <div className="step-body">
            <div className="text-center step-header py-2 mt-4">
              Hey there ready to sell your assets ?
            </div>
            <div className="d-flex align-items-center justify-content-center my-4  step-img__c">
              <img
                src={TokenImg}
                alt="sell image"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "",
                }}
              />
            </div>
            <div className="text-center">
              Start by selecting the token you want to sell
            </div>
            <div className="step-option my-3">
              <Select
                placeholder={"Search for token"}
                showSearch={true}
                bordered={false}
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "0",
                }}
              >
                <Option value={"btc"}>Bitcoin</Option>
                <Option value={"eth"}>Ethereum</Option>
                <Option value={"tron"}>Tron</Option>
                <Option value={"airtime"}>Airtime</Option>
              </Select>
            </div>
            <div
              className="text-center py-2"
              style={{
                fontSize: "16px",
              }}
            >
              You will be credited in Naira.
              <span
                style={{
                  color: "gray",
                }}
              >
                (₦)
              </span>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="step-content">
          <div className="step-body">
            <div className="text-center step-header py-2 mt-4">
              Enter the quantity of your selected token
            </div>
            <div className="d-flex align-items-center justify-content-center my-4  step-img__c">
              <img
                src={CreditImg}
                alt="sell image"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="text-center">Token quantity</div>
            <div className="step-option my-3 p-2">
              <input
                className=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
                type={"number"}
                placeholder={"quantity of token"}
              />
            </div>
            <div className="text-center step-helper">Select Rate</div>
            <div className="step-rate">
              <div className="d-flex align-items-center justify-content-between">
                <div>Range</div>
                <div>Buying Rate</div>
              </div>
              {Array.from(Array(5)).map((item, i) => (
                <div
                  className="re-c p-2 my-2 rounded-1 d-flex align-items-center justify-content-between "
                  key={i}
                >
                  <div className="re-l d-flex align-items-center ">
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "1px solid black",
                        marginRight: "10px",
                      }}
                    ></div>
                    <div className="d-flex align-items-center">
                      <div className="re">0</div>
                      <div className="re px-2">-</div>
                      <div className="re">500</div>
                    </div>
                  </div>
                  <div className="re-v">480</div>
                </div>
              ))}
            </div>
            <div
              className="text-center py-2"
              style={{
                fontSize: "16px",
              }}
            >
              The more you trade the lesser the rate
              <span
                style={{
                  color: "gray",
                }}
              >
                💰
              </span>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="step-content">
          <div className="step-body">
            <div className="text-center step-header py-2 mt-4">
              Token transfer
            </div>
            <div className="d-flex align-items-center justify-content-center my-4  step-img__c">
              <img
                src={SendToken}
                alt="sell image"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="text-center">
              Send the token the wallet address below
            </div>
            <div
              className="step-option d-flex align-items-center justify-content-center my-3"
              onClick={() => {
                alert("copied");
                copy("sdvsdvkdv894t98we98y334toh3rvjirio");
              }}
            >
              <div className="token-ad px-2">
                289352835...sduisdfsdf09wewefweh
              </div>
              <div className="token-icon">
                <MdOutlineContentPaste size={18} color={"grey"} />
              </div>
            </div>
            <div
              className="text-center py-2"
              style={{
                fontSize: "16px",
              }}
            >
              Ensure the network is an ERC20 supported network
              <span
                style={{
                  color: "gray",
                }}
              >
                🛑
              </span>
            </div>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="step-content">
          <div className="step-body">
            <div className="text-center step-header py-2 mt-4">
              Order Summary
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Token</div>
              <div className="ods-v">Bitcoin</div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Quantity</div>
              <div className="ods-v">230</div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Amount you will receive</div>
              <div className="ods-v">₦50,345.00</div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Trade Rate</div>
              <div className="ods-v">₦540</div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Network</div>
              <div className="ods-v">ERC20</div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Receiving address</div>
              <div className="ods-v">428wcn3...8947523923</div>
            </div>
          </div>
        </div>
      )}

      <div className="step-btn__cover d-flex align-items-center justify-content-between">
        <div
          className={step !== 1 ? "step-btn active" : "step-btn"}
          onClick={() => {
            setStep((prev) => prev - 1);
          }}
        >
          <Button
            text={"Prev"}
            bg={color.white}
            border={`1px solid ${color.baseColor}`}
            textColor={color.baseColor}
            fontSize={"15px"}
            height={"38px"}
          />
        </div>
        <div
          className={step !== 4 ? "step-btn active" : "step-btn"}
          onClick={() => {
            setStep((prev) => prev + 1);
          }}
        >
          <Button
            text={"Next"}
            bg={color.baseColor}
            textColor={color.white}
            fontSize={"15px"}
            height={"39px"}
          />
        </div>
        {step === 4 && (
          <div className={"step-btn active"}>
            <Button
              text={"Completed"}
              bg={color.baseColor}
              textColor={color.white}
              fontSize={"15px"}
              height={"39px"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SellTab;
