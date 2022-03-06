
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/ShirePage/Footer/Footer';
import Header from './Components/ShirePage/Header/Header';

function App() {
  return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<><Header/><Footer/></>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
