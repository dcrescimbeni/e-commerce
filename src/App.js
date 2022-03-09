import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import data from "./fakeDB/data";

function App() {
  const { products } = data;

  // useEffect(() => {
  //   setProductsList(products);
  //   console.log(products);
  // }, []);

  return (
    <div>
      
      <Routes>
      <Route path={"/"} element={<ProductList products={products}/>} />
        <Route path={`/products/:productId`} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
