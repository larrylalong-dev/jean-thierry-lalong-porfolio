import { useState } from "react";


function GetScrollValue() {
    const [scrollValue, setScrollValue] = useState(0);
    console.log(window.scrollX);  
    window.addEventListener('scroll', (event)=>{
        event.preventDefault();
        setScrollValue(window.scrollY)
    });
    console.log(scrollValue);
    return scrollValue
}

export default GetScrollValue;