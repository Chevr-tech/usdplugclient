import moment from "moment";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import "./style.css";

const Newsroom = () => {
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
            <div className="newsroom-title text-center">News Room</div>
            <div className="newsrooms text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              perferendis.
            </div>
          </div>
        </div>
        <div className="news-content d-flex align-items-start justify-content-evenly p-3">
          <div className="row align-items-start justify-content-evenly">
            {Array.from(Array(10)).map((item, i) => (
              <div className="col-sm-5 col-md-5 col-lg-4 col-xl-4 " key={i}>
                <Link to="/newsroom/235235" className="newcard my-3">
                  <div className="news-img__cover">
                    <img
                      src={`https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80`}
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
                  <div className="news-body p-2 mt-3">
                    <div className="news-time ">
                      {moment(Date.now()).format("lll")}
                    </div>
                    <div className="news-top">
                      <div className="news-caption">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <div className="news-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga ab possimus voluptas aut assumen...
                      </div>
                    </div>
                    <div className="news-author">~ Admin</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <div className="pagination-btn">Prev</div>
          <div className="pagination-btn">Next</div>
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
