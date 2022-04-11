import DashboardLayout from "../../../components/DashboardLayout";
import "./style.css";
import { ImUser } from "react-icons/im";
import { color } from "../../../constants/color";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { MdLocationSearching } from "react-icons/md";

const Profile = () => {
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
                <div className="p-name">JZ</div>
              </div>
              <div className="p-greetings">Hello !!! 👋</div>
              <div className="p-fname">Zannu Julius</div>
            </div>
            {/* Full name */}
            <div className="p-cover  p-2 my-3">
              <div className="p-title">Full name</div>
              <div className="p-value__c d-flex pt-2 align-items-center">
                <div className="p-v__icon">
                  <ImUser size={18} color={color.darkColor} />
                </div>
                <div className="p-value">Zannu Julius</div>
              </div>
            </div>
            {/* Email  */}
            <div className="p-cover  p-2 my-3">
              <div className="p-title">Email</div>
              <div className="p-value__c d-flex pt-2 align-items-center">
                <div className="p-v__icon">
                  <MdEmail size={18} color={color.darkColor} />
                </div>
                <div className="p-value">zannujulius14@gmail.com</div>
              </div>
            </div>
            {/* Phone number  */}
            <div className="p-cover  p-2 my-3">
              <div className="p-title">Phone</div>
              <div className="p-value__c d-flex pt-2 align-items-center">
                <div className="p-v__icon">
                  <BsTelephoneFill size={18} color={color.darkColor} />
                </div>
                <div className="p-value">0810281218</div>
              </div>
            </div>
            <div className="p-cover  p-2 my-3">
              <div className="p-title">Address</div>
              <div className="p-value__c d-flex pt-2 align-items-center">
                <div className="p-v__icon">
                  <IoHome size={18} color={color.darkColor} />
                </div>
                <textarea className="p-value address p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, assumenda?
                </textarea>
              </div>
            </div>
            <div className="container-fluid p-0 m-0">
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
