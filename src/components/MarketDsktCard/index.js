import { color } from "../../constants/color";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import LineCharts from "../LineChart";
import { Skeleton } from "antd";

const MarketDsktCard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=7d"
        );
        setData((prev) => [
          ...res.data.map((item, _) => {
            return {
              id: item.id,
              symbol: item.symbol,
              image: item.image,
              currentPrice: item.current_price,
              percentagePriceChange: item.price_change_percentage_24h,
              sparkLine: item.sparkline_in_7d.price,
            };
          }),
        ]);
        setLoading(false);
        return;
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);
  return loading ? (
    <div className="mcc bg-white mx-2">fetching market data...</div>
  ) : (
    data.map((item, i) => (
      <div className="mcc bg-white mx-3" key={item.id}>
        <div className="mc-img">
          <img src={item.image} alt={item.id} className="mc-image" />
        </div>
        <div className="mmc-top d-flex align-items-center pt-3 justify-content-between px-4">
          <div className="ms">{item.id.toUpperCase()}</div>
          <div className="md">{item.symbol.toUpperCase()}</div>
        </div>
        <div
          className="mmc-pc"
          style={{
            color: item.percentagePriceChange < 0 ? "tomato" : "green",
            fontWeight: "600",
          }}
        >
          {item.percentagePriceChange.toFixed(2)}%
        </div>
        <div
          className="mmc-chart"
          style={{
            overflow: "hidden",
          }}
        >
          <LineCharts
            sparkLine={item.sparkLine}
            percentagePriceChange={item.percentagePriceChange}
          />
        </div>
        <div className="mmc-bottom pl-3">
          <div className="mmc-title">Current Price</div>
          <div className="mmc-value">${item.currentPrice}</div>
        </div>
      </div>
    ))
  );
};

export default MarketDsktCard;
