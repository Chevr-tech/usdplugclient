import { Button } from "../../../components/Button";
import DashboardLayout from "../../../components/DashboardLayout";
import OrderTable from "../../../components/Tables/OrderTable";
import { color } from "../../../constants/color";
import "./style.css";
import { useState, useContext, useEffect } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "../../../utlis/axios";

const Orders = () => {
  const [hide, setHide] = useState(false);
  const [page, setPage] = useState(0);
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  toast.configure();
  useEffect(() => {
    (async () => {
      try {
        let res = await axios("/order/user");
        let num = 1;
        setData((prev) =>
          res.data.data.orders.map((item) => {
            return {
              num: num++,
              ...item,
            };
          })
        );
      } catch (err) {
        toast.error(err.response.data.message);
      }
    })();
  }, []);

  return (
    <DashboardLayout>
      <div
        className="container-fluid px-0 bg-white"
        style={{
          marginTop: "50px",
          marginBottom: "100px",
        }}
      >
        <div className="trade-top p-3">
          <div className="trade-content ml-2">
            <div className="trade-icon mr-2">
              <AiOutlineFieldTime size={16} color={color.iconColor} />
            </div>
            <div className="trade-history py-1 pr-3">Order History.</div>
          </div>
          <div className="right-btn__cover">
            <div className="refresh-btn">
              <Button
                text={"Refresh"}
                color={color.baseColor}
                bg={color.white}
                border={`1px solid ${color.baseColor}`}
                height={"33px"}
                status={false}
                loaderColor={color.baseColor}
              />
            </div>
            <div
              className="collapse-btn"
              onClick={() => setHide((prev) => !prev)}
            >
              <Button
                text={hide ? "Show Orders" : "Hide Orders"}
                color={color.baseColor}
                bg={color.white}
                border={`1px solid ${color.baseColor}`}
                height={"33px"}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: hide ? "none" : "block",
          }}
        >
          <OrderTable data={data} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Orders;
