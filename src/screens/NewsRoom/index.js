import moment from "moment";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import "./style.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../../utlis/axios";

const Newsroom = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastPage, setLastPage] = useState(0);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(`/post?page=${page}&limit=${limit}`);
        console.log(res.data);
        setData((prev) => res.data.data.posts);
        setCount(count);
        setLimit(limit);
        setItemsPerPage(res.data.data.posts.length);
        setLastPage(Math.ceil(count / limit));
        setLoading((prev) => false);
      } catch (err) {
        toast.error(err.message);
      }
    })();
  }, []);
  return (
    <Layout>
      <div
        className="container-fluid "
        style={{
          marginTop: "60px",
          width: "100%",
          height: "auto",
        }}
      >
        <div className="news-cover">
          <div className="newsroom-top">
            <div className="newsroom-title text-center mt-2">News Room</div>
            <div className="newsrooms text-center">
              Stay updated with the lastest news on price, crypto related and
              more.
            </div>
          </div>
        </div>
        <div className="news-content d-flex align-items-start justify-content-evenly p-3">
          <div className="row align-items-start justify-content-evenly">
            {loading ? (
              <h6
                style={{
                  margin: "100px 0",
                  color: "#333333",
                }}
              >
                Fetching blog data...
              </h6>
            ) : !data.length ? (
              <h6
                style={{
                  margin: "100px 0",
                  color: "#333333",
                }}
              >
                No articles uploaded yet.
              </h6>
            ) : (
              data.map((item, i) => (
                <div
                  className="col-sm-5 col-md-5 col-lg-5 col-xl-5 "
                  key={item._id}
                >
                  <Link
                    to={`/newsroom/${item.permalink}`}
                    className="newcard my-3"
                  >
                    <div className="news-img__cover">
                      <img
                        src={`https://api.usdplug.com/api/${item.image}`}
                        alt=""
                        className="news-img"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <div className="new-author__image-cover">
                        <img src="" alt="" className="news-author__image" />
                      </div>
                    </div>
                    <div className="news-body p-2">
                      <div className="news-time">
                        {moment(item.date).format("MMM Do YY")}
                      </div>
                      <div className="news-top">
                        <div className="news-caption">{item.caption}</div>
                        <div className="news-desc">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${item.content.substring(0, 70)}...`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="news-author">~ {item.author.name}</div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
        <div className={count > 10 ? "pagination active" : "pagination"}>
          <button
            className="pagination-btn"
            style={{}}
            disabled={page > 1 ? false : true}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <button
            className="pagination-btn"
            disabled={page === lastPage ? true : false}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Newsroom;

// {
/* <div className="container-fluid blog-cover">
<div className="newsroom-top">
  <div className="newsroom-title text-center">News Room</div>
  <div className="newsrooms text-center">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
    perferendis.
  </div>
</div>
<div
  className="container"
  style={{
    width: "100%",
    height: "100px",
    border: "1px solid green",
  }}
></div>
</div> */
// }

// {
/* <div className="news-content">
<div className="row">
  <div className="col-sm-11 col-md-5 col-lg-5 col-xl-5">
    <div className="news-img__cover">
      <img src="" alt="" className="news-img" />
      <div className="new-author__image-cover">
        <img src="" alt="" className="news-author__image" />
      </div>
    </div>
    <div className="news-top">
      <div className="news-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fuga ab possimus voluptas aut assumenda earum omnis
        obcaecati facilis cum deleniti!...
      </div>
    </div>
    <div className="news-bottom">
      <div className="news-author">~ Admin</div>
      <div className="news-time">
        // {/* {moment(Date.now().format("YY DD MM"))} */
// }
//       </div>
//     </div>
//   </div>
// </div>
// </div>
