
import { React, useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";


export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState();
  const { categoryId } = useParams();

  const fetchData = async (category) => {
    const res = await fetch("/JSON/ApiData.json");
    const data = await res.json();

    setLoading(false)
    setTimeout(() => { setLoading(true)
    }, 2000);

    if (category) { setProducts(data.filter(p => p.type === category)) }
    else {
      setProducts(data)

    }
  }


  useEffect(() => {
    fetchData(categoryId)}, [categoryId])


  return (
    <>
      {!isLoading &&
        <div className="loader">
          <PropagateLoader color={"white"} size={30} speedMultiplier={0.7} />
        </div>
      }


      {isLoading &&
        <div className="container">
          <ItemList products={products} />
        </div>
      }
    </>

  );
};