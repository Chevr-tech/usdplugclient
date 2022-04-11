import { Link } from "react-router-dom";
import { color } from "../../constants/color";
import "./style.css";

const CardTop = ({ link, title }) => {
  return (
    <div className="card-top mb-2">
      <div className="card-title__cover">
        <div className="card-title">{title}</div>
      </div>
      {/* <Link
        to={`/${link}`}
        className="card-more__btn"
        style={{
          border: `1px solid ${color.baseColor}`,
        }}
      >
        view more
      </Link> */}
    </div>
  );
};

export default CardTop;
