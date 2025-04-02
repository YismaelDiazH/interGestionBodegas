import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

/* import App from "./App.jsx";      */

/* import MainView from "./components/MainPage/MainView.jsx"; */
import LoginView from "./components/Login/LoginView.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*   <MainView />  */}
    <LoginView />
  </StrictMode>
);
