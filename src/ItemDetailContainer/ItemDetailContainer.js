import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../components/ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getFirestore } from "../firebase/index";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = db.collection("productos");

    const selectedProduct = productsCollection.doc(productId);

    setLoading(true);

    selectedProduct
      .get()
      .then((response) => {
        if (!response.exists) console.log("Invalid Product");
        setItem({ ...response.data(), id: response.id });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading || !item) return <h1>Cargando</h1>;
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};
