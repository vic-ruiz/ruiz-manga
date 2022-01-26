import React from 'react'
import { ItemDetail } from '../components/ItemDetail/ItemDetail';

const getItem = (item) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(item),1000)
    });
}

export const ItemDetailContainer = ({product}) => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getItem(product)
            .then((data)=> setItem(data))
            .catch((error)=> console.error(error))
            .finally(()=> setLoading(false))
    }, []);

    return (
        <div>
            {loading? (
                <h1 className="cargando"> Cargando... </h1>
            ) : (
                <ItemDetail item={item} />
            )}
            
        </div>
    )
}