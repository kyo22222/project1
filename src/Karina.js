import React from 'react';
import mainLogo from './assets/cb5017936e68cdb05fdd8ef9692e815e.jpg';
import iu from './assets/iu.jpg';
import taeyeon from './assets/taeyeon.jpg';

class Karina extends React.Component{
    constructor(props) {
        super(props);
        this.state = {karina: 'aespa'};
    }

    render(){
        return (
            <div class="sideA">
                <img src={mainLogo} className="img-responsive" alt='Karina'/>
                <img src={iu} className="img-responsive" alt='Karina'/>
                <img src={taeyeon} className="img-responsive" alt='Karina'/>
                <p>{this.state.karina}</p>
            </div>
        )
    }
}
  
export default Karina;