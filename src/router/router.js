import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Routes
import { RouterLinks } from "./routerlinks";
import HomeComponent from "../pages/home";
import NavbarComponent from "../component/navbarcomponent";
import WebinarsComponent from "../pages/webinars";
import WebinarDetail from "../pages/webinars/webinardetail";
import AboutUsComponent from "../pages/aboutus";

const AppRouter = () => {
  return (
    <>
      <div>
        <NavbarComponent />
      </div>
      <Routes>
        <Route path={RouterLinks.home} element={<HomeComponent />} />
        <Route path={RouterLinks.webinars} element={<WebinarsComponent />} />
        <Route path={RouterLinks.webinardetail} element={<WebinarDetail />} />
        <Route path={RouterLinks.aboutus} element={<AboutUsComponent />} />
      </Routes>
    </>
  );
};

export default AppRouter;
