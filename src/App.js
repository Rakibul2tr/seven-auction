import {  Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardMain from "./Components/AdminDashbord/DashboardMain";
import NotFound from "./Components/NotFoundpage/NotFound";
import Privacy from "./Components/PrivecyPage/Privacy";
import Footer from "./Components/ShirePage/Footer/Footer";
import Header from "./Components/ShirePage/Header/Header";
import Terms from "./Components/TermsCondition/Terms";
import UserAcount from "./Components/UserAcount/UserAcount";
import AboutUS from "./ComponentsHelal/pages/AboutUS";
import AuctionHome from "./ComponentsHelal/pages/AuctionHome";
import ContactUs from "./ComponentsHelal/pages/ContactUs.jsx"
import Faqs from "./ComponentsHelal/pages/Faqs";
import SingleCar from "./ComponentsHelal/pages/SingleCar";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<><Header/><AuctionHome/> <Footer/></>}></Route>

      <Route exact path="/account" element={<><Header/><UserAcount/><Footer/></>}></Route>

      <Route exact path="/contact" element={<><Header/> <ContactUs/> <Footer/></>}></Route>

      <Route exact path="/about" element={<><Header/> <AboutUS/> <Footer/></>}></Route>

      <Route exact path="/faqs" element={<><Header/> <Faqs/> <Footer/></>}></Route>

      <Route exact path="/singlecar" element={<><Header/> <SingleCar/> <Footer/></>}></Route>

      <Route exact path="/privacy" element={<><Header/> <Privacy/> <Footer/></>}></Route>

      <Route exact path="/terms" element={<><Header/> <Terms/> <Footer/></>}></Route>

      <Route exact path="/dashboard" element={<> <DashboardMain/> </>}></Route>

      <Route exact path="*" element={<><Header/> <NotFound/> <Footer/></>}></Route>
    </Routes>
  );
}

export default App;
