import { Link } from "react-router-dom";
import { authNav, data } from "./data";
import "./style.css";
import { IoClose } from "react-icons/io5";
import { color } from "../../constants/color";
import { useEffect, useState } from "react";
import { getToken } from "../../utlis/token";

const MobileNav = ({ closeBtn }) => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        let user_token = await getToken("usdp_password");
        if (!token | (token === null)) {
          setToken((prev) => false);
          return;
        }
        setToken((prev) => true);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
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
                  fontSize: "18px",
                  textDecoration: "none",
                  borderBottom: "1px solid #eee",
                  margin: "10px 0",
                }}
                key={item.id}
              >
                {item.title}
              </Link>
            ))}

            {token
              ? authNav.map((item) => (
                  <Link
                    to={item.link}
                    className="mobile-link"
                    style={{
                      fontSize: "18px",
                      textDecoration: "none",
                      borderBottom: "1px solid #eee",
                      margin: "10px 0",
                    }}
                    key={item.id}
                  >
                    {item.title}
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
