import TopNav from "../TopNav";
import SideNav from "../SideNav";
import "./style.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <SideNav />
      <div className="right-container container-fluid p-0">
        <TopNav />
        <div className="container-fluid px-2 page-content">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
