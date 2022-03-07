import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/ShirePage/Footer/Footer";
import Header from "./Components/ShirePage/Header/Header";
import UserAcount from "./Components/UserAcount/UserAcount";
import AuctionHome from "./ComponentsHelal/AuctionHome";
import ContactUs from "./ComponentsHelal/pages/ContactUs.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<><Header/><AuctionHome/><Footer/></>}></Route>
      <Route path="/account" element={<><Header/><UserAcount/><Footer/></>}></Route>
      <Route path="/contact" element={<><Header/> <ContactUs/> <Footer/></>}></Route>
    </Routes>
  );
}

export default App;
