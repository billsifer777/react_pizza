import React from "react";
// @ts-ignore
import s from './Sort.module.scss';
import Select from "react-select";
import {Svg_arrow} from "./Svg_arrow";
interface Props{
}

export const Sort =(props:Props)=>{
    const options = [
        { value: 'popularity', label: 'популярности' },
        { value: 'price', label: 'цене' },
        { value: 'alphabet', label: 'алфавиту' }
    ]
    const customStyles = {
        control: (styles: any) => ({
            ...styles,
            width: '130px',
            height: '17px',
        })
    };

    return(

        <div className={s.sort}>
            <Svg_arrow id={'up'}></Svg_arrow>
            <div className={s.text}>Сортировка по:
            </div>
            <Select defaultValue={options[0]} styles={customStyles}  options={options} />
        </div>
    )
}