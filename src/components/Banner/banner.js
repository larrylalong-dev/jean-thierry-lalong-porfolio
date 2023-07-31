import {  Link } from "react-router-dom";
import { useState } from "react";
import "./banner.css";

function Banner() {

const [showPopup, setShowPopup] = useState(false);

const handleHidePopup = () => {
    setShowPopup(false)
  }

  const popupUpdate = () => {
    showPopup ? setShowPopup(false) : setShowPopup(true);
    console.log(showPopup);
  }
  return (
    <>
     {showPopup 
        ? 
        <div className='parent_popupContent'>
            <span onClick={handleHidePopup} className='close_popup'>x</span>
            <div className='popupContent'>
                <iframe className="iframeConfigWidth" width="560" height="315" src="https://www.youtube-nocookie.com/embed/4mba_1WlMJY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
        : null}
      <div className="banner container">
        <div className="content_banner_text">
          <h1 className="fisrt_title_banner">
            <span className="fisrt_title_banner_text">Bonjour</span>
            <span className="dot_banner">.</span>
          </h1>
          <h2 className="second_title_banner">Je suis JT-lalong</h2>
          <p className="description_post">Développeur Fullstack (React & Express)</p>
        </div>
        <div className="content_banner_btn">
          <Link to="/"><i className="fa fa-download"></i> Download CV</Link>
        </div>
        <button onClick={popupUpdate} className="link_presentation_profil" data-autoplay="true"  data-vbtype="youtube" to="https://youtu.be/BS4TUd7FJSg"><i className="fas fa-play"></i></button>
      </div>
    </>
  );
}

export default Banner;
