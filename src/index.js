/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import Login from "components/Login";
import Signup from "components/Signup";
import App from "./App";
import './index.css';
import Mediasign from "components/MediaSign";
import { ToastContainer } from 'react-toastify';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="*" element={<Navigate to="/admin/dashboard" replace />}/>
          <Route exact path="/login" element={<Login/>}> </Route>
          <Route exact path="/signup" element={<Signup/>}> </Route>
          <Route exact path="/mediasign" element={<Mediasign/>}> </Route>
          <Route exact path="/" element={<App/>}> </Route>
        </Routes>
      </BrowserRouter>
    </BackgroundColorWrapper>
    <ToastContainer />
  </ThemeContextWrapper>
);

