import { Link } from "react-router-dom";
import { data } from "./data";
import "./style.css";
import { IoClose } from "react-icons/io5";
import { color } from "../../constants/color";

const MobileNav = ({ closeBtn }) => {
  return (
    <>
      <div className="backdrop" onClick={() => closeBtn(false)}>
        <div className="mobile-nav">
          <div className={"close-btn__cover"} onClick={() => closeBtn(false)}>
            <IoClose size={20} color={color.darkColor} />
          </div>
          <div className="mobile-links__cover">
            {data.map((item, _) => (
              <Link
                to={item.link}
                className="mobile-link"
                style={{
                  textDecoration: "none",
                }}
                key={item.id}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
