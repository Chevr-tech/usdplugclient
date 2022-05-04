import React, { createContext } from "react";
import { toast } from "react-toastify";
import axios from "../utlis/axios";

export const OrderContext = createContext();

const OrderReducer = () => {
  let token, user;
  toast.configure();
  return {
    // get all Order
    getAllOrders: async (page, type) => {
      try {
        let res = await axios.get(`/order/user?page=${page}&status=${type}`);
        return res;
      } catch (err) {
        toast.error(err.message);
        return;
      }
    },
  };
};

export const OrderProvider = ({ children }) => {
  return (
    <OrderContext.Provider value={OrderReducer()}>
      {children}
    </OrderContext.Provider>
  );
};
