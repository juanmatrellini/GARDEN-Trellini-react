import { React, useState, useEffect } from "react";
import "./ItemDetailContainer.css"
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams, NavLink } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";



export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchData = async (idItem) => {
    const res = await fetch("/JSON/ApiData.json");
    const data = await res.json();

    const itemFiltered = data.filter(item => item.id === parseInt(idItem));
    setItem(itemFiltered[0])
  }


  useEffect(() => {
    setTimeout(() => { fetchData(id); setLoading(true) }, 2000)
  }, [id])


  return (

    <>
      {!isLoading &&
        <div className="loader">

          <PropagateLoader color={"white"} size={30} speedMultiplier={0.7} />
        </div>
      }

      {isLoading &&
      <>
        <div className="detailContainer">
          <ItemDetail item={item} />
        </div>
        <NavLink to='/'><ButtonDefault title={"Volver"} /></NavLink>
        </>
        

      }
    </>

  )
}