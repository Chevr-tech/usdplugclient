import { motion } from "framer-motion";
import CloseBtn from "../CloseBtn";
import KYCImg from "../../assets/svg/kycimg.svg";
import "./style.css";
import CardImg from "../CardImg";
import React, { useState } from "react";
import { data, state as stateOfOrigin } from "./data";
import SelectComponent from "../Select";
import { color } from "../../constants/color";
import { Button } from "../Button";
import { toast } from "react-toastify";
import { country as countryData } from "./data";
import axios from "../../utlis/axios";
import moment from "moment";
import { DatePicker, message, Select } from "antd";

const KYCRegistration = ({ closeBtn, setRefresh }) => {
  toast.configure();
  const [gender, setGender] = useState();
  const [selectedState, setSelectedStated] = useState();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [docType, setDocType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [docFront, setDocFront] = useState(null);
  const [docBack, setDocBack] = useState(null);
  const [zipCode, setZipCode] = useState("");
  const [loading, setLoading] = useState("");
  const { Option } = Select;

  const handleKYC = async () => {
    try {
      setLoading((prev) => true);
      let formData = new FormData();
      formData.append("gender", gender);
      formData.append("state", state);
      formData.append("firstname", firstName);
      formData.append("lastname", lastName);
      formData.append("documentType", docType);
      formData.append("dob", dob);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("documentFront", docFront);
      formData.append("documentBack", docBack);
      formData.append("zipCode", zipCode);
      formData.append("country", country);
      let res = await axios.post("/kyc", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("KYC uploaded successfully", { toastId: "4275235" });
      setLoading((prev) => false);
      closeBtn((pev) => false);
      setRefresh((prev) => false);
      return;
    } catch (err) {
      if (err.reponse) {
        toast.error(err.response.data.message);
        setLoading((prev) => false);
        return;
      }
      console.log(err.status);
      setLoading((prev) => false);
      toast.error(err.message);
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
      >
        <div className="kycr bg-white p-3">
          <CloseBtn setCloseBtn={closeBtn} />
          <CardImg img={KYCImg} width={"70px"} height={"70px"} />
          <div className="kyc-title text-center">
            Fill in the field to activate your account.
          </div>
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {/* first name */}
                <div className="kyc-group">
                  <div className="kyc-title">First Name</div>
                  <div className="kyc-input">
                    <input
                      type="text"
                      placeholder="enter your first name "
                      className="kyc-input__cover"
                      style={{
                        border: `1px solid ${color.baseColor}`,
                      }}
                      value={firstName}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {/* Second name */}
                <div className="kyc-group mt-2">
                  <div className="kyc-title">Last name:</div>
                  <div className="kyc-input">
                    <input
                      type="text"
                      placeholder="enter your last name "
                      className="kyc-input__cover"
                      style={{
                        border: `1px solid ${color.baseColor}`,
                      }}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-tat6 col-xl-6">
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
                    <Select
                      placeholder={"Select a state."}
                      style={{
                        width: "100%",
                      }}
                      bordered={false}
                      onChange={(e) => setState((prev) => e)}
                    >
                      {stateOfOrigin.map((item, i) => (
                        <Option value={item} key={i}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
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
                    <Select
                      placeholder={"Select a state."}
                      style={{
                        width: "100%",
                      }}
                      bordered={false}
                      onChange={(e) => {
                        setGender((prev) => e);
                      }}
                    >
                      {data.map((item, i) => (
                        <Option value={item.title} key={i}>
                          {item.title[0].toUpperCase() +
                            item.title.substring(1)}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {/* Second name */}
                <div className="kyc-group mt-2">
                  <div className="kyc-title">Zip code:</div>
                  <div className="kyc-input">
                    <input
                      type="text"
                      placeholder="enter your zip code"
                      className="kyc-input__cover"
                      style={{
                        border: `1px solid ${color.baseColor}`,
                      }}
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {/* Second name */}
                <div className="kyc-group mt-2">
                  <div className="kyc-title">City:</div>
                  <div className="kyc-input">
                    <input
                      type="text"
                      placeholder="enter your city"
                      className="kyc-input__cover"
                      style={{
                        border: `1px solid ${color.baseColor}`,
                      }}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {/* Second name */}
                <div className="kyc-group mt-2">
                  <div className="kyc-title">Country</div>
                  <div className="kyc-input">
                    <div
                      className="kyc-input__cover"
                      style={{
                        padding: "0",
                        border: `1px solid ${color.baseColor}`,
                      }}
                    >
                      <Select
                        placeholder={"Select a country."}
                        style={{
                          width: "100%",
                        }}
                        bordered={false}
                        onChange={(e) => setCountry((prev) => e)}
                      >
                        {countryData.map((item, i) => (
                          <Option value={item.title} key={i}>
                            {item.title}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {/* Second name */}
                <div className="kyc-group mt-2">
                  <div className="kyc-title">Date of Birth</div>
                  <div
                    className="kyc-input"
                    style={{
                      padding: "0",
                      border: `1px solid ${color.baseColor}`,
                      borderRadius: "3px",
                    }}
                  >
                    <DatePicker
                      style={{
                        width: "100%",
                      }}
                      placeholder={"select your date of birth"}
                      bordered={false}
                      onChange={(e) => {
                        let time = JSON.stringify(moment(e._d).format("lll"));
                        setDob((prev) => time);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {/* Second name */}
                <div className="kyc-group mt-2">
                  <div className="kyc-title">Address</div>
                  <div className="kyc-input">
                    <input
                      type="text"
                      placeholder="enter your address"
                      className="kyc-input__cover"
                      style={{
                        border: `1px solid ${color.baseColor}`,
                      }}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {/* Second name */}
                <div className="kyc-group mt-2">
                  <div className="kyc-title">Document type</div>
                  <div className="kyc-input">
                    <div
                      className="kyc-input__cover"
                      style={{
                        padding: "0",
                        border: `1px solid ${color.baseColor}`,
                      }}
                    >
                      <Select
                        style={{
                          width: "100%",
                        }}
                        bordered={false}
                        onChange={(e) => setDocType(e)}
                        placeholder="select a document type"
                      >
                        {["id-card", "license", "passport"].map((item, i) => (
                          <Option key={i} value={item}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {/* Document */}
                <div className="kyc-group mt-2">
                  <div className="kyc-title">Upload front view</div>
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
                      onChange={(e) => setDocFront((prev) => e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {/* Document */}
                <div className="kyc-group mt-2">
                  <div className="kyc-title">Upload back view</div>
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
                      onChange={(e) => setDocBack((prev) => e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex align-items-center justify-content-center ">
              <div className="kyc-btn mt-3" onClick={() => handleKYC()}>
                <Button
                  text={"Submit"}
                  bg={color.baseColor}
                  textColor={color.white}
                  fontSize={"14px"}
                  height={"40px"}
                  loaderColor={color.white}
                  loaderSize={10}
                  status={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default KYCRegistration;
