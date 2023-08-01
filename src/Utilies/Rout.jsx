import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs";
import Careers from "../Pages/Careers";
import ContactUs from "../Pages/ContactUs";
import OurBlog from "../Pages/OurBlog";
import TermAndConditions from "../Pages/TermAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import BookDemo from "../Pages/BookDemo";
import Faq from "../Pages/Faq";
import SignIn from "../Pages/SignIn";
import ForgotPassword from "../Pages/ForgotPassword";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

//Checked Components
// import OnGridDetailsPopup from '../Pages/Home/PopUpComponents/OnGridDetailsPopup';
// import GridlinesDetailsPopup from '../Pages/Home/PopUpComponents/GridlinesDetailsPopup';
// import ELockrDetailsPopup from '../Pages/Home/PopUpComponents/ELockrDetailsPopup';
// import OnDemandPopup from '../Pages/Home/PopUpComponents/OnDemandPopup';
// import StaffingPopup from '../Pages/Home/PopUpComponents/StaffingPopup';
// import LogisticsAndTransportationPopup from '../Pages/Home/PopUpComponents/LogisticsAndTransportationPopup';
// import HospitalityPopup from '../Pages/Home/PopUpComponents/HospitalityPopup';
// import RetailPopup from '../Pages/Home/PopUpComponents/RetailPopup';
// import ManufacturingPopup from '../Pages/Home/PopUpComponents/ManufacturingPopup';
// import InformationTechnologyPopup from '../Pages/Home/PopUpComponents/InformationTechnologyPopup';
// import HealthcarePopup from '../Pages/Home/PopUpComponents/HealthcarePopup';
// import InternetPlatformsPopup from '../Pages/Home/PopUpComponents/InternetPlatformsPopup';

function Rout() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/bookDemo" element={<BookDemo />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/our-blog" element={<OurBlog />}></Route>
          <Route path="/term-and-conditions" element={<TermAndConditions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default Rout;
