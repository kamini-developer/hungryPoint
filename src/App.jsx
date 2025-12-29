import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import FoodCard from "./component/FoodCard";
import FoodData from "./data/FoodData";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <h1>hellooooo</h1>

      </CartProvider>
    
  );
}

export default App;




