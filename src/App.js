import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import PageNotFound from './pages/404';
import Navbar from './components/navbar';
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />  {/* Catch-all for unknown routes */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
