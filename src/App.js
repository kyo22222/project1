import React, {useRef, useEffect, useState} from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Car from './Car';
import Menu from './menu';
import Karina from './Karina';

// const handleScroll = event => {
//   console.log('scrollTop: ', event.currentTarget.scrollTop);
//   console.log('offsetHeight: ', event.currentTarget.offsetHeight);
//   // if( event.currentTarget.scrollTop > 500){
//   //   console.log("ASDDD");
//   // }
// }

// function HandleScroll() {
//   console.log('scrollTop: ', window.pageYOffset);
//   console.log('offsetHeight: ', e.currentTarget.offsetHeight);
// };

//class App extends React.Component{
function App() {

    const [girl, setGirl] = useState("---");
    const boxRef = useRef();
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [isActive, setIsActive] = useState(false);
    const getPosition = () => {
      const x = boxRef.current.offsetLeft;
      setX(x);
      //const y = boxRef.current.offsetTop;
      const y = window.pageYOffset;
      setY(y);
      
      if(y >= 200){
        setGirl('Karina');
        setIsActive(true);
      } else {
        setGirl('BACKED')
        setIsActive(false);
     }
      //window scrolltop, both
        //console.log(window.pageYOffset);
        //console.log(document.documentElement.scrollTop);
    };

    //const handleScroll = () => setGirl('Karina');
    //OR
    function handleScroll() {
        return(
            getPosition()
        )
    }
    useEffect(() => {
       document.title = girl;
       document.addEventListener("scroll", getPosition);
    });

  return (
    <Router>
    <div className="App" onScroll={handleScroll} ref={boxRef}>
      <p className='sticky'>X : {x} and Y(scrolltop) : {y} and {girl}<br/>Did u see me?</p>
      <Menu className={isActive? 'scrolled up' : ''} ></Menu>
      

      <Routes>
        <Route exact path='' element={< Karina />}></Route>
        <Route exact path='/Karina' element={< Karina />}></Route>
        <Route exact path='/Car' element={< Car />}></Route>
      </Routes>

  </div>
  </Router>
  )
}

export default App;