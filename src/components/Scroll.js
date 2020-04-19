import React from "react";
import './Scroll.css'
const Scroll=(props)=>
{
    console.log(props.children);

return(
    <div className="scrollable style-3" > {props.children}</div>
)}
export  default Scroll