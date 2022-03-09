import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import data from "./fakeDB/data";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";



function App() {
  const { products } = data;

  // useEffect(() => {
  //   setProductsList(products);
  //   console.log(products);
  // }, []);

  return (
    <div >
     <NavBar />
    <br></br>
      <main>
        <Routes >
          <Route path="/" element={<HomePage />}/>
          <Route path= "/products" element={<ProductsList products={products}/>}/>
          <Route path= "/register" element={<Register />}/>
           <Route path= "/login" element={<Login />}/>
           <Route path={`/products/:productId`} element={<ProductDetails />} />
        </Routes>
      </main> 
      <Footer />
    </div>
  );
}

export default App;
