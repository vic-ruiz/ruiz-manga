import React from 'react'

export const ItemDetail = ({item}) => {
    return(
        <div>
            <img clasName="imgCatalogo" src={item.img} alt={item.name} height="200"/>
            <p> {item.description} </p>
            <p> Precio : {item.price} $</p>
        </div>
    ) 
}