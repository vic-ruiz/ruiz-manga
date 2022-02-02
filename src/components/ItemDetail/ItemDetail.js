import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({item}) => {

    const [counter, setCounter] = useState(0)

    const sumar = () => {
        if (item.stock > counter) setCounter((prevState)=>prevState + 1)
    }

    const restar = () => {
        if (counter > 0) setCounter((prevState)=>prevState  - 1)
    }
    return(
        <div className="itemDetail">
            <img className="imgCatalogo" src={item.img} alt={item.name} height="200"/>
            <h1> {item.name} </h1>
            <p> {item.description} </p>
            <p> Precio : {item.price} $</p>
            <p> Cantidad : {counter}</p>
            <ItemCount restar={restar} sumar={sumar} />
            <p> Total a Pagar : {counter * item.price}</p>
            <Link to='/cart'>
                <button> Agregar a Carrito de Compra</button>
            </Link>
        </div>
    ) 
}