import {useState} from 'react'
import BackgroundVideo from "./assets/video.mp4";
import Poster from "./assets/poster.jpeg";
import Moment from './assets/pristine.jpeg';
import Logo from "./assets/king-ojem-label.png";
import React from "react";
function Video() {
    const [isClicked, setClicked] = useState(false)
    const dynamicstyle ={
      display: isClicked ? "block" : "none",
      fontSize: "1rem", 
    }
    
  // const show = ()=>{
  
  //   console.log("done");
  //   }

    return(
      <div className="Video-wrapper">
        <video autoPlay loop muted playsInline className="background-video" poster={Poster}>
            <source src={BackgroundVideo} type="video/mp4"/>
        </video>

        <div className="video-overlay">
          <a href="#" target="_blank" rel="noopener noreferrer">
          <div className="video-overlay-content">
            <h1>King Ojem</h1>
            <h2><span className="album_Head">P</span>RISTINE</h2>
            
          </div>
          <div >
            <img src={Moment} alt="Click for whats trending at the moment" className="moment blinkAnimation-Display" />
          </div>
          </a>
        </div>
        <div className="info-card">
          <nav aria-label="Main Menu" id="menu" >
            <ul className="menu">
              <li><a href="#" onClick={(e)=> {e.preventDefault; setClicked(!isClicked)}}>Home</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Tour</a></li>
              <li><a href="#">Suscribe</a></li>
            </ul>
          </nav>
          <nav aria-label="Social Media Links">
            <ul className="menu socials" >
              <li><a href="https://www.facebook.com/kingojem/"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/kingojem"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/kingojem/"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="https://www.youtube.com/@kingojem"><i class="fa-brands fa-youtube"></i></a></li>
              {/* <li><a href="https://open.spotify.com/artist/5XtY3A8P6V4v9v9v9v9v9v"><i class="fa-brands fa-spotify"></i></a></li>
              <li><a href="https://www.apple.com/music/"><i class="fa-brands fa-apple"></i></a></li>
              <li><a href="https://soundcloud.com/kingojem"><i class="fa-brands fa-soundcloud"></i></a></li> */}
              <li><a href="https://www.tiktok.com/@kingojem"><i class="fa-brands fa-tiktok"></i></a></li>
            </ul>

          </nav>

          <div id="display-content" >
            <div className="home-content">
            <div className="logo">
              <img src={Logo} alt="logo - King Ojem" className="logo" />
            </div>
            <div className="policies">
              <a href="#"><p>policies</p> </a>
              <a href="#"><p>Privacy policy</p></a>
              <a href="#"><p>Terms of use</p></a>
              <a href="#"><p>Cookies policy</p></a>
              <p>© 2026 King Ojem</p>
              
            </div>
            
            </div>
          </div>
          <div className="cookies">
              <a href="#"><p>Cookies Settings</p> </a>
              <p>Creative direction by ojoscreate
              Website design by <a href="#">ojosceate</a></p>
            </div>

        </div>
      </div>
    )
  }
export default Video;