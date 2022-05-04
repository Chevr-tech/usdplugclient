import Layout from "../../../components/Layout";
import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { color } from "../../../constants/color";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "../../../utlis/axios";
import "./style.css";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const NewsDetails = () => {
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [data, setData] = useState({});
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState(0);
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(`/post/permalink/${id}`);
        setData((prev) => res.data.data);
        setLoading((prev) => false);
      } catch (err) {
        toast.error(err.message);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(`/post/?page=1&limit=3`);
        console.log(res.data.data.posts);
        setPost((prev) => res.data.data.posts);
        setRelatedLoading((prev) => false);
      } catch (err) {
        toast.error(err.message);
      }
    })();
  }, []);
  return (
    <Layout>
      {loading ? (
        <h6
          style={{
            margin: "100px 0",
            color: "#333333",
            textAlign: "center",
          }}
        >
          Fetching blog details...
        </h6>
      ) : (
        <div className="container-fluid news-details__cover ">
          <div className="row align-items-start justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 ">
              <div className="news-title text-center">
                Lorem ipsum dolor sit.
              </div>
              <div className="news-social__cover">
                <Link
                  to={{
                    pathname: `https://www.facebook.com/sharer/sharer.php?u=https://api.usdplug.com/api/newsroom/${data.permalink}`,
                  }}
                  target={"_blank"}
                  className="news-link "
                >
                  <FaFacebook
                    size={27}
                    // color={color.baseColor}
                    style={{
                      color: "dodgerblue",
                    }}
                  />
                </Link>
                <Link
                  to={{
                    pathname: `whatsapp://send?text=https://api.usdplug.com/api/newsroom/${data.permalink}`,
                  }}
                  target={"_blank"}
                  className="news-link"
                >
                  <RiWhatsappFill
                    size={30}
                    // color={color.baseColor}
                    style={{
                      color: color.baseColor,
                    }}
                  />
                </Link>
              </div>
              <div className="news-image__cover">
                <img
                  src={`https://api.usdplug.com/api/${data.image}`}
                  alt=""
                  className="news-image"
                />
              </div>
              <div className="news-time mt-4">
                {moment(Date.now()).format("ll")}
              </div>
              <div className="news-desc mt-1">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${data.content}`,
                  }}
                />
              </div>
              <div className="news-author pt-2">~ {data.author.name}</div>
            </div>
            <div className="col-sm-10 col-md-7 col-lg-6 col-xl-4 ">
              <div className="related-content">
                <div className="related-title">Related News</div>
                <div className="related-cover">
                  {relatedLoading ? (
                    <h6
                      style={{
                        margin: "100px 0",
                        color: "#333333",
                        textAlign: "center",
                      }}
                    >
                      Fetching related blog post...
                    </h6>
                  ) : (
                    post.map((item, i) => (
                      <Link
                        to={`/newsroom/${post.permalink}`}
                        className="related-card my-3"
                        key={i}
                      >
                        <div className="raleted-image__cover">
                          <img
                            src={`https://api.usdplug.com/api/${item.image}`}
                            alt=""
                            className="related-img"
                          />
                        </div>
                        <div className="related-content">
                          <div className="related-card__title">
                            {item.caption.substring(0, 10)}
                          </div>
                          <div className="related-card__desc">
                            {`${item.content.substring(0, 40)}...`}
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default NewsDetails;
