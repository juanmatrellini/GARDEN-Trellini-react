import { React, useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/JSON/ApiData.json");
    const data = await res.json();

    setProducts(data)
  }

  useEffect(() => {
    setTimeout(() => fetchData(), 2000);
  }, [])



  return (
    <div className="container">
      <ItemList products={products} />
      </div>
  );
};
