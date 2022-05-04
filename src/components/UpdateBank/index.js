import { color } from "../../constants/color";
import { Button } from "../Button";
import "./style.css";
import { motion } from "framer-motion";
import CloseBtn from "../CloseBtn";
import { useState } from "react";
import { Select } from "antd";
import { bankInfo } from "./data";
import { toast } from "react-toastify";
import axios from "../../utlis/axios";

const UpdateBank = ({ closeBtn, setRefresh }) => {
  const [res, setRes] = useState(false);
  const { Option } = Select;
  const [bankCode, setBankCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [loading, setLoading] = useState({
    update: false,
    confirm: false,
  });
  toast.configure();
  const handleUpdate = async () => {
    try {
      setLoading({ update: true });
      if (!accountNumber || !bankName) {
        toast.warn("All values are required");
        setLoading({ update: false });
        return;
      }
      let res = await axios.get(
        `/account/user/name?number=${accountNumber}&bankCode=${bankCode}`
      );
      setRes((prev) => true);
      setAccountName((prev) => res.data.data);
      setLoading({ update: false });
    } catch (err) {
      setLoading({ update: false });
      toast.error(err.response.data.message);
    }
  };

  const handleConfirm = async () => {
    try {
      setLoading({ confirm: true });
      let res = await axios.post("/account/user", {
        number: accountNumber,
        bankCode: bankCode,
        bank: bankName,
      });
      setRefresh((prev) => !prev);
      closeBtn((prev) => !prev);
      toast.success("Updated sucessfully");
    } catch (err) {
      setLoading({ confirm: false });
      console.log(err.response.data.message);
      // toast.error(err.response.data.data);
    }
  };

  return (
    <div className="backdrop">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ y: 10, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="ub"
      >
        <div className="bg-white p-3">
          <CloseBtn setCloseBtn={closeBtn} />
          <div className="ub-title">Update details</div>
          {!res ? (
            <>
              <div
                className="ub-group my-3 p-2 d-flex align-items-center justify-content-center"
                style={{
                  border: `1px solid ${color.baseColor}`,
                }}
              >
                <Select
                  style={{
                    fontSize: "12px",
                    width: "100%",
                    padding: "0",
                  }}
                  bordered={false}
                  onChange={(e) => {
                    setBankName((prev) => e.split(":")[1]);
                    setBankCode((prev) => e.split(":")[0]);
                  }}
                >
                  {bankInfo.map((item, i) => (
                    <Option key={item.id} value={`${item.code}:${item.title}`}>
                      {item.title}
                    </Option>
                  ))}
                </Select>
              </div>
              <div
                className="ub-group my-3 p-2 d-flex align-items-center justify-content-start"
                style={{
                  border: `1px solid ${color.baseColor}`,
                }}
              >
                <input
                  type="number"
                  name=""
                  id=""
                  className="ub-form"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>
              <div
                className="ub-btn"
                style={{
                  width: "100%",
                }}
                onClick={() => handleUpdate()}
              >
                <Button
                  text={"Submit"}
                  bg={color.baseColor}
                  fontSize={"12px"}
                  textColor={color.white}
                  status={loading.update}
                  height={"33px"}
                  loaderColor={color.white}
                  loaderSize={10}
                />
              </div>
            </>
          ) : (
            <>
              <div className="cbd-top">
                <div className="cbn">
                  <div className="cbn-t">Accout name:</div>
                  <div className="cbn-v">{accountName}</div>
                </div>
                <div className="cbn">
                  <div className="cbn-t">Accout number:</div>
                  <div className="cbn-v">{accountNumber} </div>
                </div>
                <div className="cbn">
                  <div className="cbn-t">Bank name:</div>
                  <div className="cbn-v">{bankName}</div>
                </div>
              </div>
              <div className="cbd-helper text-center py-2">
                Is this you bank details ?
              </div>
              <div className="ub-btn__cover">
                <div
                  className="ub-btn"
                  onClick={() => {
                    setAccountNumber((prev) => "");
                    setRes((prev) => false);
                  }}
                >
                  <Button
                    text={"Not mine"}
                    bg={color.white}
                    fontSize={"12px"}
                    height={"33px"}
                    textColor={"tomato"}
                    border={`1px solid tomato`}
                  />
                </div>
                <div
                  className="ub-btn"
                  onClick={() => closeBtn((prev) => handleConfirm())}
                >
                  <Button
                    text={"Yes, continue"}
                    bg={color.baseColor}
                    fontSize={"12px"}
                    textColor={color.white}
                    status={loading.confirm}
                    height={"33px"}
                    loaderColor={color.white}
                    loaderSize={10}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default UpdateBank;
