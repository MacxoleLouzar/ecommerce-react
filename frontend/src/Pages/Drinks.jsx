import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import DrinkProd from "../Components/DrinkProd";

const Drinks = () => {
  const { drink } = useContext(AppContext);
  return (
    <div className="container">
      <div className="row">
        {drink.map(( product, index) => (
          <DrinkProd key={index} product={product} />
     
        ))};
      </div>
    </div>
  );
};

export default Drinks;
