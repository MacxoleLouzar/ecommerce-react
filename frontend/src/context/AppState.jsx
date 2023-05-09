import React, { useState } from 'react'
import AppContext from './AppContext'
//import data from '../Data/data'
import DrinksProductData from '../Data/DrinksProductData'
import MealProduct from '../Data/MealProduct'
import Extras from '../Data/Extras'

const AppState = ({children}) => {

    const [products, setProduct] = useState(MealProduct)
    const [drink, setDrink] = useState(DrinksProductData)
    const [sauces, setSauces] = useState(Extras)
   


  return (
    <AppContext.Provider value={{products, drink, sauces }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState