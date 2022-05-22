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
  const [walletAddress, setWalletAddress] = useState("");
  const [adminBank, setAdminBank] = useState([]);
  const [volume, setVolume] = useState(0);
  const [selectedBank, setSelectedBank] = useState(null);
  const [tokenObj, setTokenObj] = useState(null);
  const [error, setError] = useState("");

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
        setAdminBank((prev) => res.data.data);
        console.log(res.data.data);
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
          res.data.data.filter((item) => item.token.toLowerCase() === "usdt")
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
        // const num = Object.entries(res.data.data.buy).map((item, i) => item[1]);
        let arr = [
          res.data.data.buy.a,
          res.data.data.buy.b,
          res.data.data.buy.c,
        ];
        setBuyRate((prev) => arr);
      } catch (err) {
        if (err.response) {
          toast.error(err.response.data.message);
          setLoading((prev) => false);
          return;
        }
        toast.success(err.message);
        setLoading((prev) => false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        // let res = await axios.get("/account?status=active");
        // console.log(res.data);
        // setAdminBank((prev) => res.data.data[0]);
        // console.log(res.data.data);
        let siteData = await axios.get("/site-data/quantity");
        setVolume((prev) => siteData.data.data.fiat);
      } catch (err) {
        if (err.response) {
          toast.error(err.response.data.message);
          return;
        }
        toast.error(err.message);
        return;
      }
    })();
  }, []);

  const handleTokenPrice = async (e) => {
    if (e.toLowerCase() === "usdt") {
      let name = assetList.find((item) => item.token === e);
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
      if (!receiveAddress) {
        toast.warn("Please enter a wallet address");
        setLoading((prev) => false);
        return;
      }
      if (!selectedBank) {
        toast.warn("Please select a bank account");
        setLoading((prev) => false);
        return;
      }
      if (tokenQty == 0) {
        toast.warn("Please enter quantity higher than 0");
        setLoading((prev) => false);
        return;
      }

      if (tokenPrice * tokenQty <= 50) {
        toast.warn("You cant create an order below $50", {
          toastId: "e9sdicj",
        });
        setLoading((prev) => false);
        return;
      }
      let res = await axios.post("/order/user/buy", {
        quantity: tokenQty,
        token: tokenName.toLowerCase(),
        quickWallet: "",
        walletAddress: walletAddress,
        quickBank: selectedBank.id || "",
        asset: assestType, // reminder to add when sending token
      });
      toast.success("Order created successfully");
      setLoading((prev) => false);
      return (window.location.pathname = "/orders");
      // console.log(res.data);
      return;
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
        setLoading((prev) => false);
        return;
      }
      toast.error(err.message);
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
                onChange={(e) => {
                  handleTokenPrice(e);
                }}
              >
                {assetList.map((item) => (
                  <Option key={item.id} value={item.token}>
                    {`${item.token.toUpperCase()} (${item.network.toUpperCase()})`}
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
            <div
              className="step-option d-flex align-items-center mt-3"
              style={{
                border: error ? `1px solid tomato` : null,
              }}
            >
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

                  if (result < 50) {
                    setError((prev) => "Minimum trading volume is $50");
                    return;
                  } else {
                    setError((prev) => "");
                    const test = buyRate.find(
                      (x) => x.min <= result && x.max >= result
                    );

                    setTokenQty((prev) => e.target.value);
                    setTradeRate((prev) => test.price);
                    setNairaAmount(
                      (prev) => test.price * tokenQty * test.price
                    );
                  }
                }}
                value={tokenQty}
                onChange={(e) => setTokenQty(e.target.value)}
                placeholder={"quantity of token"}
              />
            </div>
            {error && (
              <span
                style={{
                  fontSize: "12px",
                  color: "tomato",
                }}
              >
                {error}
              </span>
            )}
            <div className="step-option d-flex align-items-center my-1">
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
            <div
              style={{
                fontStyle: "italic",
                fontSize: "12px",
                color: color.darkColor,
                display: "none",
              }}
            >
              maximum trading volume{" "}
              <span
                style={{
                  fontSize: "13px",
                  fontStyle: "normal",
                }}
              >
                ₦{parseInt(volume).toLocaleString("en-us", { currency: "USD" })}
              </span>
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
              Paste your wallet address in the field below.
            </div>
            <div className="step-option px-2 py-1 d-flex align-items-center justify-content-center my-1">
              <input
                type={"text"}
                className={"user-address"}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                placeholder={"Enter your wallet address "}
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
            </div>

            <div className="text-start mt-1">
              Select a bank you will like to transfer to
            </div>
            <div className="step-option p-1 d-flex align-items-center justify-content-center my-1">
              <Select
                bordered={false}
                style={{
                  width: "100%",
                }}
                onChange={(e) => {
                  setSelectedBank((prev) =>
                    adminBank.find((item) => item.id === e)
                  );
                }}
              >
                {adminBank.map((item) => (
                  <Option key={item.id}>
                    {item.name}-{item.number}-{item.bank}
                  </Option>
                ))}
              </Select>
            </div>

            <div
              className="text-start pt-1 mb-2"
              style={{
                color: "dodgerblue",
                fontStyle: "italic",
                fontSize: "13px",
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
              <div className="ods-t">Expected amount you will receive</div>
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
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-start justify-content-between">
              <div className="ods-t">
                <div>Bank details</div>
                <div
                  style={{
                    width: "200px",
                  }}
                >
                  Send ₦
                  {(tokenPrice * tradeRate * tokenQty).toLocaleString("en-us", {
                    currency: "USD",
                  })}{" "}
                  to the account number on the right
                </div>
              </div>

              <div className="ods-v">
                <div>{selectedBank ? selectedBank.name : ""} </div>
                <div className="text-end">
                  {selectedBank ? selectedBank.number : ""}
                </div>
                <div className="text-end">
                  {selectedBank ? selectedBank.bank : ""}
                </div>
              </div>
            </div>
            <div className="ods rounded-1 p-2 my-3 d-flex align-items-center justify-content-between">
              <div className="ods-t">Receiving address</div>
              <div className="ods-v">
                {walletAddress.substring(0, 10) +
                  "...." +
                  walletAddress.substring(
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
