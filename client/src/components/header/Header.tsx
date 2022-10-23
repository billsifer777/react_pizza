import React, {useState} from "react";

// @ts-ignore
import s from './Header.module.scss';
import {Svg_watermelon} from "./Svg_watermelon";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

interface Props{
    title:string
}

export const Header =({title}:Props)=>{

    const dispatch=useDispatch()
    // @ts-ignore
    const pcs= useSelector (state => state.pcs.pcs)
    // @ts-ignore
    const price= useSelector (state => state.price.price)
    // @ts-ignore
    const direct= useSelector (state => state.direct.direct)

    return(
        <div className={s.header}>
            <div className={s.logo}>
                <div className={s.logo_svg}><Svg_watermelon></Svg_watermelon> </div>
                <div className={s.text}>
                    <div className={s.title}>REACT PIZZA</div>
                    <div className={s.sub_title}>{title}</div>
                </div>
            </div>
            {/*<Link to={`/cart/${id}`}><div className={s.button_add_card}>Add to Cart</div></Link>*/}
            {title=='самая вкусная пицца во вселенной'&& <Link  to={direct}>
                <button   className={s.basket} onClick={()=>dispatch({type:"delete_in_basket",payload: {name:''}})}>
                    <div className={s.wrapper}>
                        <div className={s.many}>{price} ₽</div>
                        <div className={s.pcs}>
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {pcs}
                        </div>
                    </div>
                </button>
            </Link>}
        </div>
    )
}