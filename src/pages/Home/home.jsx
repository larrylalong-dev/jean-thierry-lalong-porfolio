import { useState } from "react";
import Banner from "../../components/Banner/banner";
import  Header from "../../components/Header/header";
import './home.css';

function Home() {
  const [scrollValue, setScrollValue] = useState(0);

  function GetScrollValue() {
    window.addEventListener('scroll', (event)=>{setScrollValue(window.scrollY)});
    return scrollValue
}
GetScrollValue()

// console.log(GetScrollValue());
  return (
    <>
        {scrollValue >= 150 ? <Header styleClass={true}/> : null}
        <Banner/>
        <main className='main container'>home</main> 
    </>
  );
}

export default Home;
