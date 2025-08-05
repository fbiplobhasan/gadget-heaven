import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <div className="mt-12">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
