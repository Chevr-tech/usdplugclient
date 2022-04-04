import { useEffect } from "react";
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
  return <div className="market-chart"></div>;
};

export default MarketTable;
