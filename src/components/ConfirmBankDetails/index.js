import { color } from "../../constants/color";
import CloseBtn from "../CloseBtn";
import "./style.css";
import { motion } from "framer-motion";
import { Button } from "../Button";
import BankImg from "../../assets/svg/Bank.svg";
import CardImg from "../CardImg";
import { useState, useEffect } from "react";
import axios from "../../utlis/axios";
import { toast } from "react-toastify";

const ConfirmBankDetails = ({
  bank,
  closeBtn,
  accountNumber,
  accountName,
  bankCode,
  bankName,
}) => {
  const [loading, setLoading] = useState(false);
  toast.configure();
  const handleAddBank = async () => {
    try {
      setLoading((prev) => true);
      let res = await axios.post("/account/user", {
        number: accountNumber,
        bankCode: bankCode,
        bank: bankName,
      });
      setLoading((prev) => false);
      toast.success("Account created.");
      return closeBtn((prev) => false);
    } catch (err) {
      toast.error(err.response.data.message);
      setLoading((prev) => false);
    }
  };

  return (
    <div className="backdrop">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ x: 10, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="cbd-c py-2 px-1 bg-white">
          <CloseBtn setCloseBtn={closeBtn} />
          <CardImg img={BankImg} width={"50px"} height={"50px"} />
          <div className="cbd-top p-3">
            <div className="cbn">
              <div className="cbn-t">Accout name:</div>
              <div className="cbn-v">{accountName} </div>
            </div>
            <div className="cbn">
              <div className="cbn-t">Accout number:</div>
              <div className="cbn-v">{accountNumber}</div>
            </div>
            <div className="cbn">
              <div className="cbn-t">Bank name:</div>
              <div className="cbn-v">{bankName}</div>
            </div>
          </div>
          <div className="cbd-helper text-center py-2 mb-4">
            Is this you bank details ?
          </div>
          <div className="cbd-cta__btn-cover">
            <div className="cbd-btn" onClick={() => closeBtn(false)}>
              <Button
                text={"Not mine"}
                bg={color.white}
                fontSize={"12px"}
                height={"33px"}
                textColor={"tomato"}
                border={`1px solid tomato`}
              />
            </div>
            <div className="cbd-btn" onClick={() => handleAddBank()}>
              <Button
                text={"Yes, continue"}
                bg={color.baseColor}
                fontSize={"12px"}
                textColor={color.white}
                status={loading}
                height={"33px"}
                loaderColor={color.white}
                loaderSize={10}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmBankDetails;
