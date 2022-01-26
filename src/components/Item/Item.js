import React from 'react'
import { ItemCount } from "../ItemCount/ItemCount";
import "./Item.css"

export const Item = ({product}) => {
    return(
        <div className="productosList" >
            <h1>{product.name} </h1>
            <button> Ver detalle</button>
            <ItemCount stock={product.stock} initial={0} />
        </div>
    ) 
}