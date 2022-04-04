import { color } from "../../constants/color";
import { Button } from "../Button";
import "./style.css";
import { motion } from "framer-motion";
import CloseBtn from "../CloseBtn";
import { useState } from "react";

const UpdateBank = ({ closeBtn }) => {
  const [res, setRes] = useState(true);
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
        <div className="ub bg-white p-3">
          <CloseBtn setCloseBtn={closeBtn} />
          <div className="ub-title">Update details</div>
          {res ? (
            <>
              <div
                className="ub-group my-2"
                style={{
                  border: `1px solid ${color.baseColor}`,
                }}
              >
                <input type="number" name="" id="" className="ub-form" />
              </div>
              <div
                className="ub-btn"
                style={{
                  width: "100%",
                }}
                onClick={() => setRes(false)}
              >
                <Button
                  text={"Submit"}
                  bg={color.baseColor}
                  fontSize={"12px"}
                  textColor={color.white}
                  status={false}
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
                  <div className="cbn-v">Zannu Julius </div>
                </div>
                <div className="cbn">
                  <div className="cbn-t">Accout number:</div>
                  <div className="cbn-v">0059381944 </div>
                </div>
                <div className="cbn">
                  <div className="cbn-t">Bank name:</div>
                  <div className="cbn-v">Access bank </div>
                </div>
              </div>
              <div className="cbd-helper text-center py-2">
                Is this you bank details ?
              </div>
              <div className="ub-btn__cover">
                <div className="ub-btn" onClick={() => setRes(true)}>
                  <Button
                    text={"Not mine"}
                    bg={color.white}
                    fontSize={"12px"}
                    height={"33px"}
                    textColor={"tomato"}
                    border={`1px solid tomato`}
                  />
                </div>
                <div className="ub-btn" onClick={() => closeBtn(false)}>
                  <Button
                    text={"Yes, continue"}
                    bg={color.baseColor}
                    fontSize={"12px"}
                    textColor={color.white}
                    status={false}
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
