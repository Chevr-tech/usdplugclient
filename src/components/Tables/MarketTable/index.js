import { useEffect, useState } from "react";
import "./style.css";
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  Sort,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import axios from "axios";
import { color } from "../../../constants/color";
import LineCharts from "../../LineChart";

const MarketTable = () => {
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
    <div className="market-chart">
      {loading ? (
        <div> fetching market data</div>
      ) : (
        <>
          <GridComponent
            dataSource={data}
            allowPaging={true}
            pageSettings={{
              pageSize: 10,
            }}
            toolbar={["Search"]}
            allowSorting={true}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="image"
                width="50"
                textAlign="Center"
                headerText="Image"
                headerTextAlign="Center"
                template={(item) => {
                  return (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="coin-img">
                        <img src={item?.image} alt="" className="coin-image" />
                      </div>
                    </div>
                  );
                }}
              />
              <ColumnDirective
                field="symbol"
                width="100"
                textAlign="Center"
                headerText="Symbol"
                headerTextAlign="Center"
                template={(item) => {
                  return (
                    <div className="coin-name__cover">
                      <div className="coin-name">
                        {item?.id[0].toUpperCase() + item?.id.substring(1)}
                      </div>
                      <div className="coin-name pl-2">
                        {item?.symbol.toUpperCase()}
                      </div>
                    </div>
                  );
                }}
              />

              <ColumnDirective
                field="currentPrice"
                width="100"
                textAlign="Center"
                headerTextAlign="Center"
                headerText="Price"
                template={(item) => {
                  return (
                    <div className="price-cover">
                      <div className="price-value">
                        {item?.currentPrice.toLocaleString("en-US", {
                          currency: "USD",
                        })}
                      </div>
                    </div>
                  );
                }}
              />
              <ColumnDirective
                field="percentagePriceChange"
                textAlign="Center"
                width="100"
                headerText="%Price Change"
                headerTextAlign="Center"
                template={(item) => {
                  return (
                    <div className="percentage">
                      <div
                        className="percentage-value"
                        style={{
                          color:
                            item?.percentagePriceChange < 0
                              ? "tomato"
                              : color.baseColor,
                        }}
                      >
                        {item?.percentagePriceChange.toFixed(2)}%
                      </div>
                    </div>
                  );
                }}
              />

              <ColumnDirective
                field="sparkline"
                width="100"
                format="C2"
                textAlign="Center"
                headerText="Chart"
                template={(item) => {
                  return (
                    <div className="m-chart">
                      <div className="m-chart__value">
                        <LineCharts
                          sparkLine={item?.sparkLine}
                          percentagePriceChange={item?.percentagePriceChange}
                        />
                      </div>
                    </div>
                  );
                }}
              />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group, Search, Toolbar]} />
          </GridComponent>
        </>
      )}
    </div>
  );
};

export default MarketTable;
