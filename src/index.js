// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/menu';

const Camera=()=>{
const shot=()=>{
    alert("plz try Agian because your face is not good!!")
}
return(
    <button className="center" onClick={shot}>take a shot plz smile</button>
)
}
ReactDOM.render(<Menu className='crossed-line'/>, document.getElementById('root'));
ReactDOM.render(<Camera />, document.getElementById('shot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
