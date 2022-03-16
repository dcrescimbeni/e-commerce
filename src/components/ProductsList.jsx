import React, { useState, useEffect } from "react";
import styles from "../styles/ProductList.module.css";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

const ProductsList = () => {
  const [productInfo, setProductInfo] = useState([]);
  let [searchParams] = useSearchParams();
  const searchProduct = searchParams.get("query");

  useEffect(() => {
    if (window.location.href.includes("search")) {
      axios
        .get(`/api/products/search?query=${searchProduct}`)
        .then((res) => setProductInfo(res.data));
    } else if(window.location.href.includes("men")){

     
    }
    else{
      axios
        .get("/api/products/allProducts")
        .then((res) => setProductInfo(res.data));
    }
  }, [searchProduct]);

  console.log(productInfo);

  console.log(window.location.href);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <br />
      <br />

      <ul className={styles.container}>
        {productInfo.map((product) => {

          return (
            <div key={product.productId}>
              <Link to={`/products/${product.productId}`}>
                {" "}
                <img
                  className={styles.image}
                  src={product.img[0]}
                  alt="imagen"
                ></img>{" "}
              </Link>
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
