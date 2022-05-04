import { useState, useEffect } from "react";
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
import { toast } from "react-toastify";
import axios from "../../utlis/axios";
import marketUrl from "../../utlis/market";

const BuyTab = () => {
  const [step, setStep] = useState(1);
  const [tokenName, setTokenName] = useState("");
  const [buyRate, setBuyRate] = useState([]);
  const [receiveAddress, setReceiveAddress] = useState("");
  const [tokenQty, setTokenQty] = useState(0);
  const [tradeNetwork, setTradeNetwork] = useState("");
  const [tradeRate, setTradeRate] = useState("");
  const [nairaAmount, setNairaAmount] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [assetList, setAssetList] = useState([]);
  const [bnbPrice, setBnbPrice] = useState("");
  const [ethPrice, setEthPrice] = useState("");
  const [usdtPrice, setUsdtPrice] = useState("");
  const [tronPrice, setTronPrice] = useState("");
  const [bitcoinPrice, setBitcoin] = useState("");
  const [assestType, setAssetType] = useState("");
  const [bank, setBank] = useState({});
  const [bankId, setBankId] = useState({});

  const [tokenId, setTokenId] = useState(null);
  const { Option } = Select;
  var getPrice;
  const [refreshPrice, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        let res = await marketUrl.get(
          "/v3/simple/price?ids=binancecoin,bitcoin,tether,ethereum,tron&vs_currencies=usd"
        );
        const { binancecoin, bitcoin, ethereum, tether, tron } = res.data;
        setBnbPrice((prev) => binancecoin.usd);
        setBitcoin((prev) => bitcoin.usd);
        setEthPrice((prev) => ethereum.usd);
        setUsdtPrice((prev) => tether.usd);
        setTronPrice((prev) => tron.usd);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/account?status=active");
        setBank((prev) => res.data.data[0]);
        setBankId((prev) => res.data.data[0].id);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/wallet");
        setAssetList((prev) =>
          res.data.data.filter((item) => item.token === "usdt")
        );
      } catch (err) {
        toast.error(err.response.data.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/site-data/price");
        let test = 300;
        const num = Object.entries(res.data.data.buy).map((item, i) => item[1]);
        setBuyRate((prev) => num);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    })();
  }, []);

  const handleTokenPrice = async (e) => {
    if (e === "usdt") {
      let name = assetList.find((item) => item.token === e);
      console.log(name.network);
      setTokenName((prev) => name.token.toUpperCase());
      setReceiveAddress((prev) => name.address);
      setTradeNetwork((prev) => name.network.toUpperCase());
      setTokenPrice((prev) => usdtPrice);
      setTokenId((prev) => name.id);
      setAssetType((prev) => "crypto");
      return;
    }
  };

  const handleOrder = async () => {
    try {
      setLoading((prev) => true);
      let res = await axios.post("/order/user/buy", {
        quantity: tokenQty,
        token: tokenName.toLowerCase(),
        walletAddress: receiveAddress,
        quickBank: bankId || "",
        asset: assestType, // reminder to add when sending token
      });
      console.log(res.data);
      toast.success("Order created successfully");
      window.location.pathname = "orders";
      setLoading((prev) => false);
      return;
    } catch (err) {
      toast.error(err.response.data.message);
      setLoading((prev) => false);
    }
  };
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
            <div className="step-option d-flex justify-content-center align-items-center my-3">
              <Select
                placeholder={"Search for token"}
                showSearch={true}
                bordered={false}
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "0",
                }}
                onChange={(e) => handleTokenPrice(e)}
              >
                {assetList.map((item) => (
                  <Option key={item.id} value={item.token}>
                    {item.token.toUpperCase()}
                  </Option>
                ))}
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
            <div className="step-option d-flex align-items-center my-3">
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{
                  width: "220px",
                  height: "100%",
                  background: "#f5f5f5",
                  boxShadow: "inset 0 2px 10px #eeeeeede",
                }}
              >
                <div
                  className="text-center"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Enter quantity:
                </div>
              </div>
              <input
                className="px-3"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                type={"number"}
                onInput={(e) => {
                  let result = e.target.value * tokenPrice;
                  const test = buyRate.find(
                    (x) => x.min <= result && x.max >= result
                  );
                  setTokenQty((prev) => e.target.value);
                  setTradeRate((prev) => test.price);
                  setNairaAmount((prev) => test.price * tokenQty * test.price);
                }}
                value={tokenQty}
                onChange={(e) => setTokenQty(e.target.value)}
                placeholder={"quantity of token"}
              />
            </div>
            <div className="step-option d-flex align-items-center my-3 ">
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{
                  width: "220px",
                  height: "100%",
                  background: "#f5f5f5",
                  boxShadow: "inset 0 2px 10px #eeeeeede",
                }}
              >
                <div
                  className="text-center"
                  style={{
                    // width: "220px",
                    fontSize: "14px",
                  }}
                >
                  Naira amount
                </div>
              </div>
              <input
                className="px-3"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                disabled={true}
                value={`₦${(tokenPrice * tradeRate * tokenQty).toLocaleString(
                  "en-US",
                  {
                    currency: "USD",
                  }
                )}`}
                type={"text"}
                placeholder={"quantity of token"}
              />
            </div>
            <div className="text-center step-helper d-none">Select Rate</div>
            <div className="step-rate d-none">
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
                toast.success("Address copied");
                copy(receiveAddress);
              }}
            >
              <div className="token-ad px-2">{receiveAddress}</div>
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
              Ensure the network is an {tradeNetwork} supported network
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
              <div className="ods-v">{tokenName}</div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Quantity</div>
              <div className="ods-v">{tokenQty}</div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Amount you will receive</div>
              <div className="ods-v">
                ₦
                {(tokenPrice * tradeRate * tokenQty).toLocaleString("en-us", {
                  currency: "USD",
                })}
              </div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Trade Rate</div>
              <div className="ods-v">₦{tradeRate}</div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Network</div>
              <div className="ods-v">{tradeNetwork}</div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Bank</div>
              <div className="ods-v">
                <div>{bank.name}</div>
                <div className="text-end">{bank.number}</div>
                <div className="text-end">{bank.bank}</div>
              </div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Receiving address</div>
              <div className="ods-v">
                {receiveAddress.substring(0, 10) +
                  "...." +
                  receiveAddress.substring(
                    tradeNetwork.length - 10,
                    tradeNetwork.length
                  )}
              </div>
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
          <div className={"step-btn active"} onClick={() => handleOrder()}>
            <Button
              text={"Completed"}
              bg={color.baseColor}
              textColor={color.white}
              fontSize={"15px"}
              height={"39px"}
              loaderColor={color.white}
              status={loading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyTab;

{
  /* <Option value={"btc"}>Bitcoin</Option>
                <Option value={"eth"}>Ethereum</Option>
                <Option value={"tron"}>Tron</Option>
                <Option value={"usdt"}>Usdt</Option>
                <Option value={"airtime"}>Airtime</Option>
                <Option value={"perfectmoney"}>Perfect Money</Option> */
}
