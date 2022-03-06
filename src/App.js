import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import AuctionHome from './ComponentsHelal/pages/AuctionHome';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AuctionHome />} />
			</Routes>
		</>
	);
}

export default App;
