import React, { useState, useEffect } from 'react';
import styles from '../styles/ProductList.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';

const ProductsList = () => {
  const [productInfo, setProductInfo] = useState([]);
  let [searchParams] = useSearchParams();
  const searchProduct = searchParams.get('query');

  useEffect(() => {
    console.log(window.location.href);
    if (window.location.href.includes('search')) {
      axios
        .get(`/api/products/search?query=${searchProduct}`)
        .then((res) => setProductInfo(res.data));
    } else if (window.location.href.includes('women')) {
      axios
        .get(`/api/products/allProducts/1`)
        .then((res) => setProductInfo(res.data));
    } else if (window.location.href.includes('men')) {
      axios
        .get(`/api/products/allProducts/2`)
        .then((res) => setProductInfo(res.data));
    } else if (window.location.href.includes('kids')) {
      axios.get(`/api/products/allProducts/3`).then((res) => {
        console.log(res.data);
        setProductInfo(res.data);
      });
    } else {
      axios
        .get('/api/products/allProducts')
        .then((res) => setProductInfo(res.data));
    }
  }, [window.location.href]);

  if (!productInfo) return <div></div>;

  return (
    <>
      <div>
        <NavBar />
      </div>
      <br />
      <br />
      <div className="container">
        <ul className={`${styles.container}`}>
          {productInfo?.map((product) => {
            return (
              <div key={product.productId}>
                <Link to={`/products/${product.productId}`}>
                  {' '}
                  <img
                    className={styles.image}
                    src={product.img[0]}
                    alt="imagen"
                  ></img>{' '}
                </Link>
                <div className={styles.name}>{product.name}</div>
                <div>{`${product.price} €`}</div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProductsList;
