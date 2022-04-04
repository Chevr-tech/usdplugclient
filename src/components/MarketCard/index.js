import { color } from "../../constants/color";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";
import LineCharts from "../LineChart";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const MarketCard = () => {
  let num = -0.24;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true&price_change_percentage=7d"
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
    <>
      <div className="marketcard-dskt-container">
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
          <div
            className="loader pt-3 "
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
            <div className="marketcard-dskt mb-3 " key={item.id}>
              <div className="marketcard-dskt__logo m-2">
                <img
                  src={item.image}
                  alt={item.id}
                  className="markercard-dskt__img"
                />
              </div>
              <div className="marketcard-dskt__right">
                <div className="marketcard-dskt__left">
                  <div className="marketcard-dskt__name">
                    {item.symbol.toUpperCase()}/USD
                  </div>
                  <div className="marketcard-dskt__price ">
                    ${item.currentPrice}
                  </div>
                </div>
                <div className="marketcard-dskt__cover-right ">
                  <div className="market-card__chart p-1">
                    <LineCharts
                      sparkLine={item.sparkLine}
                      percentagePriceChange={item.percentagePriceChange}
                    />
                  </div>
                  <div className="marketcard-dskt__bottom">
                    <div
                      className="marketcard-dskt-price__change "
                      style={{
                        color:
                          item.percentagePriceChange >= 0 ? "green" : "tomato",
                        textAlign: "right",
                      }}
                    >
                      {item.percentagePriceChange.toFixed(2)}%
                    </div>
                    <div className="marketcard-dskt__helper">8,432.24USD</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default MarketCard;
