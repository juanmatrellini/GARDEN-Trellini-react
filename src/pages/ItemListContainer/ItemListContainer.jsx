
import { React, useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


function getProducts (category) {
  const db = getFirestore();

  const itemsCollection = collection(db, 'items');

  const q = category && query(
    itemsCollection,
    where('category', '==', category)
  )
    return getDocs(q || itemsCollection);
  
}



export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  // const [isLoading, setLoading] = useState();
  const { categoryId } = useParams();


  useEffect(() => {
    getProducts(categoryId)
    .then(snapshot => {
      setProducts(snapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
      }))
    })
    .catch(err => {
      console.log(err);
      alert('Ocurrion un error')
    })
  }, [categoryId]);


  return (
    // <>
    //   {!isLoading &&
    //     <div className="loader">
    //       <PropagateLoader color={"white"} size={30} speedMultiplier={0.7} />
    //     </div>
    //   }


    //   {isLoading &&
        <div className="container">
          <ItemList products={products} />
        </div>
    //   }
    // </>

  );
};