import React, { useState } from 'react'
import AppContext from './AppContext'
// import { toast } from 'react-toastify'
import DrinksProductData from '../Data/DrinksProductData'
import MealProduct from '../Data/MealProduct'
import Extras from '../Data/Extras'

const AppState = ({children}) => {

    const [products, setProduct] = useState(MealProduct)
    const [drink, setDrink] = useState(DrinksProductData)
    const [sauces, setSauces] = useState(Extras)
    const [cart, setCart] = useState([])

    const AddToCart=(product)=>{
      // if(cart.includes(product)){
      //   toast.error(`Item already in a Cart`)
      //   return
      // }
        setCart([...cart, product])
        // toast.info(`Item added in a Cart`)
    }

    const removeFromCart = (product)=>{
      const cartItem = cart.filter((x) => x.id !== product.id)
      setCart(cartItem)
      // toast.info(`Item was removed`)
    }

    const clearCart =()=>{
      setCart([])
    }


  return (
    <AppContext.Provider value={{products, drink, sauces, cart, AddToCart, removeFromCart, clearCart }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState