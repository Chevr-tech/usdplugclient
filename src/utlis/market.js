import axios from "axios";

const marketUrl = axios.create({
  baseURL: "https://api.coingecko.com/api/",
});

export default marketUrl;
