// import { Routes, Route } from 'react-router-dom'; // ✅ Use Routes instead of Router
import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Maincon from './component/Maincon';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Maincon></Maincon>
      <Footer />
    </>
  );
}

export default App;
