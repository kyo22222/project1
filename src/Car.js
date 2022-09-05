import React, { useEffect, useState} from 'react';
import Karina from './Karina';
import './App.css';
import {phoneArr} from './product_arr_220825';
import tableSort from "table-sort-js/table-sort.js";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, Zoom } from "swiper";
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, Zoom]);

const images = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=5",
    "https://picsum.photos/200/300?random=6"
  ];

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

        <hr/>

        <Swiper id="theSWI"
        spaceBetween={0}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop
        params={{
            zoom: {
            enabled: true
            }
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        >
        {images.map((image, i) => (
            <SwiperSlide zoom key={i} className="">
            <img src={image} key={i} alt="product" className="rounded-lg" />
            </SwiperSlide>
        ))}
    </Swiper>
        <hr/>

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