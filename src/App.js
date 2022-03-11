import React from "react";
import data from "./fakeDB/data";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

import "./App.css";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from './Pages/ShoppingCart';
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Admin from "./Pages/Admin";
import WriteReview from "./components/WriteReview";
import Checkout from "./Pages/Checkout";

import UsersManagment from "./Pages/UsersManagment";
import CategoriesManagment from "./Pages/CategoriesManagment";

// import NavbarTest from "./components/NavbarTest";
import ProductsManagment from "./Pages/ProducstManagment";
import Thanks from "./Pages/Thanks";



function App() {

  // const { products } = data;
  const locaStorageProducts = JSON.parse(localStorage.getItem("cart-products")) || []
  const [cartItems, setCartItems] = useState(locaStorageProducts);
  const [isLoggedIn] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart-products", JSON.stringify(cartItems))
  }, [cartItems]);


  useEffect(() => {
    console.log(`Buscando products...`);
    axios
      .get("/api/products/allProducts")
      .then((res) => res.data)
      .then((items) => {
        setProducts(items);

      })
      .catch((err) => {
        console.log(err);
      });
  }, [])


  const onAdd = (product) => {
    const exist = cartItems.find(x => x.productId === product.productId);
    // console.log(product)
    if (exist) {
      setCartItems(cartItems.map(x => x.productId === product.productId ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find(x => x.productId === product.productId);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.productId !== product.productId))
    } else {
      setCartItems(cartItems.map(x => x.productId === product.productId ? { ...exist, qty: exist.qty - 1 } : x))
    }

  }

  const onDelete = (product) => {
    setCartItems(cartItems.filter(x => x.productId !== product.productId))
  }


  return (
    <div >
      <NavBar />
      {/* <NavbarTest /> */}
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
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/products" element={<ProductsList products={products} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path={`/products/:productId`} element={<ProductDetails onAdd={onAdd} />} />
          <Route path={`/writeReview`} element={<WriteReview />} />
          <Route path={`/checkout`} element={isLoggedIn ? <Checkout cartItems={cartItems} /> : <Navigate to="/login" />} />
          <Route path="/thanks" element={<Thanks />} />

          {/* AGREGUE RUTAS ADMIN */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/productsManagment" element={<ProductsManagment />} />
          <Route path="/usersManagment" element={<UsersManagment />} />
          <Route path="/categoriesManagment" element={<CategoriesManagment />} />
        </Routes >
      </main >
      <Footer />
    </div >
  );
}

export default App;
