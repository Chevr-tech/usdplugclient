import DashboardLayout from "../../../components/DashboardLayout";
import "./style.css";
import { ImUser } from "react-icons/im";
import { color } from "../../../constants/color";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { MdLocationSearching } from "react-icons/md";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../../../utlis/axios";
import { getToken } from "../../../utlis/token";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accountDetails, setAccountDetails] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let userId = await getToken("usdplug_userId");
        let res = await axios.get(`/profile?user=${userId}`);
        console.log(res.data);
        if (res.data.status === 200) {
          setEmail((prev) => res.data.data.email);
          setName((prev) => res.data.data.name);
          setPhone((prev) => res.data.data.phone);
        }
      } catch (err) {
        toast.error(err.message);
      }
    })();
  }, []);
  return (
    <DashboardLayout>
      <div className="container-fluid bg-white pc py-3">
        <div className="row flex-column  align-items-center">
          <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6 ">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="p-icon d-flex align-items-center justify-content-center">
                <div className="p-name">
                  {/* {name[0].toUpperCase() + name[1].toUpperCase()} */}
                </div>
              </div>
              <div className="p-greetings">Hello !!! 👋</div>
              <div className="p-fname">{name}</div>
            </div>
            {/* Full name */}
            <div className="p-cover  p-2 my-3">
              <div className="p-title">Full name</div>
              <div className="p-value__c d-flex pt-2 align-items-center">
                <div className="p-v__icon">
                  <ImUser size={18} color={color.darkColor} />
                </div>
                <div className="p-value">{name}</div>
              </div>
            </div>
            {/* Email  */}
            <div className="p-cover  p-2 my-3">
              <div className="p-title">Email</div>
              <div className="p-value__c d-flex pt-2 align-items-center">
                <div className="p-v__icon">
                  <MdEmail size={18} color={color.darkColor} />
                </div>
                <div className="p-value">{email}</div>
              </div>
            </div>
            {/* Phone number  */}
            <div className="p-cover  p-2 my-3">
              <div className="p-title">Phone</div>
              <div className="p-value__c d-flex pt-2 align-items-center">
                <div className="p-v__icon">
                  <BsTelephoneFill size={18} color={color.darkColor} />
                </div>
                <div className="p-value">{phone}</div>
              </div>
            </div>
            <div className="p-cover  p-2 my-3 d-none">
              <div className="p-title">Address</div>
              <div className="p-value__c d-flex pt-2 align-items-center">
                <div className="p-v__icon">
                  <IoHome size={18} color={color.darkColor} />
                </div>
                <textarea
                  className="p-value address p-2"
                  value={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, assumenda?`}
                ></textarea>
              </div>
            </div>
            <div className="container-fluid p-0 m-0 d-none">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <div className="p-cover p-2 my-3">
                    <div className="p-title">Country</div>
                    <div className="p-value__c d-flex pt-2 align-items-center">
                      <div className="p-v__icon">
                        <GiWorld size={18} color={color.darkColor} />
                      </div>
                      <div className="p-value">Nigeria</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <div className="p-cover p-2 my-3">
                    <div className="p-title">State</div>
                    <div className="p-value__c d-flex pt-2 align-items-center">
                      <div className="p-v__icon">
                        <MdLocationSearching
                          size={18}
                          color={color.darkColor}
                        />
                      </div>
                      <div className="p-value">Lagos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
