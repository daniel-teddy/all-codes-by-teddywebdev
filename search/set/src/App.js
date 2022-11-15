import "./App.css";
import Navbar from "./Navbar";
import Webdesign from "./pages/webdesign";
import Javascript from "./pages/javascript";
import Css from "./pages/css";
import ReactLib from "./pages/reactlib";
import Home from "./pages/Home";
import Footer from "./Footer/Footer";

import {Route, Routes, } from 'react-router-dom';
import About from "./pages/about";
import Contact from "./pages/contact";


function App() {
  

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/css" element={<Css />}></Route>
          <Route path="/Reactlib" element={<ReactLib />}></Route>
          <Route path="/webdesign" element={<Webdesign />}></Route>
          <Route path="/Javascript" element={<Javascript />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
