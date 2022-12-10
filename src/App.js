import React from "react";
import './App.css';
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/Navbar/Navbar';
import Element from './Components/Routing/Element';

function App() {
  return (
    <div className="app_main_outer">
      <Navbar />
      <div className="app_main">
        <Element />
      </div>
      <Footer />
    </div>
  );
}

export default App;
