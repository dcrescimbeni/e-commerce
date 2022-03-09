import { Routes, Route } from "react-router-dom";

import './App.css';
import HomePage from "./Pages/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductsList from "./components/ProductsList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";



function App() {
  return (
    <div >
     <NavBar />
    <br></br>
      <main>
        <Routes >
          <Route path="/" element={<HomePage />}/>
          <Route path= "/products" element={<ProductsList />}/>
          <Route path= "/register" element={<Register />}/>
           <Route path= "/login" element={<Login />}/>
        </Routes>
      </main> 
      <Footer />
    </div>
  );
}

export default App;
