import {useEffect, useState} from "react"
import {Item} from "../components/Item/Item" 
import "./ItemListContainer.css"
import {useParams} from "react-router-dom"

export const ItemListContainer = () =>{

    const {categoryId}  = useParams();

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

    if (categoryId == null){
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
    } else {
        return (
            <div className= "displayList">
                {loading? (
                    <h1 className="cargando"> Cargando... </h1>
                ) : (
                    products.filter(product => product.category==Number(categoryId)).map((product)=>(
                        <Item key={product.id} product={product}/>
                    ))
                )}
                
            </div>
            
        )
    }

    
}
