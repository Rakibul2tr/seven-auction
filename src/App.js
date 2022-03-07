<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/ShirePage/Footer/Footer";
import Header from "./Components/ShirePage/Header/Header";
import UserAcount from "./Components/UserAcount/UserAcount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        />
        <Route
          path="/acount"
          element={
            <>
              <Header />
              <UserAcount />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
=======
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import AuctionHome from './ComponentsHelal/pages/AuctionHome';
import ContactUs from './ComponentsHelal/pages/ContactUs';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AuctionHome />} />
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
		</>
	);
>>>>>>> 8b0a19ee7bf3dae221543e6410099cb8df42500b
}

export default App;
