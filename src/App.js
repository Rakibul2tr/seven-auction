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
}

export default App;
