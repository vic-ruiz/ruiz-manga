import {cargarProductos} from "./ItemData";
import {useEffect, useState} from "react"
import {Item} from "../components/Item/Item" 
import "./ItemList.css"

export const ItemList = () =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        cargarProductos()
            .then((data)=> setProducts(data))
            .catch((error)=> console.error(error))
            .finally(()=> setLoading(false))
    }, []);

    return (
        <div className= "displayList">
            {loading? (
                <h1 className="cargando"> Cargando... </h1>
            ) : (
                products.map((product)=>(
                    <Item key={product.id} product={product}/>
                ))
            )}
            
        </div>
        
    )
}
