import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./SharedFile/Footer";

function App() {
  return (
    <div className="h-screen bg-dark-blue bg-main bg-contain">
      <h1 className="text-5xl text-center p-4 font-mono font-black text-white">
        React Initial Project set-up
      </h1>
      <h4 className="text-2xl p-2 text-center font-mono font-black text-white">
        Tech: Tailwind, React-router, react-toastify,
        daisyUI,react-spinner-loader, React Hook Form.
      </h4>
      <Footer/>
      <ToastContainer />;
    </div>
  );
}
export default App;
