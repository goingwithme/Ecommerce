// import { Routes, Route } from 'react-router-dom'; // ✅ Use Routes instead of Router
import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Maincon from './component/Maincon';
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from './navcompo/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <Header />
      <Maincon />
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
