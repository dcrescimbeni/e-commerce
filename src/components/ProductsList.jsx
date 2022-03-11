import React, { useState, useEffect } from "react";
import styles from "../styles/ProductList.module.css"
import { Link } from 'react-router-dom';
import axios from "axios";


const ProductsList = ({ }) => {

  const [productInfo, setProductInfo] = useState([]);



  useEffect(() => {
    axios
      .get(
        "/api/products/allProducts"
      )
      .then((res) => setProductInfo(res.data));
  }, []);

  console.log(productInfo);



  return (
    <>


      <ul className={styles.container}>
        {productInfo.map((product) => {
          return (
            <div key={product.productId}>
              <Link to={`/products/${product.productId}`}> <img className={styles.image} src={product.img[0]} alt="imagen"></img> </Link>
              <div className={styles.name}>{product.name}</div>
              <div>{`${product.price} €`}</div>
            </div>
          );
        })}
      </ul>

    </>
  );
};

export default ProductsList;