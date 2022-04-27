import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div>
        <h1 className="greeting">{greeting}</h1>
        <ItemCount initial={1} stock={6} />
      </div>
    </div>
  );
};
