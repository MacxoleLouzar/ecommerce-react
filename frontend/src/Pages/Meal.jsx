import MealProd from "../Components/MealProd";
import { useContext} from "react";
import AppContext from "../context/AppContext";

const Meal = () => {
  const { products, salad } = useContext(AppContext);

  return (
    <div className="container">
      <div className="row">
        {products.map((prod, index) => (
          <MealProd key={index} product={prod} />
          
        ))}
        {salad.map((prod, index) => (
          <MealProd key={index} product={prod} />
          
        ))}
      </div>
    </div>
  );
};

export default Meal;
