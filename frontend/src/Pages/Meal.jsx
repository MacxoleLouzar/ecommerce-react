import MealProd from "../Components/MealProd";
import { useContext} from "react";
import AppContext from "../context/AppContext";

const Meal = () => {
  const { products, salad, pasta } = useContext(AppContext);

  return (
    <div className="container">
      <div className="row">
        {products.map((prod, index) => (
          <MealProd key={index} product={prod} />
          
        ))}
        {salad.map((prod, index) => (
          <MealProd key={index} product={prod} />
        ))}

        {pasta.map((product, index) =>(
          <MealProd key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Meal;
