
import { React, useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import db from "../../services/firebase";
import {collection, getDocs, query, where} from 'firebase/firestore'



export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { categoryId } = useParams();

  const getData = async (category) => {
    try {
      setLoading(true)
      const document = category 
        ? query(collection(db, "items"), where ('type', '==', category))
        : collection(db, "items")
      const col = await getDocs(document);
      const result = col.docs.map((doc) => doc = { ...doc.data(), id: doc.id})
      setProducts(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getData(categoryId)
    }, [categoryId]);

  return (
    <>
      {isLoading &&
        <div className="loader">
          <PropagateLoader color={"white"} size={30} speedMultiplier={0.7} />
        </div>
      }


      {!isLoading &&
        <div className="container">
          <ItemList products={products} />
        </div>
      }
    </>

  );
};