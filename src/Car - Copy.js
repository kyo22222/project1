import React, {useRef, useEffect, useState} from 'react';
import Karina from './Karina';

function Car() {
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
        <div class='theBOX' className={isActive? 'scrolled' : ''} onScroll={handleScroll} ref={boxRef}>
            <Karina></Karina>
            <p className='sticky'>X : {x} and Y(scrolltop) : {y} and {girl}</p>
        </div>
    )
}

export default Car;