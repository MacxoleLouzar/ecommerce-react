
 export const initialCartState = {
  product: [],
  totalCost: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        product: [
          ...state.product,
          {
            ...action.payload.product,
            qautity: 1,
          },
        ],
        totalCost: state.totalCost + action.payload.product.price,
      };

    case "REMOVE_FROM_CART":
      const productToRemove = state.product.find(
        (product) => product.id === action.payload.id
      );

      const updateProducts = state.product.filter(
        (product) => product.id !== action.payload.id
      );

      const updateCost =
        state.totalCost - productToRemove.price * productToRemove.qautity;

      return {
        ...state,
        product: updateProducts,
        totalCost: updateCost,
      };

      case "INCREASE_PRODUCT":
      const productToIncrease = state.product.find(
        (product) => product.id === action.payload.id
      );
      productToIncrease.qautity +=1;
      return{
        ...state,
        product: [...state.product],
        totalCost: state.totalCost + productToIncrease.price,
      };
      default:
        return state;
  }
};

export default cartReducer;
