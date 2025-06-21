import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

<ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  toastStyle={{ backgroundColor: "black", color: "white" }} // ⬅️ GLOBAL STYLE
/>