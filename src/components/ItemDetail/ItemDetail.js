import React, { useState} from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'



export const ItemDetail = ({item}) => {
    const {cart , addItem, removeItem, isInCart, clearItems} = useCart();

    const [counter, setCounter] = useState(0)

    const addItemHandle= () =>{
        isInCart(item.id) ? console.log("item en carro") : addItem(item, counter)
    }

    const removeItemHandle= () =>{
        removeItem(item.id);
    }

    const clearItemsHandle= () =>{
        clearItems();
    }

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
                <button onClick={addItemHandle}> Agregar a Carrito de Compra</button>
            </Link>
            <button onClick= {()=>console.log(cart)} > Mostrar Carrito</button>
            <button onClick= {removeItemHandle} >Eliminar Item</button>
            <button onClick= {clearItemsHandle} >Limpiar Carrito</button>
        </div>
    ) 
}