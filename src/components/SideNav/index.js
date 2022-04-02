import { Link } from "react-router-dom";
import { data } from "./data";
import "./style.css";

const SideNav = () => {
  return (
    <div className="sidenav p-3">
      <div className="sidenav-title"></div>
      <div className="sidenav-items">
        {data.map((item, _) => (
          <Link
            to={`${item.link}`}
            className="sidnav-link d-block d-flex  py-1 "
            key={item.id}
          >
            <div className="sidenav-link__icon-cover pt-2 pr-3 ">
              <div dangerouslySetInnerHTML={{ __html: item.icon }} style={{}} />
            </div>
            <div className="sidenav-link ">{item.page}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
