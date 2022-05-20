import Layout from "../../components/Layout";
import { color } from "../../constants/color";
import "./style.css";
import axios from "../../utlis/axios";
import { useEffect } from "react";
import { useState } from "react";

const Rate = () => {
  const [buy, setBuy] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
  });
  const [sell, setSell] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/site-data/price");
        setBuy({
          a: res.data.data.buy.a.price,
          b: res.data.data.buy.b.price,
          c: res.data.data.buy.c.price,
          d: res.data.data.buy.d.price,
          e: res.data.data.buy.e.price,
        });
        console.log(res.data.data.buy.a.price);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Layout>
      <div
        className="p-0"
        style={{
          margin: "100px auto 100px auto",
          width: "100%",
          height: "auto",
        }}
      >
        <div className="table-scroll">
          <div class="table-cover">
            <table className="">
              <thead className="thead">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">0 - 500</th>
                  <th scope="col">500 - 1,000</th>
                  <th scope="col">1,000 - 5,000</th>
                  <th scope="col">5,000 - 10,000</th>
                  <th scope="col">10,000 - more</th>
                </tr>
              </thead>
              <tbody>
                {/* etheruem */}
                <tr>
                  <th
                    scope="row"
                    style={{
                      color: color.darkColor,
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="img-rate d-flex align-items-center justify-content-center">
                        <img
                          src={
                            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                          }
                          alt={"bitcoin img"}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                      <div className="p-2">Bitcoin</div>
                    </div>
                  </th>
                  {/* range 1 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">
                          ₦ {buy.a.toLocaleString("en-us", { currency: "USD" })}
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 2 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">
                          ₦ {buy.b.toLocaleString("en-us", { currency: "USD" })}
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 3 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">
                          ₦ {buy.c.toLocaleString("en-us", { currency: "USD" })}
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 4 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">
                          ₦ {buy.d.toLocaleString("en-us", { currency: "USD" })}
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 5 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">
                          ₦ {buy.e.toLocaleString("en-us", { currency: "USD" })}
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* etheruem */}
                <tr>
                  <th
                    scope="row"
                    style={{
                      color: color.darkColor,
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="img-rate d-flex align-items-center justify-content-center">
                        <img
                          src={
                            "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                          }
                          alt={"bitcoin img"}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                      <div className="p-2">Ethereum</div>
                    </div>
                  </th>
                  {/* range 1 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 2 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 3 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 4 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 5 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* bnb */}
                <tr>
                  <th
                    scope="row"
                    style={{
                      color: color.darkColor,
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="img-rate d-flex align-items-center justify-content-center">
                        <img
                          src={
                            "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850"
                          }
                          alt={"bitcoin img"}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                      <div className="p-2">BNB</div>
                    </div>
                  </th>
                  {/* range 1 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 2 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 3 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 4 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 5 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* Tron */}
                <tr>
                  <th
                    scope="row"
                    style={{
                      color: color.darkColor,
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="img-rate d-flex align-items-center justify-content-center">
                        <img
                          src={
                            "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850"
                          }
                          alt={"bitcoin img"}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                      <div className="p-2">BNB</div>
                    </div>
                  </th>
                  {/* range 1 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 2 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 3 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 4 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 5 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* USDT */}
                <tr>
                  <th
                    scope="row"
                    style={{
                      color: color.darkColor,
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="img-rate d-flex align-items-center justify-content-center">
                        <img
                          src={
                            "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707"
                          }
                          alt={"bitcoin img"}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                      <div className="p-2">USDT</div>
                    </div>
                  </th>
                  {/* range 1 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 2 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 3 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 4 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                  {/* range 5 */}
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="p-2">
                        <div className="rate-t">Buying price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                      <div className="p-2">
                        <div className="rate-t">Selling price</div>
                        <div className="text-center">₦ 450</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center pt-3">
          <div
            className=" pt-2"
            style={{
              fontWeight: "510",
              color: color.darkColor,
            }}
          >
            Don't find your trading volume here.{" "}
            <span
              style={{
                fontSize: "18px",
              }}
            >
              ⚖️
            </span>
          </div>
          <div>
            Click on the{" "}
            <span
              className=" py-1"
              style={{
                color: color.baseColor,
              }}
            >
              Whatsapp
            </span>{" "}
            button at the bottom left for help on that
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rate;
