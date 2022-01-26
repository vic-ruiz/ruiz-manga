import {useEffect, useState} from "react"
import {Item} from "../components/Item/Item" 
import "./ItemList.css"

export const ItemList = () =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const URL = "http://localhost:3001/productos"
        setLoading(true)
        fetch(URL)
            .then((response)=> response.json())
            .then((json)=> setProducts(json))
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
