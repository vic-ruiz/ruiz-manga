import React from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../components/ItemDetail/ItemDetail';
import {useEffect, useState} from "react"



export const ItemDetailContainer = () => {

    const {id}  = useParams();
    const [item, setItem] = useState();
    const [loading,setLoading] = useState(false)



    useEffect(() => {
        const URL = `http://localhost:3001/productos/${id}`
        setLoading(true)
        fetch(URL)
            .then((res)=> res.json())
            .then((data)=> setItem(data))
            .finally(()=> setLoading(false))
    }, [id])
    



    if (loading || !item ) return (
        <h1>Cargando</h1>
    ); return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
    
    
   
}