import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";
import { Button } from "../../../components/Button";
import DashboardLayout from "../../../components/DashboardLayout";
import { color } from "../../../constants/color";
import "./style.css";
import { motion } from "framer-motion";
import ConfirmBankDetails from "../../../components/ConfirmBankDetails";
import KYCRegistration from "../../../components/KYCRegistration";
import UpdateBank from "../../../components/UpdateBank";
const Settings = () => {
  const [bankModal, setBankModal] = useState(false);
  const [bankObj, setBankObj] = useState(null);
  const [kYCR, setKYCR] = useState(false);
  const [hasBank, setHasBank] = useState(true);
  const [updatedModal, setUpdatedModal] = useState(false);
  return (
    <>
      {bankModal && (
        <ConfirmBankDetails bank={bankObj} closeBtn={setBankModal} />
      )}
      {kYCR && <KYCRegistration closeBtn={setKYCR} />}
      {updatedModal && <UpdateBank closeBtn={setUpdatedModal} />}
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
                  <div className="col-sm-12 col-md-5 col-lg-6 col-lg-6 ">
                    <div className="setting-input__cover mt-sm-2">
                      {hasBank ? (
                        <div className="has-bank">
                          <div className="bank-details d-flex align-items-center justify-content-between">
                            <div className="bank-title">Account name:</div>
                            <div className="bank-name">Zannu Julius</div>
                          </div>
                          <div className="bank-details d-flex align-items-center justify-content-between">
                            <div className="bank-title">Account number:</div>
                            <div className="bank-name">0059381944</div>
                          </div>
                          <div className="bank-details d-flex align-items-center justify-content-between">
                            <div className="bank-title">Bank name</div>
                            <div className="bank-name">Access Bank</div>
                          </div>
                          <div className="has-bank__cta d-flex align-items-center justify-content-between mt-3">
                            <div className="has-bank__btn">
                              <Button
                                text={"Delete"}
                                bg={color.white}
                                fontSize={"14px"}
                                border={`1px solid tomato`}
                                textColor={"tomato"}
                                height={"40px"}
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
                                height={"40px"}
                                fontSize={"14px"}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <input
                            type="number"
                            className="settings-input p-1"
                            placeholder="enter your account number"
                            style={{
                              border: `1px solid ${color.baseColor}`,
                            }}
                          />
                          <div
                            className="settings-btn mt-2"
                            onClick={() => setBankModal((prev) => true)}
                          >
                            <Button
                              text={"Add"}
                              bg={color.baseColor}
                              fontSize={"14px"}
                              textColor={color.white}
                              height={"40px"}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
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
                      />
                      <input
                        type="text"
                        className="settings-input p-1 mt-2"
                        placeholder="enter new password"
                        style={{
                          border: `1px solid ${color.baseColor}`,
                        }}
                      />
                      <div className="settings-btn mt-2">
                        <Button
                          text={"Update "}
                          bg={color.baseColor}
                          fontSize={"14px"}
                          textColor={color.white}
                          height={"40px"}
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
                          height={"40px"}
                          border={`1px solid ${color.baseColor}`}
                        />
                      </div>
                    </div>
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
