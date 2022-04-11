import Navbar from "../Navbar";
import SideNav from "../SideNav";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <SideNav />
        <div className="content container-fluid">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
