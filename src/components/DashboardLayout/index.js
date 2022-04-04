import TopNav from "../TopNav";
import SideNav from "../SideNav";
import "./style.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <SideNav />
      <div className="right-container container-fluid p-0">
        <TopNav />
        <div className="container page-content border border-primary">
          {children}
        </div>
      </div>
    </div>

    // <div className={""}>
    //   <TopNav />
    //   <div className="content-container">
    //     <SideNav />
    //     <div className=" content container-fluid m-3 p-0 border border-primary">
    //       {children}
    //     </div>
    //   </div>
    // </div>
  );
};

export default DashboardLayout;
