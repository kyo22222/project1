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

    function sortAudio(){
        const filtered = phoneArr.filter(products => {
            return products.brand === 'Audio and Video';
        })
    }
    
    //console.log(filtered);

    return (
        
        <div className="theBOX">
            
            <Karina></Karina>
            <button onClick={sortAudio}>Audio</button>
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