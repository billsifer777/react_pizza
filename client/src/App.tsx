import React, {useEffect, useState} from 'react';
import axios, {AxiosError} from "axios";
import {Home} from "./pages/home/Home";
// @ts-ignore
import './styles/index.scss'
import {IProduct} from "./components/Model";
import {Product} from "./components/product/Product";
import {Basket} from "./pages/basket/Basket";
import {Navigate, Route, Routes} from "react-router-dom";
import {Blank_basket} from "./pages/blank_basket/Blank_basket";
import {useDispatch} from "react-redux";

function App() {
    const dispatch=useDispatch()
    function getNote(){
        dispatch({type:"delete_first"})
    }

    useEffect(() => {
        getNote();
    }, []);
    // useEffect(()=>{
    //     fetch('/api')
    //         .then(response=>response.json())
    //         .then(response=>Setdata(response))
    //     }
    // )
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    {/*<Route path='/shop' element={<Cart product={products[0]}/>}/>*/}
                    <Route path='/blank_basket' element={<Blank_basket/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;