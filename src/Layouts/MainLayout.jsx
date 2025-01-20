import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>
      {/* Dynamic section */}
      <div className="min-h-[calc(100vh-268px)]">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
