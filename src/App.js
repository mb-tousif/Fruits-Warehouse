import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./SharedFile/Footer";
import Navbar from "./SharedFile/Navbar";

function App() {
  return (
    <div className="bg-[#c1c161]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
<ToastContainer />;
export default App;
