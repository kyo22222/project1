import React, { useEffect, useState} from 'react';
import Karina from './Karina';
import {phoneArr} from './product_arr_220825';
import tableSort from "table-sort-js/table-sort.js";

function Car() {

    useEffect(() => {
        tableSort()
      },[]);

    //const numbers = [1, 2, 3, 4, 5];
    // const listItems = phoneArr.map((data,key) =>
    //     <tr data-title={key}><td>{data.brand}</td><td>{data.prodname_e}</td><td>{data.srp}</td></tr>
    // );

    const [catee, setCate] = useState('');
    function clickCATE(e){
        //const {txt} = e.target.dataset.id;
        const txt = e.target.value;
        //console.log(e.target.innerText);
        setCate(txt);
    }
    const filtered = phoneArr.filter(products => {
        if(catee !== ''){
            return products.brand === catee;
        }else{
            return true;
        }   
    })

     
    return (
       
        <div className="theBOX">            
            <Karina></Karina>
           <button onClick={clickCATE} value="">ALL</button> 
           <button onClick={clickCATE} value="Audio and Video">Audio and Video</button>
           <button onClick={clickCATE} value="Mobile Handset">Mobile Handset</button>
           
            <table className='table-sort' cellSpacing="0" cellPadding="0">
                <thead><tr><th>products.brand</th><th>products.prodname_e</th><th>products.srp</th></tr></thead>
                <tbody>
                    {filtered.map(products => {
                        return (
                            <tr data-title={products.key}><td>{products.brand}</td><td>{products.prodname_e}</td><td>{products.srp}</td></tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Car;