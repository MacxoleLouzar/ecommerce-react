import React,{useContext, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import DrinksProductData from '../Data/DrinksProductData'
import MealProduct from '../Data/MealProduct'
import Extras from '../Data/Extras'

const ProductPage = () => {

    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [Extrasx, setExtras] = useState(null)
    const [DrinksProductDatax, setDrinksProductData] = useState(null)
    const [MealProductx, setMealProduct] = useState(null)
    
    const{AddToCart} = useContext(AppContext)
    
    useEffect(()=>{
      setDrinksProductData(()=>{
         return DrinksProductData.find((x)=>x.id === Number(id));
        })
    },[id]);

    useEffect(()=>{
      setMealProduct(()=>{
         return MealProduct.find((x)=>x.id === Number(id));
        })

    },[id])
    useEffect(()=>{
      setExtras(()=>{
         return Extras.find((x)=>x.id === Number(id));
        })
    },[id]);
    
  return (
    <>
    { MealProductx ?(
      <div className='container mt-5 pt-4 ProductPage'>
      <div className='display-6 text-center'>{MealProductx?.name}</div>
      <div className='row mt-5'>
        <div className='col-md-6 text-center'>
          <img src={MealProductx.image} alt='...' className='radius my-3' />
          <Link to='/meal' className='btn btn-outline-dark'>
            Back
          </Link>
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-center'>
          <div className='bg-dark text-white py-1 px-2 my-4'>
             {MealProductx.ingredients}
          </div>
          <div>{MealProductx?.description}</div>
          <div className='display-3 text-center my-3'>R{MealProductx.price}</div>
          <div className='text-center'>
            <button
              className='btn btn-outline-dark'
              onClick={() => AddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='my-5'></div>
    </div>
    ):(
      <div>
      </div>
    )};
    {DrinksProductDatax ? (
      <div className='container mt-5 pt-4 ProductPage'>
      <div className='display-6 text-center'>{DrinksProductDatax.name}</div>
      <div className='row mt-5'>
        <div className='col-md-6 text-center'>
          <img src={DrinksProductDatax.image} alt='...' className='radius my-3' />
          <Link to='/drinks' className='btn btn-outline-dark'>
            Back
          </Link>
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-center'>
          <div className='bg-dark text-white py-1 px-2 my-4'>
             {DrinksProductDatax.ingredients}
          </div>
          <div>{DrinksProductDatax?.description}</div>
          <div className='display-3 text-center my-3'>R{DrinksProductDatax.price}</div>
          <div className='text-center'>
            <button
              className='btn btn-outline-dark'
              onClick={() => AddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='my-5'></div>
    </div>
    ):(
      <div> </div>
    )};
    {
      Extrasx ? (
        <div className='container mt-5 pt-4 ProductPage'>
      <div className='display-6 text-center'>{Extrasx?.name}</div>
      <div className='row mt-5'>
        <div className='col-md-6 text-center'>
          <img src={Extrasx?.image} alt='...' className='radius my-3' />
          <Link to='/extras' className='btn btn-outline-dark'>
            Back
          </Link>
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-center'>
          <div className='bg-dark text-white py-1 px-2 my-4'>
             {Extrasx?.ingredients}
          </div>
          <div>{MealProductx?.description}</div>
          <div className='display-3 text-center my-3'>R{Extrasx?.price}</div>
          <div className='text-center'>
            <button
              className='btn btn-outline-dark'
              onClick={() => AddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='my-5'></div>
    </div>
      ):(
        <div></div>
      )
    };
  
    </>
  )
}

export default ProductPage