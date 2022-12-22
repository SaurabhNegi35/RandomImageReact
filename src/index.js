import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Saurabh";
const img1 = "https://picsum.photos/500/500";
const img2 = "https://picsum.photos/600/600";
const img3 = "https://picsum.photos/700/700";
const links = "https://github.com/saurabhnegi35"


// .heading {
//   text-align: center;
//   color: blueviolet;
//   text-transform: capitalize;
//   font-weight: bold;
//   text-shadow: 0px 2px 4px cornflowerblue;
//   margin: 50px 0px;
//   font-family: Josefin Sans, sans-serif;
// }

const heading = {
  color: 'blueviolet', 
  textAlign: 'center', 
  textTransform:'capitalize',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px cornflowerblue',
  margin: '50px 0px', 
  fontFamily: "'Josefin Sans','sans-serif'"
}

ReactDOM.render(
<>
  <h1 style={heading} /*className='heading'contentEditable="true"*/>Hello, My Name is {name}</h1>
  

  <div className='img_div'>
    <img src={img1} alt="Random Images"/>
    <img src={img2} alt="Random Images"/>
    <a href={links}>
    <img src={img3} alt="Random Images"/>
    </a>
  </div>
  
</>,
document.getElementById('root')
  
);