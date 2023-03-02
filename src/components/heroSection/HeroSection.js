import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../../App.css'
import Button from "../button/Button";
import "./heroSection.css";
import video1 from "../../assets/videos/video-1.mp4";
import video2 from "../../assets/videos/video-2.mp4";
import imgHome from "../../assets/images/img-home.jpg";
function HeroSection() {
  return (
    <div 
      className="hero-container" 
      // style={
      //   {
      //     backgroundImage:`url(${imgHome})`,
      //     backgroundPosition:'center',
      //     backgroundRepeat:'no-repeat',
      //     backgroundAttachment:'center',
      //     backgroundSize:'cover',
      //   }
      // }
    >
      <video src={video1} autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <FontAwesomeIcon icon={faPlayCircle} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
