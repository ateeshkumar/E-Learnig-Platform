import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/context/auth.jsx'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga4";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}
ReactGA.initialize("G-Y09CD0Q3BB");
ReactGA.send({ hitType: "pageview", page: "/my-path", title: "alphapartical" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <ToastContainer/>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
