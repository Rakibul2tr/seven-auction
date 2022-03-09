import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import AuctionHome from './ComponentsHelal/pages/AuctionHome';
import ContactUs from './ComponentsHelal/pages/ContactUs';
import SingleCar from './ComponentsHelal/pages/SingleCar';
import Faqs from './ComponentsHelal/pages/Faqs';
import AboutUS from './ComponentsHelal/pages/AboutUS';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AuctionHome />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/singlecar" element={<SingleCar />} />
				<Route path="/faqs" element={<Faqs />} />
				<Route path="/aboutus" element={<AboutUS />} />
			</Routes>
		</>
	);
}

export default App;
