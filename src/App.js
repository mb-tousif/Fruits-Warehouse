import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogsPage from "./Pages/Blogs/BlogsPage";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Register/Login";
import ResetPassword from "./Pages/Register/ResetPassword";
import Signup from "./Pages/Register/Signup";
import DataLoader from "./SharedFile/DataLoader";
import Footer from "./SharedFile/Footer";
import Navbar from "./SharedFile/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import RequireAuth from "./SharedFile/RequireAuth";
import Inventory from "./Pages/Inventory/Inventory";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div className="bg-[#c1c161]">
      <Navbar />
      {loader ? (
        <DataLoader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/inventory"
            element={
              <RequireAuth>
                <Inventory/>
              </RequireAuth>
            }
          />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      )}
      <ToastContainer />
      <Footer />
    </div>
  );
}

AOS.init();
export default App;
