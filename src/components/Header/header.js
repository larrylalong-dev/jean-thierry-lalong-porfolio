import {  Link } from "react-router-dom";
import './header.css';

function header() {
  return (
    <>
        <header className='header container'>
            <div className='logo'>
                {/* <img src="" alt="" /> */}
                <h1><span className="logo_design">jt</span>lalong</h1>
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
        </header>
    </>
  );
}

export default header;