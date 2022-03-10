import React from "react";
import data from "./fakeDB/data";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';


import "./App.css";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import WriteReview from "./components/WriteReview";
import ShoppingCart from './components/ShoppingCart';
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Admin from "./Pages/Admin";
import UsersManagment from "./Pages/UsersManagment";
import CategoriesManagment from "./Pages/CategoriesManagment";
import ProductsManagment from "./Pages/ProducstManagment";



function App() {

  const { products } = data;
  const locaStorageProducts = JSON.parse(localStorage.getItem("cart-products")) || []
  const [cartItems, setCartItems] = useState(locaStorageProducts);
  const [isLoggedIn] = useState(true);

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

          <Route path="/shoppingcart" element={
            <ShoppingCart
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              cartItems={cartItems}
            />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsList products={products} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/products/:productId"} element={<ProductDetails />} />
          <Route path={"/writeReview"} element={<WriteReview />} />

     

          {/* AGREGUE RUTAS ADMIN */}
          <Route path="/admin" element={<Admin />}/>
          <Route path="/productsManagment" element={<ProductsManagment />} />
          <Route path="/usersManagment" element={<UsersManagment />}/>
          <Route path="/categoriesManagment" element={<CategoriesManagment />}/>
        </Routes >
      </main >
      <Footer />
    </div >
  );
}

export default App;
