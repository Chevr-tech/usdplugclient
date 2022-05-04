import axios from "axios";
import { getToken } from "./token";

const instance = axios.create({
  baseURL: "https://api.usdplug.com/api",
});

instance.interceptors.request.use(async (config) => {
  try {
    const token = await getToken("usdplug_token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  } catch (err) {
    console.log(err, "line 14 axios response error");
  }
});

instance.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (err) => {
    if (err.response && err.response.status == 403) {
      // redirect to login page
      return (window.location.href = "/signin");
    }
    return Promise.reject(err);
  }
);

export default instance;
