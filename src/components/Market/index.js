import "./style.css";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
import axios from "axios";
import { color } from "../../constants/color";
import LineCharts from "../LineChart";

const Market = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const [error, setError] = useState(true);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

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
  return (
    <div className="market-cover container ">
      {/* <div className="bg-fade"></div> */}
      <div className="market-caption text-center">
        Cryptocurrency Price{" "}
        <span
          style={{
            fontSize: "50px",
            position: "absolute",
            top: "-20px"
          }}
        >
          🚀
        </span>
      </div>
      <div className="market-title text-center">
        View and Trade your preferred crypto currency
      </div>
      <div className="market-content__cover ">
        {error && (
          <div
            className="error"
            style={{
              color: "tomato",
            }}
          >
            {error}
          </div>
        )}
        {loading ? (
          <div className="loader pt-3">
            <HashLoader
              color={color.baseColor}
              loading={loading}
              css={override}
              height={5}
              size={25}
            />
          </div>
        ) : (
          data.map((item, i) => (
            <div className="market-card" key={item.id}>
              <div className="market-content">
                <div className="market-top d-flex align-items-center justify-content-between">
                  <div className="d-flex align-item-center">
                    <div className="market-image__cover d-flex align-items-center justify-content-center">
                      <img src={item.image} alt="" className="market-img" />
                    </div>
                    <div className="market-info__cover ">
                      <div className="market-name">
                        {item.symbol.toUpperCase()}
                      </div>
                      <div className="market-price text-center">
                        ${item.currentPrice}
                      </div>
                    </div>
                  </div>
                  <div
                    className="market-price text-center"
                    style={{
                      color:
                        item.percentagePriceChange >= 0 ? "green" : "tomato",
                    }}
                  >
                    {item.percentagePriceChange.toFixed(2)}%
                  </div>
                </div>
                <div className="market-chart pb-4">
                  <LineCharts
                    sparkLine={item.sparkLine}
                    percentagePriceChange={item.percentagePriceChange}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Market;
