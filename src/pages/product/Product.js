import React from 'react'
import '../../App.css'
import img1 from "../../assets/images/img-1.jpg";

function Product() {
  return (
    <h1 className="products" style={{ backgroundImage: `url(${img1})` }}>
      Product
    </h1>
  );
}

export default Product