import { AiFillSetting } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Button } from "../../../components/Button";
import DashboardLayout from "../../../components/DashboardLayout";
import { color } from "../../../constants/color";
import "./style.css";
import { motion } from "framer-motion";
import ConfirmBankDetails from "../../../components/ConfirmBankDetails";
import KYCRegistration from "../../../components/KYCRegistration";
import UpdateBank from "../../../components/UpdateBank";
import { toast } from "react-toastify";
import axios from "../../../utlis/axios";
import { bankInfo } from "./data";
import { Select } from "antd";
import { getToken } from "../../../utlis/token";

const Settings = () => {
  const { Option } = Select;
  const [bankModal, setBankModal] = useState(false);
  const [bankObj, setBankObj] = useState({});
  const [kYCR, setKYCR] = useState(false);
  const [hasBank, setHasBank] = useState(false);
  const [updatedModal, setUpdatedModal] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState({
    verifyBank: false,
    passwordLoading: false,
    kycLoading: false,
    deleteLoading: false,
    bankLoading: true,
  });
  const [oldPassword, setOldPassword] = useState("");
  const [bankLoading, setBankLoading] = useState(false);
  const [refresh, setRefresh] = useState({
    status: false,
    bank: false,
  });

  const [bankRefresh, setBankRefresh] = useState(false);
  const [status, setStatus] = useState(false);
  toast.configure();

  useEffect(() => {
    (async () => {
      try {
        let userId = await getToken("usdplug_userId");
        let res = await axios.get(`/account/user`);
        setHasBank((prev) => true);
        setBankObj((prev) => res.data.data);
        setBankLoading((prev) => false);
      } catch (err) {
        if (err.reponse.status == 404) {
          setHasBank((prev) => false);
          toast.error(err.response.data.message);
          return;
        }
        toast.error(err.response.data.message, {
          toastId: "242fwe234",
        });
      }
    })();
  }, [bankRefresh]);

  useEffect(() => {
    (async () => {
      try {
        setLoading({ kycLoading: true });
        let res = await axios.get("/kyc/user");
        setStatus((prev) => true);
      } catch (err) {
        console.log(err.response);
        if (err.response.status === 404) {
          console.log(err.response);
          toast.error("you haven't submitted your Kyc");
          setLoading({ kycLoading: false });
        }
      }
    })();
  }, []);
  const handleBank = async () => {
    try {
      setLoading({ verifyBank: true });
      if (accountNumber.length < 10) {
        toast.warn("Your account number must be 10 digits");
        setLoading({ verifyBank: false });
        return;
      }

      let res = await axios.get(
        `/account/user/name?number=${accountNumber}&bankCode=${bankCode}`
      );
      setLoading({ verifyBank: false });
      setAccountName((prev) => res.data.data);
      setBankModal((prev) => true);
      setRefresh((prev) => !prev);
    } catch (err) {
      toast.error(err.response.data.message);
      setLoading({ verifyBank: false });
    }
  };
  const handlDelete = async () => {
    try {
      setLoading({ deleteLoading: true });
      let userId = await getToken("usdplug_userId");
      let res = await axios.delete(`/account/user/${userId}`);
      console.log(res.data);
      toast.success("Account deleted successfully");
      setLoading({ deleteLoading: false });
      setBankRefresh((prev) => !prev);
    } catch (err) {
      toast.error(err.response.data.massage);
      setLoading({ deleteLoading: false });
    }
  };

  const handlePassword = async () => {
    try {
      setLoading({ passwordLoading: true });
      if (!password || !oldPassword) {
        toast.warn("All values are required. Please try again", {
          toastId: "223rfecs",
        });
        setLoading({ passwordLoading: false });
        return;
      }
      let res = await axios.post(`/change-password`, {
        oldPassword: oldPassword,
        password: password,
      });
      toast.success(res.data.message);
      setLoading({ passwordLoading: false });
      setBankRefresh((prev) => !prev);
      setPassword((prev) => "");
      setOldPassword((prev) => "");
    } catch (err) {
      setLoading({ passwordLoading: false });
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      {bankModal && (
        <ConfirmBankDetails
          bank={bankObj}
          closeBtn={setBankModal}
          accountNumber={accountNumber}
          accountName={accountName}
          bankCode={bankCode}
          bankName={bankName}
        />
      )}
      {kYCR && (
        <KYCRegistration closeBtn={setKYCR} setRefresh={setBankRefresh} />
      )}
      {updatedModal && (
        <UpdateBank closeBtn={setUpdatedModal} setRefresh={setBankRefresh} />
      )}
      <DashboardLayout>
        <div className="container-fluid bg-white settings-container p-0">
          <div className="settings-top px-1 py-1">
            {/* <div className="setting-icon__cover">
              <AiFillSetting size={18} color={color.baseColor} />
            </div> */}
            <div className="settings-value">Settings</div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="container-fluid p">
                {/* Bank details */}
                <div className="row align-items-center justify-content-between py-3 settings-card">
                  <div className="col-sm-12 col-md-5 col-lg-4 col-lg-4">
                    <div className="setting-title">Bank Details</div>
                    <div className="settings-caption pt-1">
                      Upload a default bank account to receive funds when you
                      wan to sell you crypto assets.
                    </div>
                  </div>
                  {bankLoading ? (
                    <div className="col-sm-12 col-md-5 col-lg-6 col-lg-6">
                      <div className="b-loading__t text-center">
                        Fetching bank details...
                      </div>
                    </div>
                  ) : (
                    <div className="col-sm-12 col-md-5 col-lg-6 col-lg-6 ">
                      <div className="setting-input__cover mt-sm-2">
                        {hasBank ? (
                          <div className="has-bank">
                            <div className="bank-details d-flex align-items-center justify-content-between">
                              <div className="bank-title">Account name:</div>
                              <div className="bank-name">{bankObj.name}</div>
                            </div>
                            <div className="bank-details d-flex align-items-center justify-content-between">
                              <div className="bank-title">Account number:</div>
                              <div className="bank-name">{bankObj.number}</div>
                            </div>
                            <div className="bank-details d-flex align-items-center justify-content-between">
                              <div className="bank-title">Bank name</div>
                              <div className="bank-name">{bankObj.bank}</div>
                            </div>
                            <div className="has-bank__cta d-flex align-items-center justify-content-between mt-3">
                              <div
                                className="has-bank__btn d-none"
                                onClick={() => handlDelete()}
                              >
                                <Button
                                  text={"Delete"}
                                  bg={color.white}
                                  fontSize={"14px"}
                                  border={`1px solid tomato`}
                                  textColor={"tomato"}
                                  height={"37px"}
                                  loaderColor={"tomato"}
                                  status={loading.deleteLoading}
                                />
                              </div>
                              <div
                                className="has-bank__btn"
                                onClick={() => setUpdatedModal((prev) => true)}
                              >
                                <Button
                                  text={"Update"}
                                  bg={color.baseColor}
                                  textColor={color.white}
                                  height={"37px"}
                                  fontSize={"14px"}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div
                              className="settings-input p-1 my-2 d-flex align-items-center"
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
                                  <Option
                                    key={item.id}
                                    value={`${item.code}:${item.title}`}
                                  >
                                    {item.title}
                                  </Option>
                                ))}
                              </Select>
                            </div>
                            <input
                              type="number"
                              className="settings-input p-1"
                              placeholder="enter your account number"
                              style={{
                                border: `1px solid ${color.baseColor}`,
                              }}
                              value={accountNumber}
                              onInput={(e) => {
                                if (
                                  e.target.value.length > e.target.maxLength
                                ) {
                                  e.target.value = e.target.value.slice(
                                    0,
                                    e.target.maxLength
                                  );
                                }
                              }}
                              maxLength="10"
                              onChange={(e) => setAccountNumber(e.target.value)}
                            />
                            <div
                              className="settings-btn mt-2"
                              onClick={() => handleBank()}
                            >
                              <Button
                                text={"Add"}
                                bg={color.baseColor}
                                fontSize={"14px"}
                                textColor={color.white}
                                height={"37px"}
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {/*  Password */}
                <div className="row align-items-start justify-content-between py-3 settings-card">
                  <div className="col-sm-12 col-md-5 col-lg-4 col-lg-4">
                    <div className="setting-title">Password</div>
                    <div className="settings-caption py-2 ">
                      Change update your password.
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-5 col-lg-6 col-lg-6">
                    <div className="setting-input__cover">
                      <input
                        type="text"
                        className="settings-input p-1"
                        placeholder="enter old password"
                        style={{
                          border: `1px solid ${color.baseColor}`,
                        }}
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                      <input
                        type="text"
                        className="settings-input p-1 mt-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="enter new password"
                        style={{
                          border: `1px solid ${color.baseColor}`,
                        }}
                      />
                      <div
                        className="settings-btn mt-2"
                        onClick={() => handlePassword()}
                      >
                        <Button
                          text={"Update "}
                          bg={color.baseColor}
                          fontSize={"14px"}
                          loaderColor={color.white}
                          textColor={color.white}
                          height={"37px"}
                          status={loading.passwordLoading}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* BanK details */}
                <div className="row align-items-center justify-content-between py-3 settings-card">
                  <div className="col-sm-12 col-md-5 col-lg-4 col-lg-4">
                    <div className="setting-title">KYC upload</div>
                    <div className="settings-caption pt-1">
                      To perform billing operations, you need to complete your
                      KYC details.
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-5 col-lg-6 col-lg-6">
                    {!status ? (
                      <div className="setting-input__cover">
                        <div className="settings-helper my-2">
                          Click on the button below to get started.
                        </div>
                        <div
                          className="settings-btn mt-2"
                          onClick={() => setKYCR((prev) => true)}
                        >
                          <Button
                            text={"Start"}
                            bg={color.white}
                            fontSize={"14px"}
                            textColor={color.baseColor}
                            height={"37px"}
                            border={`1px solid ${color.baseColor}`}
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        className=""
                        style={{
                          width: "120px",
                        }}
                      >
                        <Button
                          text={"Verified"}
                          bg={color.baseColor}
                          textColor={color.white}
                          fontSize={"14px"}
                          height={"35px"}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Settings;
