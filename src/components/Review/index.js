import { data } from "./data";
import "./style.css";

const Reviews = () => {
  return (
    <div className="container mt-5 review-cover p-3">
      <div className="reviews-title text-center">
        Trust is a reputation we have built over time
      </div>
      <div className="reviews-caption text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        impedit.
      </div>
      <div className="review-content mt-5">
        {data.map((item, _) => (
          <div className="review-card m-2" key={item.id}>
            <div
              className="review-image_bg"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <div className="review-image__cover">
              <img
                src={`${item.image}`}
                alt=""
                style={{
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                  width: "50px",
                  borderRadius: " 50%",
                  border: "2px solid #fff",
                  height: "50px",
                  top: "-20px",
                  left: " 50%",
                  boxShadow: "0 2px 3px #eeeeeede",
                  transform: "translateX(-50%)",
                }}
                className="review-image"
              />
            </div>
            <div className="review-body p-2">
              <div className="review-name">
                {item.name[0].toUpperCase() + item.name.substring(1)}
              </div>
              <div className="review-desc py-1">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
