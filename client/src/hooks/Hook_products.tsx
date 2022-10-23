import {useEffect, useState} from "react";
import {IProduct} from "../components/Model";
import axios, {AxiosError} from "axios";

export function useProducts(){
    const [error,SetError]=useState('')
    const [loading, SetLoading] =useState(false)
    const [products, SetProducts]= useState<IProduct[]>([])
    async function fatchProducts(){
        try {
            SetError('')
            SetLoading(true)
            const responce =await axios.get<IProduct[]>('/api')
            SetProducts(responce.data)
            SetLoading(false)
        }
        catch (e:unknown){
            const error=e as AxiosError
            SetLoading(false)
            SetError(error.message)
        }
    }
    useEffect(()=>{fatchProducts()}, [])
    return {products,loading,error}
}