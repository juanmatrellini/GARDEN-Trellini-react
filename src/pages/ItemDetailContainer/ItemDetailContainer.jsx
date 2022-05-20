import { React, useState, useEffect } from "react";
import "./ItemDetailContainer.css"
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams, NavLink } from "react-router-dom";
// import PropagateLoader from "react-spinners/PropagateLoader";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import { doc, getDoc, getFirestore } from 'firebase/firestore'


function getItem(id) {
  const db = getFirestore();

  const itemData = doc(db, 'items', id);

  return getDoc(itemData);
}


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    // const [isLoading, setLoading] = useState(false);
    const { id } = useParams();


    useEffect(() => {
      getItem(id)
        .then(snapshot => {
            setItem({...snapshot.data(), id: snapshot.id});
        })
    }, [id]);


  return (

    // <>
    //   {!isLoading &&
    //     <div className="loader">

    //       <PropagateLoader color={"white"} size={30} speedMultiplier={0.7} />
    //     </div>
    //   }

    //   {isLoading &&
      <>
        <div className="detailContainer">
          <ItemDetail item={item} />
        </div>
        <NavLink to='/'><ButtonDefault title={"Volver"} /></NavLink>
    </>
        

    //   }
    // </>

  )
}