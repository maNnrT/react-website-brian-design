import React from 'react'
import '../../App.css'
import img2 from "../../assets/images/img-2.jpg";
function Services() {
  return (
    <h1
      className="services"
      style={{ backgroundImage: `url(${img2})` }}
    >
      Services
    </h1>
  );
}

export default Services;