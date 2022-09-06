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
import Dashboard from "./Pages/Dashboard/Dashboard";
import UpdateFruit from "./Pages/UpdateFruit/UpdateFruit";
import SalesReport from "./Pages/Dashboard/SalesReport";
import AddFruit from "./Pages/Dashboard/AddFruit";
import ManageInventory from "./Pages/Dashboard/ManageInventory";
import Reviews from "./Pages/Dashboard/Reviews";
import PendingTasks from "./Pages/Dashboard/PendingTasks";
import AllUsers from "./Pages/Dashboard/AllUsers";

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
                <Inventory />
              </RequireAuth>
            }
          />
          <Route
            path="/fruit/:id"
            element={
              <RequireAuth>
                <UpdateFruit />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<SalesReport />} />
            <Route path="addFruit" element={<AddFruit />} />
            <Route path="manageInventory" element={<ManageInventory />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="pendingTask" element={<PendingTasks />} />
            <Route path="allUsers" element={<AllUsers />} />
          </Route>
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
