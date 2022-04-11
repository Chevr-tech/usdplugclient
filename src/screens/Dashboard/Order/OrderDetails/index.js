import DashboardLayout from "../../../../components/DashboardLayout";
import "./style.css";
import { IoCopyOutline } from "react-icons/io5";
import { color } from "../../../../constants/color";
import moment from "moment";
import { BsArrowUpRight } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";

const OrderDetails = () => {
  return (
    <DashboardLayout>
      <div className="container-fluid bg-white odd py-5">
        <div className="row align-items-center justify-content-center px-2">
          <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6 border odc d-flex-column">
            <div className="od-top pt-2">
              <div className="od-caption">Order Type</div>
              <div className="d-flex">
                <div className="od-title">Sell Order</div>
                {/* <div className="od-type__icon d-flex pl-3 align-items-center justify-content-center">
                  <BsArrowUpRight size={16} color={"tomato"} />
                </div> */}
              </div>
            </div>
            <div className="od-id__cover d-flex py-2 px-2 d-none">
              <div className="od-id">cjsdnk94nejk....dc78hi3 fjk3ef</div>
              <div className="od-icon__cover">
                <IoCopyOutline size={18} color={color.baseColor} />
              </div>
            </div>
            <div className="od-details">
              <div className="od-status__c d-flex align-items-center justify-content-center my-4">
                <IoCheckmarkDone size={16} color={color.baseColor} />
                <div
                  style={{
                    color: color.baseColor,
                  }}
                >
                  Approved
                </div>
              </div>

              <div className="od-t date text-center py-2 my-2">
                {moment(Date.now()).format("lll")}
              </div>

              {/* Rate */}
              <div className="od-en pt-2">
                <div className="od-tt">Rate: </div>
                <div className="od-v pb-3">₦500</div>
              </div>
              {/* Quantity */}
              <div className="od-en pt-2">
                <div className="od-tt">Quantity: </div>
                <div className="od-v pb-3">300</div>
              </div>
              {/* token */}
              <div className="od-en pt-2">
                <div className="od-tt">Token: </div>
                <div className="od-v pb-3">BNB</div>
              </div>

              <div className="od-t date text-center py-2 mt-3 text-center">
                Receiving wallet address
              </div>
              <div className="od-address">
                <div className="od-ad-cover d-flex align-items-center py-2 px-2 my-3 justify-content-center">
                  <div className="od-id">cjsdnk94nejk....dc78hi3 fjk3ef</div>
                </div>
              </div>
              <div className="od-t date text-center py-2 mt-1 text-center">
                Bank Details
              </div>
              <div className="od-en pt-2">
                <div className="od-tt">Account name: </div>
                <div className="od-v pb-3">Zannu Julius</div>
              </div>
              <div className="od-en pt-2">
                <div className="od-tt">Account number : </div>
                <div className="od-v pb-3">0059381944</div>
              </div>
              <div className="od-en pt-2">
                <div className="od-tt">Bank name: </div>
                <div className="od-v pb-3">Access Bank</div>
              </div>
            </div>
            <div className="od-i mt-5">
              <div className="od-i__t text-center">
                Having issues with your order ?.
              </div>
              <div className="od-i__caption text-center py-1">
                Copy the order number below and contect support to get it
                resolved.
              </div>
              <div className="od-n my-2 ">
                <div className="od-n__t text-center">Order number:</div>
                <div className="od-n__v text-center">
                  csjwdjkwn...evjdvjdvj:{" "}
                  <span className="od-icon__cover">
                    <IoCopyOutline size={14} color={color.baseColor} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OrderDetails;
