import { React, useState, useEffect } from "react";
import "./ItemDetailContainer.css"
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams, NavLink } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import db from "../../services/firebase";
import {doc, getDoc} from 'firebase/firestore'


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();

    const getItem = async (idItem) => {
      try {
        setLoading(true)
        const document = doc(db, 'items', idItem);
        const response = await getDoc(document);
        const result = {...response.data(), id: response.id}
        setItem(result)
        setLoading(false)
      } catch (error) {
        console.log (error)
      }
    }


    useEffect(() => {
      getItem(id)
    }, [id]);


  return (

    <>
    {isLoading &&
    <div className="loader">
    <PropagateLoader color={"white"} size={30} speedMultiplier={0.7} />
    </div>
    }

    {!isLoading &&
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