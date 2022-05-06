import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../../components/Button";
import { color } from "../../../constants/color";
import "./style.css";
import { toast } from "react-toastify";
import axios from "../../../utlis/axios";
import { getToken } from "../../../utlis/token";
import { useEffect } from "react";

const EmailVerfication = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num5, setNum5] = useState("");
  const [num6, setNum6] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    resend: false,
    confirm: false,
  });

  useEffect(() => {
    (async () => {
      try {
        let userId = await getToken("usdplug_userId");
        let res = await axios.get(`/confirmation?userId=${userId}&type=email`);
        toast.success(res.data.message, {
          toastId: "48982eficn",
        });
        // console.log(res.data);
        // return (window.location.pathname = "/dashboard");
      } catch (err) {
        console.log(err.message);
        if (err.response) {
          toast.error(err.response.data.message);
          return;
        }
        if (err.message.toLowerCase() === "network error") {
          toast.error(err.message, {
            toastId: "efwevidv898",
          });
          return;
        }
      }
    })();
  }, []);
  const handleFp = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  toast.configure();

  const handleSubmit = async () => {
    try {
      let userId = await getToken("usdplug_userId");
      setLoading({ confirm: true });
      if (!num1 || !num2 || !num3 || !num4 || !num5 || !num6) {
        toast.warn("All value are required");
        setLoading({ confirm: false });
        return;
      }
      let value = [num1, num2, num3, num4, num5, num6];
      let otp = String(parseInt(value.join("")));
      let res = await axios.post("/confirmation", {
        type: "email",
        userId: userId,
        code: otp,
      });
      setLoading({ confirm: false });
      return (window.location.pathname = "/dashboard");
    } catch (err) {
      if (err.response.data.status === 400) {
        setLoading({ confirm: false });
        toast.error("Invalid code. please try again.", {
          toastId: "32899diwi",
        });
        return;
      }
      if (err.response.data.status === 300) {
        setLoading({ confirm: false });
        toast.error(err.response.data.message, {
          toastId: "32899diwi",
        });
        return (window.location.pathname = "/emailverification");
      }
      if (err.message) {
        toast.error(err.message, {
          toastId: "32898efin",
        });
        setLoading({ confirm: false });
      }
    }
  };

  const handleResendCode = async () => {
    try {
      setLoading({ resend: true });
      let userId = await getToken("usdplug_userId");
      let email = await getToken("usdplug_email");
      let res = await axios.get(`/confirmation?userId=${userId}&type="email"`);

      toast.success("A new code has been sent to your email address.");
      setLoading({ resend: false });
    } catch (err) {
      if (err.message === "Network Error") {
        toast.error(err.message);
        return;
      }
      toast.error(err.response.data.message);
      setLoading({ resend: false });
      return;
    }
  };

  return (
    <div className="auth-form__cover">
      <div className="form-signup  pt-3 px-3 pb-3">
        <div className="auth-caption text-center">
          Email Verfication <span>📧</span>
        </div>
        <div className="form-we text-center mt-2">
          Enter the Verfication code sent to your email address
        </div>

        <div className="row d-flex align-items-center justify-content-between">
          <div className="form-group-ev mt-2">
            <input
              type="number"
              className="form-input"
              id="email"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength="1"
              style={{
                height: "45px",
              }}
              value={num1}
              onChange={(e) => {
                setNum1(e.target.value);
              }}
            />
          </div>
          <div className="form-group-ev mt-2">
            <input
              type="number"
              className="form-input"
              id="email"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength="1"
              style={{
                height: "45px",
              }}
              value={num2}
              onChange={(e) => {
                setNum2(e.target.value);
              }}
            />
          </div>
          <div className="form-group-ev mt-2">
            <input
              type="number"
              className="form-input"
              id="email"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength="1"
              style={{
                height: "45px",
              }}
              value={num3}
              onChange={(e) => {
                setNum3(e.target.value);
              }}
            />
          </div>
          <div className="form-group-ev mt-2">
            <input
              type="number"
              className="form-input"
              id="email"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength="1"
              style={{
                height: "45px",
              }}
              value={num4}
              onChange={(e) => {
                setNum4(e.target.value);
              }}
            />
          </div>
          <div className="form-group-ev mt-2">
            <input
              type="number"
              className="form-input"
              id="email"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength="1"
              style={{
                height: "45px",
              }}
              value={num5}
              onChange={(e) => {
                setNum5(e.target.value);
              }}
            />
          </div>
          <div className="form-group-ev mt-2">
            <input
              type="number"
              className="form-input"
              id="email"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength="1"
              style={{
                height: "45px",
              }}
              value={num6}
              onChange={(e) => {
                setNum6(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-btn mt-3" onClick={() => handleSubmit()}>
          <Button
            text={"Continue"}
            bg={color.baseColor}
            height={"40px"}
            textColor={color.white}
            fontSize={"15px"}
            loaderColor={color.white}
            status={loading.confirm}
          />
        </div>
        <div className="form-hint text-center mt-1">
          Didn't get the code click on the button to get a new code ?{" "}
          <div className="auth-link" onClick={() => handleResendCode()}>
            Resend code
          </div>
        </div>
        <div className="form-mail text-center d-block">
          <a href="mailto:support@usdplug.com">support@usdplug.com</a>
        </div>
      </div>
    </div>
  );
};

export default EmailVerfication;
