import './App.css'
import Home from './Components/Home'
import InvestPage from './Components/Invest'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Wanted from './Components/Wanted';
import Flood from './Components/Flood';
import ImageSlider from './Components/ImageSlider';
import Sell from './Components/Sell';
import ImageSlider1 from './Components/ImageSlider1';

function App() {

  return (
    <>
     <Router>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/wanted" element={<Wanted />} />
        <Route path="/flood" element={<Flood />} />
        <Route path="/imageslider" element={<ImageSlider />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/imageslider1" element={<ImageSlider1 />} />
      </Routes>
      <Footer></Footer>
    </Router>   
    </>
  )
}

export default App
