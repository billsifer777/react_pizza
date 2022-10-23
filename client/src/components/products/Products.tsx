import React, {useEffect, useState} from "react";
import {Product} from "../product/Product";
import {IProduct} from "../Model";

// @ts-ignore
import s from './Products.module.scss';
import {Sort} from "../sort/Sort";
import {useProducts} from "../../hooks/Hook_products";
import {pizzas} from "../../data/pizzas";

interface Props{
    title:string
}

export const Products =({title}:Props)=>{
    function filter(category:string) {
        if(category==='все'){
            Setfiltered(pizzas)
        } else{
            let new_mas = [...pizzas].filter(item=>item.category===category)
            Setfiltered(new_mas)
        }
    }

    const [filtered,Setfiltered]=useState(pizzas)



    return(
        <>
            <div className={s.selection_line}>
                <div className="buttons">
                    <button className={s.button} onClick={()=>filter('все')}>Все</button>
                    <button className={s.button} onClick={()=>filter('мясные')}>Мясные</button>
                    <button className={s.button} onClick={()=>filter('вегетарианская')}>Вегетарианская</button>
                    <button className={s.button} onClick={()=>filter('гриль')}>Гриль</button>
                    <button className={s.button} onClick={()=>filter('острые')}>Острые</button>
                    <button className={s.button} onClick={()=>filter('закрытые')}>Закрытые</button></div>
            <div className={s.sort}></div>
            </div>
            <div className={s.products}>
                <div className={s.title}>{title}</div>
                <div className={s.wrapper}>
                    {filtered.length==0 && pizzas.map(product=> <Product product={product} key={product.id}/>)}   {/*если еще не фильтроапли отобразить все все*/}
                    {filtered.map(product=> <Product product={product} key={product.id}/>)}
                </div>
            </div>
        </>
    )

}


// import React, {useEffect, useState} from "react";
// import {Product} from "../product/Product";
// import {IProduct} from "../Model";
//
// // @ts-ignore
// import s from './Products.module.scss';
// import {Sort} from "../sort/Sort";
// import {useProducts} from "../../hooks/Hook_products";
// import {pizzas} from "../../data/pizzas";
//
// interface Props{
//     title:string
// }
//
// export const Products =({title}:Props)=>{
//     function filter(category:string) {
//         if(category==='все'){
//             Setfiltered(products)
//         } else{
//             let new_mas = [...products].filter(item=>item.category===category)
//             Setfiltered(new_mas)
//         }
//     }
//     const {products,error,loading} = pizzas()
//     // const {products,error,loading} = useProducts()
//     const [filtered,Setfiltered]=useState(products)
//
//
//
//     return(
//         <>
//             <div className={s.selection_line}>
//                 <div className="buttons">
//                     <button className={s.button} onClick={()=>filter('все')}>Все</button>
//                     <button className={s.button} onClick={()=>filter('мясные')}>Мясные</button>
//                     <button className={s.button} onClick={()=>filter('вегетарианская')}>Вегетарианская</button>
//                     <button className={s.button} onClick={()=>filter('гриль')}>Гриль</button>
//                     <button className={s.button} onClick={()=>filter('острые')}>Острые</button>
//                     <button className={s.button} onClick={()=>filter('закрытые')}>Закрытые</button></div>
//                 <Sort></Sort>
//             </div>
//             <div className={s.products}>
//                 <div className={s.title}>{title}</div>
//                 <div className={s.wrapper}>
//                     {filtered.length==0 && products.map(product=> <Product product={product} key={product.id}/>)}   {/*если еще не фильтроапли отобразить все все*/}
//                     {filtered.map(product=> <Product product={product} key={product.id}/>)}
//                 </div>
//             </div>
//         </>
//     )
//
// }


