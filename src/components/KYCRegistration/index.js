import { motion } from "framer-motion";
import CloseBtn from "../CloseBtn";
import KYCImg from "../../assets/svg/kycimg.svg";
import "./style.css";
import CardImg from "../CardImg";
import React, { useState } from "react";
import { data, state } from "./data";
import SelectComponent from "../Select";
import { color } from "../../constants/color";
import { Button } from "../Button";

const KYCRegistration = ({ closeBtn }) => {
  const [gender, setGender] = useState();
  const [selectedState, setSelectedStated] = useState();
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
        <div className="kycr bg-white p-3">
          <CloseBtn setCloseBtn={closeBtn} />
          <CardImg img={KYCImg} width={"70px"} height={"70px"} />
          <div className="kyc-title text-center">
            Fill in the field to activate your account.
          </div>
          {/* first name */}
          <div className="kyc-group">
            <div className="kyc-title">First name:</div>
            <div className="kyc-input">
              <input
                type="text"
                placeholder="enter your first name "
                className="kyc-input__cover"
                style={{
                  border: `1px solid ${color.baseColor}`,
                }}
              />
            </div>
          </div>
          {/* Second name */}
          <div className="kyc-group mt-2">
            <div className="kyc-title">Second name:</div>
            <div className="kyc-input">
              <input
                type="text"
                placeholder="enter your first name "
                className="kyc-input__cover"
                style={{
                  border: `1px solid ${color.baseColor}`,
                }}
              />
            </div>
          </div>
          {/* State of origin */}
          <div className="kyc-group mt-2">
            <div className="kyc-title">State of origin</div>
            <div
              className="kyc-input__cover"
              style={{
                padding: "0",
                border: `1px solid ${color.baseColor}`,
              }}
            >
              <SelectComponent
                data={state.map((item, i) => {
                  return {
                    num: i,
                    title: item,
                  };
                })}
                setValue={setSelectedStated}
                placeholder={"select state of origin"}
              />
            </div>
          </div>
          {/* Gender */}
          <div className="kyc-group mt-2">
            <div className="kyc-title">Gender</div>
            <div
              className="kyc-input__cover"
              style={{
                padding: "0",
                border: `1px solid ${color.baseColor}`,
              }}
            >
              <SelectComponent
                data={data}
                setValue={setGender}
                placeholder={"select gender"}
              />
            </div>
          </div>
          {/* Second name */}
          <div className="kyc-group mt-2">
            <div className="kyc-title">Address:</div>
            <div className="kyc-input">
              <input
                type="text"
                placeholder="enter your address"
                className="kyc-input__cover"
                style={{
                  border: `1px solid ${color.baseColor}`,
                }}
              />
            </div>
          </div>
          {/* Document */}
          <div className="kyc-group mt-2">
            <div className="kyc-title">Upload document</div>
            <div
              style={{
                padding: "0",
                width: "100%",
                height: "33px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <input
                type="file"
                name=""
                id=""
                className="kyc-input__file"
                style={{
                  width: "45%",
                }}
              />
              <div
                className="kyc-input__cover"
                style={{
                  width: "45%",
                  padding: "0",
                  border: `1px solid ${color.baseColor}`,
                }}
              >
                <SelectComponent
                  data={[
                    "driver's license",
                    "Int. password",
                    "Voters card",
                    "other id",
                  ].map((item, i) => {
                    return {
                      title: item,
                    };
                  })}
                  setValue={setGender}
                  placeholder={"docuemnt type"}
                />
              </div>
            </div>
          </div>
          <div className="kyc-btn mt-2">
            <Button
              text={"Submit"}
              bg={color.baseColor}
              textColor={color.white}
              fontSize={"12px"}
              height={"33px"}
              loaderColor={color.white}
              loaderSize={10}
              status={true}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default KYCRegistration;
