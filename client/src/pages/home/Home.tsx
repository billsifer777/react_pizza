import React from "react";

// @ts-ignore
import s from './Home.module.scss';
import {Header} from "../../components/header/Header";
import {Sort} from "../../components/sort/Sort";
import {Products} from "../../components/products/Products";
import {useDispatch, useSelector} from "react-redux";
import {Product} from "../../components/product/Product";
import {Product_in_basket} from "../../components/product_in_basket/Product_in_basket";

interface Props{
}


export const Home =(props:Props)=>{
    // @ts-ignore
    const direct=useSelector(state => state.direct.direct)
// @ts-ignore
    const pizza= useSelector (state => state.pizza.pizza)
    return (
        <div className={s.home}>
            <Header title={'самая вкусная пицца во вселенной'}></Header>
            <div className={s.wrapper}>
            </div>
            <Products title={'Все пиццы'}></Products>
        </div>
    )
}