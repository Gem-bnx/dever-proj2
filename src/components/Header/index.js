import React from "react";
import "../../assets/styles/scss/main.scss";
import Navbar from "../Navbar";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="menu"><img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677785475/project2/List_vbpqap.svg"></img></div>
        <Navbar></Navbar>
        <button className="contact-btn">İletişim</button>
      </div>
    </div>
  );
}

export default Header;
