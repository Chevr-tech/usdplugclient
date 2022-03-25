import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container border border-primary">{children}</div>
    </>
  );
};

export default Layout;
