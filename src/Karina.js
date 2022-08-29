import React from 'react';
import mainLogo from './assets/cb5017936e68cdb05fdd8ef9692e815e.jpg';
import iu from './assets/iu.jpg';
import taeyeon from './assets/taeyeon.jpg';

class Karina extends React.Component{
    constructor(props) {
        super(props);
        this.state = {karina: 'dsa'};
    }
    
    //set state in class component
    state = {phy:false};
    clickCLS = () => { //= () => { is function() 
        this.setState({ phy: !this.state.phy });
    };

    render(){
        return (
            <div className="sideA">
                <img src={mainLogo} className="img-responsive img-center" alt='Karina'/>
                <img src={iu} className="img-responsive img-center" alt='Karina'/>
                <img src={taeyeon} className="img-responsive img-center" alt='Karina'/>
                <p>{this.state.karina}</p>

                <div className='faq'>
                    <div className='quest' onClick={this.clickCLS}>ABCDE?</div>
                    <div className={this.state.phy ? "onn answer" : "answer"}>12345.</div>
                </div>
            </div>
        )
    }
}
  
export default Karina;