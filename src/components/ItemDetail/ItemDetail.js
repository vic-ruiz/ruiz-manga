import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import "./ItemDetail.css"

export const ItemDetail = ({item}) => {
    return(
        <div className="itemDetail">
            <img className="imgCatalogo" src={item.img} alt={item.name} height="200"/>
            <h1> {item.name} </h1>
            <p> {item.description} </p>
            <p> Precio : {item.price} $</p>
            <ItemCount stock={item.stock} initial={0} />
        </div>
    ) 
}