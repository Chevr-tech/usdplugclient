import Layout from "../../../components/Layout";
import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { color } from "../../../constants/color";
import { Link } from "react-router-dom";
import moment from "moment";
import "./style.css";
const NewsDetails = () => {
  return (
    <Layout>
      <div className="container-fluid news-details__cover ">
        <div className="row align-items-start justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 ">
            <div className="news-title text-center">Lorem ipsum dolor sit.</div>
            <div className="news-social__cover">
              {Array.from(Array(3)).map((item, i) => (
                <Link
                  to={{
                    pathname: "/https://www.facebook.com",
                  }}
                  target={"_blank"}
                  key={i}
                  className="news-link"
                >
                  <FaFacebook
                    size={18}
                    // color={color.baseColor}
                    style={{
                      color: "#3f3f3f",
                    }}
                  />
                </Link>
              ))}
            </div>
            <div className="news-image__cover">
              <img
                src={`https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80`}
                alt=""
                className="news-image"
              />
            </div>
            <div className="news-time mt-4">
              {moment(Date.now()).format("lll")}
            </div>
            <div className="news-desc ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              aliquid architecto perferendis deleniti provident ea? Dolor
              tempore tempora praesentium obcaecati itaque? Est maxime dolorum,
              odio placeat, quis excepturi repellendus voluptate itaque
              blanditiis veritatis impedit recusandae nesciunt, temporibus
              autem? Doloribus dicta deleniti eos, dolorem ipsa voluptatum ab
              quibusdam quod ratione reiciendis nemo ipsum soluta adipisci
              doloremque dolores quaerat eaque, quam quos. Consequuntur culpa
              deserunt atque maxime voluptate! Mollitia numquam alias sint
              aliquam est labore consequatur? Unde cumque nemo rerum, amet
              molestias magnam eius repudiandae possimus sequi deleniti vitae
              dolor aperiam perferendis fuga hic architecto. Iusto est quas
              impedit, debitis quae ipsam.
            </div>
            <div className="news-author">~ Admin</div>
          </div>
          <div className="col-sm-10 col-md-7 col-lg-6 col-xl-4 ">
            <div className="related-content">
              <div className="related-title">Related News</div>
              <div className="related-cover">
                {Array.from(Array(3)).map((item, i) => (
                  <Link
                    to="/newsroom/32523"
                    className="related-card my-3"
                    key={i}
                  >
                    <div className="raleted-image__cover">
                      <img
                        src={`https://images.unsplash.com/photo-1638913971873-bcef634bdcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGJsb2NrY2hhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60`}
                        alt=""
                        className="related-img"
                      />
                    </div>
                    <div className="related-content">
                      <div className="related-card__title">
                        Lorem ipsum dolor, sit amet cons...
                      </div>
                      <div className="related-card__desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quos cum temporibus quisquam reiciendis...
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetails;
