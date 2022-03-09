import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { GiConverseShoe } from "react-icons/gi";

import style from "../styles/Footer.module.css";


const Footer = () => {
  return (
    <>
    <footer className={style.footerContainer}>
      <div className={style.footerIcons}>

        <div className="insta" ><BsInstagram /></div><br/><br/>
       
        <div className="facebook"><BsFacebook /></div>

      </div>
      <div className={style.disclaimer}>
      © 2020 Copyright: <GiConverseShoe size={30} color={"white"} /> SNikers All Rigth Reserved
      </div>
    </footer>
    </>
  );
};

export default Footer;
