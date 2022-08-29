import React, { useState, useEffect } from 'react';
import './App.css';
import Car from './Car';
import Menu from './menu';

// const handleScroll = event => {
//   console.log('scrollTop: ', event.currentTarget.scrollTop);
//   console.log('offsetHeight: ', event.currentTarget.offsetHeight);
//   // if( event.currentTarget.scrollTop > 500){
//   //   console.log("ASDDD");
//   // }
// }

function HandleScroll() {
  console.log('scrollTop: ', window.pageYOffset);
  //console.log('offsetHeight: ', e.currentTarget.offsetHeight);
};

function App() {
  const [girl, setGirl] = useState("Flora");
  
  //class App extends React.Component{
  useEffect(() => {
      setGirl('Karina');
  });

  return (
    <div className = "App" id='root' onScroll={HandleScroll}>
       <p style={{color:'#000'}}>{girl}</p>
      <Menu></Menu>
      <Car></Car>
  </div>
  )
}

export default App;