import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from "./Pages/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductsList from "./components/ProductsList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ShoppingCart from './components/ShoppingCart';



function App() {

  const locaStorageProducts = JSON.parse(localStorage.getItem("cart-products")) || []
  const [cartItems, setCartItems] = useState(locaStorageProducts);


  useEffect(() => {
    localStorage.setItem("cart-products", JSON.stringify(cartItems))
  }, [cartItems]);


  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
    }

  }

  const onDelete = (product) => {
    setCartItems(cartItems.filter(x => x.id !== product.id))
  }

  return (
    <div >
      <NavBar />
      <br></br>
      <main>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/shoppingcart" element={
            <ShoppingCart
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              cartItems={cartItems}
            />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
