import {  Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardMain from "./Components/AdminDashbord/DashboardMain";
import AdminLogin from "./Components/LoginPage/AdminLogin/AdminLogin";
import AdminRegister from "./Components/LoginPage/AdminRegister/AdminRegister";
import NotFound from "./Components/NotFoundpage/NotFound";
import Privacy from "./Components/PrivecyPage/Privacy";
import SellWithUs from "./Components/SellWithUs/SellWithUs";
import Footer from "./Components/ShirePage/Footer/Footer";
import Header from "./Components/ShirePage/Header/Header";
import Terms from "./Components/TermsCondition/Terms";
import UserDashboard from "./Components/UserAcount/UserDashboard";
import AboutUS from "./ComponentsHelal/pages/AboutUS";
import AuctionHome from "./ComponentsHelal/pages/AuctionHome";
import ContactUs from "./ComponentsHelal/pages/ContactUs.jsx"
import Faqs from "./ComponentsHelal/pages/Faqs";
import SingleCar from "./ComponentsHelal/pages/SingleCar";
import UserAccountUpdates from "./Components/UserAcount/UserAccountUpdates";
import Notifications from "./Components/UserAcount/Notifications";
import MyAuctions from "./Components/UserAcount/MyAuctions";
import Wallet from "./Components/UserAcount/Wallet/Wallet";
import MyBid from "./Components/UserAcount/MyBid/MyBid";
import Marksed from "./Components/UserAcount/Marksed/Marksed";
import InquiresMain from "./Components/UserAcount/Inquiris/InquiresMain";
import Status from "./Components/AdminDashbord/Status/Status";
import Upload from "./Components/AdminDashbord/Upload/Upload";
import Tickets from "./Components/AdminDashbord/Tickets/Tickets";
import AuctionRequest from "./Components/AdminDashbord/AuctionRequest/AuctionRequest";
import Auction from "./Components/AdminDashbord/Auctions/Auction";
import Withdrow from "./Components/AdminDashbord/Withdrow/Withdrow";
// import UserAcount from "./Components/UserAcount/UserAcount";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<AuctionHome/>}></Route>

      <Route exact path="userDashboard" element={<UserDashboard/>}>
         <Route exact path="account" element={<UserAccountUpdates/>}/>
         <Route exact path="notification" element={<Notifications/>}/>
         <Route exact path="myauction" element={<MyAuctions/>}/>
         <Route exact path="wallet" element={<Wallet/>}/>
         <Route exact path="bids" element={<MyBid/>}/>
         <Route exact path="marked" element={<Marksed/>}/>
         <Route exact path="inquires" element={<InquiresMain/>}/>
      </Route>

      <Route exact path="/contact" element={<ContactUs/>}></Route>

      <Route exact path="/about" element={ <AboutUS/>}></Route>

      <Route exact path="/faqs" element={ <Faqs/>}></Route>

      <Route exact path="/singlecar/:id" element={ <SingleCar/>}></Route>

      <Route exact path="/privacy" element={<><Header/> <Privacy/> <Footer/></>}></Route>

      <Route exact path="/terms" element={<><Header/> <Terms/> <Footer/></>}></Route>

      <Route exact path="/sell" element={<><Header/> <SellWithUs/> <Footer/></>}></Route>

      <Route exact path="dashboard" element={<DashboardMain/>}>
         <Route exact path="status" element={<Status/>}/>
         <Route exact path="upload" element={<Upload/>}/>
         <Route exact path="tickets" element={<Tickets/>}/>
         <Route exact path="auctionrequest" element={<AuctionRequest/>}/>
         <Route exact path="auction" element={<Auction/>}/>
         <Route exact path="withdrow" element={<Withdrow/>}/>
      </Route>
      
      <Route exact path="/admin" element={<AdminLogin/>}></Route>
      <Route exact path="/adminregister" element={<AdminRegister/>}></Route>

      <Route exact path="*" element={<><Header/> <NotFound/> <Footer/></>}></Route>
    </Routes>
  );
}

export default App;
