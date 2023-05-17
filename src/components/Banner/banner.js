import jean_thierry_lalong_rb from "../../assets/images/jean_thierry_lalong.jpg";
import {  Link } from "react-router-dom";
import "./banner.css";

function banner() {
  return (
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
        <Link to="/"><i class="fa fa-download"></i> Download CV</Link>
      </div>
      <Link className="link_presentation_profil" data-autoplay="true"  data-vbtype="youtube" to="https://youtu.be/BS4TUd7FJSg"><i class="fas fa-play"></i></Link>
    </div>
  );
}

export default banner;
