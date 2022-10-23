import React, {useState} from "react";
import {IProduct} from "../Model";
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import s from './Product.module.scss';



interface ProductProps{
    product:IProduct
}

export const Product =(props:ProductProps)=>{
    // @ts-ignore
    const pizza= useSelector (state => state.pizza.pizza)

    const [dough,Setdough]=useState("тонкое")  //какое тесто выбрано
    const [lenght,Setlenght]=useState(26)     //длина
    const [count_pizza,Setcount_pizza]=useState(0)
    const [localprice, Setlocalprice]=useState(props.product.price)

    const [style_dough_button_1,Set_style_dough_button_1]=useState(s.button_dough_pressed)   //стили кнопки выбора теста(по умолчанию)
    const [style_dough_button_2,Set_style_dough_button_2]=useState(s.dough_item)

    const [style_lenght_button_26,Set_style_lenght_button_26]=useState(s.button_lenght_pressed) //стили кнопки выбора размерв питцы(по умолчанию)
    const [style_lenght_button_30,Set_style_lenght_button_30]=useState(s.lenght_item)
    const [style_lenght_button_40,Set_style_lenght_button_40]=useState(s.lenght_item)



    const dispatch=useDispatch()

    const add_count_pcs=()=>{
        dispatch({type:"change_basket_full"})
        Setcount_pizza(count_pizza+1)                     //увеличиваем локальный счетчик питц
        dispatch({type:"add_count",payload: 1})          //увеличиваем общий счетчик товаров
        dispatch({type:"add_price",payload: localprice}) //отправляем в хедер цену (добавляем)
        for (let i = 0; i <pizza.lenght; i++) {
            if(pizza.name==props.product.name){
                console.log('fdfdfdf')
            }
        }
        dispatch({type:"add_in_basket",payload: {img: props.product.image, name:props.product.name, dough:dough, lenght:lenght, count:count_pizza+1,price:localprice}})
    }
    // if (count_pizza>0&&count_pizza!=localprice/props.product.price){
    //     Setlocalprice(count_pizza*props.product.price)
    // }
    function change_dough(button:number){
        if(button==1){
            Set_style_dough_button_1(s.button_dough_pressed)
            Set_style_dough_button_2(s.dough_item)
            Setdough('тонкое')
        }
        else{
            Set_style_dough_button_1(s.dough_item)
            Set_style_dough_button_2(s.button_dough_pressed)
            Setdough('традиционное')

        }
    }  // меняет стиль кнопки типа теста
    function change_lenght(button:number){
        if(button==26){
            Setlenght(26)
            Setlocalprice(props.product.price)
            Set_style_lenght_button_26(s.button_lenght_pressed)
            Set_style_lenght_button_30(s.lenght_item)
            Set_style_lenght_button_40(s.lenght_item)
        }
        if(button==30){
            Setlenght(30)
            Setlocalprice(props.product.price+105)
            Set_style_lenght_button_30(s.button_lenght_pressed)
            Set_style_lenght_button_26(s.lenght_item)
            Set_style_lenght_button_40(s.lenght_item)
        }
        if(button==40){
            Setlenght(40)
            Setlocalprice(props.product.price+205)
            Set_style_lenght_button_40(s.button_lenght_pressed)
            Set_style_lenght_button_30(s.lenght_item)
            Set_style_lenght_button_26(s.lenght_item)
        }
    }  // меняет стиль кнопки длины

    return(
        <div className={s.pizza}>
            <img src={props.product.image} alt=""/>
            <div className={s.name}>{props.product.name}</div>
            <div className={s.wrapper_switch}>
                <div className={s.dough}>
                    <button className={style_dough_button_1} onClick={()=> change_dough(1)}>тонкое</button>
                    <button className={style_dough_button_2} onClick={()=> change_dough(2)}>традиционное</button>
                </div>
                <div className={s.lenght}>
                    <button className={style_lenght_button_26} onClick={()=> change_lenght(26)}>26 см.</button>
                    <button className={style_lenght_button_30} onClick={()=> change_lenght(30)}>30 см.</button>
                    <button className={style_lenght_button_40} onClick={()=> change_lenght(40)}>40 см.</button>
                </div>
            </div>
            <div className={s.wrapper}>
                <div className={s.price}>от {localprice}</div>
                <button className={s.button_add} onClick={add_count_pcs}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                    </svg>
                    <div className={s.button_text}>добавить</div>
                    {count_pizza > 0 && <div className={s.pcs}>{count_pizza}</div>}
                </button>
            </div>
        </div>
    )
}