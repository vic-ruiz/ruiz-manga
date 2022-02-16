import { useParams } from "react-router-dom"
import { getFirestore } from "../../firebase"
import { useEffect, useState } from "react"

export const ThankYou = ()=>{
    const {orderId} = useParams();
    const [order, setOrder] = useState();

    useEffect(() => {

        const db = getFirestore();
        const selectedCollection = db.collection("orders");
        const selectedOrder = selectedCollection.doc(orderId);


        selectedOrder
            .get()
            .then((response) => {
                if (!response.exists) console.log("Invalid Product");
                setOrder({id: response.id, ...response.data()})
            })
            .catch((error) => console.error(error))
        
    }, [orderId]);
    
    
    if (!order) return <h1>Cargando</h1>;
  return (
    <div>
      <h1> Gracias por tu compra {order.buyer.name} ! </h1>
      <h2>Resumen de compra</h2>
      {order.items.map((element)=>{
          return <p key={element.item.id}>{element.item.name} x {element.quantity}</p>
      })}
      <p>Total {order.total}</p>
    </div>
  );
        
}