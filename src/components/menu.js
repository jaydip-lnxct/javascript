import React from 'react';
const Menu=()=>{
    let item="Punjabi thali"
    return(
      <ul style={{textAlign:'center'}}>
        <h1 style={{color: "red"}}>Items</h1>
        <li>1.Pizza</li>
        <li>2.Manchurian</li>
        <li>3.Dosa</li>
        <li>4.Gujarati Dish</li>
        <li>5.Pau Bhaji</li>
        <li>6.{item.toUpperCase()}</li>
      </ul>
    )
  }
  
  export default Menu;