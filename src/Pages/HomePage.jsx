import React from "react";
import ProductList from "../components/ProductsList";
import style from "../styles/HomePage.module.css";
import NavBar from "../components/NavBar";


function HomePage({ products }) {
  return (
    <div >
      <NavBar />
      <div>
       <br/><br/><br/>
        <div  >
          <section className={style.containerSection}>
            <div className="post-thumbnail">
              <img className={style.imageSection} src="https://slangpedia.org/wp-content/uploads/2018/08/xavier-teo-469050-unsplash-825x510.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Shoe Slang" />
            </div>
          </section>
        </div>
        <ProductList products={products} />

      </div>
    </div>
  );
}

export default HomePage;
