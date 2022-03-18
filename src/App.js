import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './components/NavBar';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Admin from './Pages/Admin';
import WriteReview from './components/WriteReview';
import Checkout from './Pages/Checkout';

import UsersManagement from './Pages/UsersManagement';
import Thanks from './Pages/Thanks';
import { useDispatch, useSelector } from 'react-redux';
import { getSession } from './state/user';
import Profile from './Pages/Profile';
import PurchaseHistory from './Pages/PurchaseHistory.jsx';
import NewProduct from './Pages/NewProduct';
import ProductEdit from './Pages/ProductEdit';

function App() {
  // const { products } = data;
  const locaStorageProducts =
    JSON.parse(localStorage.getItem('cart-products')) || [];
  const [cartItems, setCartItems] = useState(locaStorageProducts);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('cart-products', JSON.stringify(cartItems));
  }, [cartItems]);

  const user = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    console.log(`Buscando products...`);
    axios
      .get('/api/products/allProducts')
      .then((res) => res.data)
      .then((items) => {
        setProducts(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  console.log('Este es el usuario', user.userId);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.productId === product.productId);
    // console.log(product)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.productId !== product.productId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      );
    }
  };

  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x.productId !== product.productId));
  };

  return (
    <div>
      <main>
        <Routes>
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCart
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                cartItems={cartItems}
              />
            }
          />
          <Route path="/" element={<HomePage products={products} />} />
          <Route
            path="/products"
            element={<ProductsList products={products} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path={`/products/:productId`}
            element={<ProductDetails onAdd={onAdd} />}
          />
          <Route path={`/writeReview`} element={<WriteReview />} />
          <Route
            path={`/checkout`}
            element={
              user.userId ? (
                <Checkout cartItems={cartItems} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/thanks"
            element={
              <Thanks cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route path="/search" element={<ProductsList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userOrders/:id" element={<PurchaseHistory />} />
          <Route path="/men" element={<ProductsList />} />
          <Route path="/women" element={<ProductsList />} />
          <Route path="/kids" element={<ProductsList />} />

          {/* AGREGUE RUTAS ADMIN */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/productsManagement" element={<Admin />} />
          <Route path="/usersManagement" element={<Admin />} />
          <Route path="/users/:id" element={<UsersManagement />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
