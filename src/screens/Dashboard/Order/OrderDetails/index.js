import DashboardLayout from "../../../../components/DashboardLayout";
import "./style.css";
import { IoCopyOutline } from "react-icons/io5";
import { color } from "../../../../constants/color";
import moment from "moment";
import { BsArrowUpRight } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "../../../../utlis/axios";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import copy from "copy-to-clipboard";
import { bankInfo } from "../../Settings/data";
import marketUrl from "../../../../utlis/market";

const OrderDetails = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id, token, type } = useParams();
  const [orderType, setOrderType] = useState(null);
  const [bank, setBank] = useState({});
  const [buyData, setBuyData] = useState({});
  const [tokenPrice, setTokenPrice] = useState("");
  const [tokenRate, setTokenRate] = useState("");
  const [tokenRateRange, setTokenRateRange] = useState({});
  const [receivingBank, setReceivingBank] = useState("");

  const funcBankName = (code) => {
    return bankInfo.find((item) => String(item.code) === String(code)).title;
  };

  toast.configure();
  useEffect(() => {
    (async () => {
      try {
      } catch (err) {
        toast.error(err.message);
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let resMarket = await marketUrl.get(
          `/v3/simple/price?ids=${token}&vs_currencies=usd`
        );
        let resType = await axios.get("/site-data/price");
        setTokenRateRange((prev) =>
          Object.entries(resType.data.data[type]).map((item, i) => item[1])
        );
        let res = await axios(`/order/user/${id}`);
        setData((prev) => res.data.data);

        setLoading((prev) => false);
        setOrderType((prev) => (res.data.data.type === "buy" ? "buy" : "sell"));
        setBank((prev) =>
          res.data.data.type === "buy"
            ? res.data.data.quickBank
            : res.data.data.user.bank
        );
        setReceivingBank(
          (prev) =>
            bankInfo.find(
              (item) => item.code === res.data.data.user.bank.bankCode
            ).title
        );
        let n = res.data.data.quantity * resMarket.data[token].usd;
        let result = Object.entries(resType.data.data[type])
          .map((item, i) => item[1])
          .find((x) => x.min <= n && x.max >= n).price;
        setTokenRate((prev) => result);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    })();
  }, []);
  return (
    <DashboardLayout>
      <div className="container-fluid bg-white odd py-5 ">
        <div className="row align-items-center justify-content-center px-2">
          {loading ? (
            <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6 border odc d-flex-column">
              <div className="text-center">Fetching order. Please wait...</div>
            </div>
          ) : (
            <>
              {orderType === "sell" && (
                <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6 border odc d-flex-column">
                  <div className="od-top pt-2">
                    <div className="od-caption">Order Type</div>
                    <div className="d-flex">
                      <div className="od-title">
                        {data.type[0].toUpperCase() + data.type.substring(1)}{" "}
                        Order
                      </div>
                      {/* <div className="od-type__icon d-flex pl-3 align-items-center justify-content-center">
                  <BsArrowUpRight size={16} color={"tomato"} />
                </div> */}
                    </div>
                  </div>
                  <div className="od-id__cover d-flex py-2 px-2 d-none">
                    <div className="od-id">cjsdnk94nejk....dc78hi3 fjk3ef</div>
                    <div className="od-icon__cover">
                      <IoCopyOutline size={18} color={color.baseColor} />
                    </div>
                  </div>
                  <div className="od-details">
                    <div className="od-status__c d-flex align-items-center justify-content-center my-4 px-3">
                      <IoCheckmarkDone
                        size={16}
                        color={
                          data.status === "pending"
                            ? "orange"
                            : data.status === "approved"
                            ? "#acffac"
                            : data.status === "rejected"
                            ? "#ffb4a7"
                            : data.status === "processing"
                            ? "dodgerblue"
                            : "black"
                        }
                      />
                      <div
                        style={{
                          color:
                            data.status === "pending"
                              ? "orange"
                              : data.status === "approved"
                              ? "#acffac"
                              : data.status === "rejected"
                              ? "#ffb4a7"
                              : data.status === "processing"
                              ? "dodgerblue"
                              : null,
                        }}
                      >
                        {data.status[0].toUpperCase() +
                          data.status.substring(1)}
                      </div>
                    </div>
                    <div className="od-t date text-center py-2 my-2">
                      {moment(data.date).format("LLL")}
                    </div>
                    {/* Rate */}
                    <div className="od-en pt-2">
                      <div className="od-tt">Rate: </div>
                      <div className="od-v pb-3">{tokenRate}</div>
                    </div>
                    {/* Quantity */}
                    <div className="od-en pt-2">
                      <div className="od-tt">Quantity: </div>
                      <div className="od-v pb-3">{data.quantity}</div>
                    </div>{" "}
                    {/* Quantity */}
                    <div className="od-en pt-2">
                      <div className="od-tt">Amoout received: </div>
                      <div className="od-v pb-3">
                        ₦
                        {(data.quantity * tokenRate).toLocaleString("en-us", {
                          currency: "USD",
                        })}
                      </div>
                    </div>
                    {/* token */}
                    <div className="od-en pt-2">
                      <div className="od-tt">Token: </div>
                      <div className="od-v pb-3">{data.token}</div>
                    </div>
                    <div className="od-t date text-center py-2 mt-3 text-center">
                      Receiving wallet address
                    </div>
                    <div className="od-address">
                      <div className="od-ad-cover d-flex align-items-center py-2 px-2 my-3 justify-content-center">
                        <div className="od-id">{data.quickWallet.address}</div>
                      </div>
                    </div>
                    <div className="od-t date text-center py-2 mt-1 text-center">
                      Bank Details
                    </div>
                    <div className="od-en pt-2 d-none">
                      <div className="od-tt">Account name: </div>
                      <div className="od-v pb-3">{bank.name}</div>
                    </div>
                    <div className="od-en pt-2">
                      <div className="od-tt">Account number : </div>
                      <div className="od-v pb-3">{bank.number}</div>
                    </div>
                    <div className="od-en pt-2">
                      <div className="od-tt">Bank name: </div>
                      <div className="od-v pb-3">{receivingBank}</div>
                    </div>
                  </div>
                  <div className="od-i mt-5">
                    <div className="od-i__t text-center">
                      Having issues with your order ?.
                    </div>
                    <div className="od-i__caption text-center py-1">
                      Copy the order number below and contect support to get it
                      resolved.
                    </div>
                    <div className="od-n my-2 ">
                      <div className="od-n__t text-center">Order number:</div>
                      <div
                        className="od-n__v text-center"
                        onClick={() => {
                          copy(data.orderNum);
                          toast.success("order number copied");
                        }}
                      >
                        {data.orderNum}
                        <span className="od-icon__cover">
                          <IoCopyOutline size={14} color={color.baseColor} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {orderType === "buy" && (
                <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6 border odc d-flex-column">
                  <div className="od-top pt-2">
                    <div className="od-caption">Order Type</div>
                    <div className="d-flex">
                      <div className="od-title">
                        {data.type[0].toUpperCase() + data.type.substring(1)}{" "}
                        Order
                      </div>
                      {/* <div className="od-type__icon d-flex pl-3 align-items-center justify-content-center">
                  <BsArrowUpRight size={16} color={"tomato"} />
                </div> */}
                    </div>
                  </div>
                  <div className="od-id__cover d-flex py-2 px-2 d-none">
                    <div className="od-id">{}</div>
                    <div className="od-icon__cover">
                      <IoCopyOutline size={18} color={color.baseColor} />
                    </div>
                  </div>
                  <div className="od-details">
                    <div className="od-status__c d-flex align-items-center justify-content-center my-4 px-3">
                      <IoCheckmarkDone
                        size={16}
                        color={
                          data.status === "pending"
                            ? "#ffe5b4"
                            : data.status === "approved"
                            ? "#acffac"
                            : data.status === "rejected"
                            ? "#ffb4a7"
                            : null
                        }
                      />
                      <div
                        style={{
                          color:
                            data.status === "pending"
                              ? "orange"
                              : data.status === "approved"
                              ? "#acffac"
                              : data.status === "rejected"
                              ? "#ffb4a7"
                              : null,
                        }}
                      >
                        {data.status[0].toUpperCase() +
                          data.status.substring(1)}
                      </div>
                    </div>

                    <div className="od-t date text-center py-2 my-2">
                      {moment(data.date).format("LLL")}
                    </div>

                    {/* Rate */}
                    <div className="od-en pt-2 d-none">
                      <div className="od-tt">Rate: </div>
                      <div className="od-v pb-3">{}</div>
                    </div>
                    {/* Quantity */}
                    <div className="od-en pt-2">
                      <div className="od-tt">Quantity: </div>
                      <div className="od-v pb-3">{data.quantity}</div>
                    </div>
                    {/* token */}
                    <div className="od-en pt-2">
                      <div className="od-tt">Token: </div>
                      <div className="od-v pb-3">
                        {data.token.toUpperCase()}
                      </div>
                    </div>

                    <div className="od-t date text-center py-2 mt-3 text-center">
                      Receiving wallet address
                    </div>
                    <div className="od-address">
                      <div className="od-ad-cover d-flex align-items-center py-2 px-2 my-3 justify-content-center">
                        <div className="od-id">{data.user.wallet}</div>
                      </div>
                    </div>
                    <div className="od-t date text-center py-2 mt-1 text-center">
                      Bank Details
                    </div>
                    <div className="od-en pt-2">
                      <div className="od-tt">Account name: </div>
                      <div className="od-v pb-3">{bank.name}</div>
                    </div>
                    <div className="od-en pt-2">
                      <div className="od-tt">Account number : </div>
                      <div className="od-v pb-3">{bank.number}</div>
                    </div>
                    <div className="od-en pt-2">
                      <div className="od-tt">Bank name: </div>
                      <div className="od-v pb-3">{bank.bankName}</div>
                    </div>
                  </div>
                  <div className="od-i mt-5">
                    <div className="od-i__t text-center">
                      Having issues with your order ?.
                    </div>
                    <div className="od-i__caption text-center py-1">
                      Copy the order number below and contect support to get it
                      resolved.
                    </div>
                    <div className="od-n my-2 ">
                      <div className="od-n__t text-center">
                        Order number:{data.orderNum}
                      </div>
                      <div
                        className="od-n__v text-center"
                        onClick={() => {
                          copy(data.orderNum);
                          toast.success("order number copied");
                        }}
                      >
                        <span className="od-icon__cover">
                          <IoCopyOutline size={14} color={color.baseColor} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OrderDetails;
