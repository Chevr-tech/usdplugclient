import DashboardLayout from "../../../components/DashboardLayout";
import "./style.css";
import { RiSendPlaneFill, RiExchangeDollarFill } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import { color } from "../../../constants/color";
import OrderTable from "../../../components/Tables/OrderTable/";

const Home = () => {
  return (
    <DashboardLayout>
      <div className="container-fluid mt-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="dashboard-card border border-primary">
                    <div className="transaction-title"></div>
                    <div className="transaction-value"></div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="dashboard-card border border-primary">
                    <div className="transaction-title"></div>
                    <div className="transaction-value"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-lg-6">
            <div className="info-admin border border-primary"></div>
          </div>
        </div>
      </div>

      <div className="containter mt-3 bg-white p-3 mb-5">
        <div className="text-center">Trade</div>
        <div className="container mt-3">
          <div className="row align-items-center justify-content-center">
            <div className="trade-btn__cover px-2 ">
              <div className="trade-btn px-2 ">
                <RiSendPlaneFill size={16} color={color.white} />
              </div>
              <div className="trade-title">Send</div>
            </div>
            <div className="trade-btn__cover px-2 mx-3">
              <div className="trade-btn px-2">
                <RiSendPlaneFill size={16} color={color.white} />
              </div>
              <div className="trade-title">Recieve</div>
            </div>
            <div className="trade-btn__cover px-2 ">
              <div className="trade-btn px-2">
                <RiExchangeDollarFill size={16} color={color.white} />
              </div>
              <div className="trade-title">Exchange</div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 m-0">
          <div className="trade-top">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="trade-icon mr-2">
                <AiOutlineFieldTime size={18} color={color.iconColor} />
              </div>
              <div className="trade-history py-1 pr-3">Trade History.</div>
            </div>
          </div>
          <OrderTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
