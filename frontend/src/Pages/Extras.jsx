import {useContext} from 'react'
import DrinkProd from '../Components/DrinkProd'
import AppContext from '../context/AppContext'


const Extras = () => {

  const {sauces, sides} = useContext(AppContext)
  return (
    <div className="container">
      <div className="row">
         {sauces.map((prod, index)=>(
          <DrinkProd key={index} product={prod} />
        ))};
      </div>
    </div>
  )
}

export default Extras