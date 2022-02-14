import { useEffect, useState } from "react";
import { Item } from "../components/Item/Item";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/index";

export const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    let productsCollection;
    if (categoryId) {
      productsCollection = db
        .collection("productos")
        .where("category", "==", Number(categoryId));
    } else {
      productsCollection = db.collection("productos");
    }

    setLoading(true);

    productsCollection
      .get()
      .then((response) => {
        if (response.empty) {
          console.log("no hay items");
        }
        setProducts(
          response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="displayList">
      {loading ? (
        <h1 className="cargando"> Cargando... </h1>
      ) : (
        products.map((product) => <Item key={product.id} product={product} />)
      )}
    </div>
  );
};
