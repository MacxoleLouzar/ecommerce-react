import React, { useState } from 'react'
import AppContext from './AppContext'
import data from '../Data/data'

const AppState = ({children}) => {

    const [products, setProduct] = useState(data.pizza)
    const [drink, setDrink] = useState(data.drinks)
    const [salad, setsalad] = useState(data.salads)
    const [sauces, setSauces] = useState(data.sauces)
    const [sides, setsides] = useState(data.sides)
    const [dessert, setdessert] = useState(data.dessert)
    const [pasta, setPasta] = useState(data.pasta)


  return (
    <AppContext.Provider value={{products, drink, salad, sauces, dessert, sides, pasta }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState