import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogsPage from "./Pages/Blogs/BlogsPage";
import HomePage from "./Pages/Home/HomePage";
import Fruits from "./Pages/Products/Fruits";
import Footer from "./SharedFile/Footer";
import Navbar from "./SharedFile/Navbar";

function App() {
  return (
    <div className="bg-[#c1c161]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/blogs" element={<BlogsPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

<ToastContainer />

export default App;
