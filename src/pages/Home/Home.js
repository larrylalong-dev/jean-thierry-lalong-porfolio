import { useState } from "react";
import Banner from "../../components/Banner/banner";
import  Header from "../../components/Header/header";
import  Biographie from "../../components/Biographie/Biographie";
import Competence from "../../components/Competence/Competence";
import './home.css';

function Home() {
  const [scrollValue, setScrollValue] = useState(0);

  function GetScrollValue() {
    window.addEventListener('scroll', (event)=>{setScrollValue(window.scrollY)});
    return scrollValue
}
GetScrollValue();

  return (
    <>
        {scrollValue >= 150 ? <Header styleClass={true}/> : null}
        <Banner/>
        <main className='main container'>
            <div className="bloc_biographie"><Biographie/></div>
            <div className="bloc_competence"><Competence/></div>
        </main>
    </>
  );
}

export default Home;
