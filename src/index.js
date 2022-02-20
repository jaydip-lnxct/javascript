import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Name=()=>{
  return(
    <ul style={{textAlign:'center'}}>
      <h1 style={{color: "red"}}>Items</h1>
      <li>1.Pizza</li>
      <li>2.Manchurian</li>
      <li>3.Dosa</li>
      <li>4.Gujarati Dish</li>
      <li>5.Pau Bhaji</li>
    </ul>
  )
}




ReactDOM.render(<Name/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
