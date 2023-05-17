import {  Link } from "react-router-dom";
// import { useState } from "react";
import './header.css';

function Header(props) {
    const styleClass = props.styleClass
    console.log(props);
  return (
    <>
        <header className={`header ${styleClass === true ? 'activeSticky' : ""}`} >
            <div className="header_content container">
                <div className='logo'>
                    {/* <img src="" alt="" /> */}
                    <h1><span className="logo_design">JT-</span>Lalong</h1>
                </div>
                <nav className="nav">
                    <ul className="menu_list">
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/">A propos</Link></li>
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  );
}

export default Header;