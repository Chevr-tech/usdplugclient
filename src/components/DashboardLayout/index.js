import TopNav from "../TopNav";
import SideNav from "../SideNav";
import "./style.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className={"content"}>
      <TopNav />
      <div className="content-container">
        <SideNav />
        <div className="content container-fluid">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
