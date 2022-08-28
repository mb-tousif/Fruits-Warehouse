import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogsPage from "./Pages/Blogs/BlogsPage";
import HomePage from "./Pages/Home/HomePage";
import Fruits from "./Pages/Products/Fruits";
import DataLoader from "./SharedFile/DataLoader";
import Footer from "./SharedFile/Footer";
import Navbar from "./SharedFile/Navbar";

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
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

<ToastContainer />;

export default App;
