import React,{useContext, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import data from '../Data/data'

const ProductPage = () => {

    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [products, setProducts] = useState(data.pizza)
    const [drink, setDrink] = useState(data.drinks)
    const [salad, setsalad] = useState(data.salads)
    const [sauces, setSauces] = useState(data.sauces)
    const [sides, setsides] = useState(data.sides)
    const [dessert, setdessert] = useState(data.dessert)

    useEffect(()=>{
        setProducts(()=>{
         return data.pizza.find((x)=>x.id === Number(id));
        })
    },[id])
    useEffect(()=>{
        setDrink(()=>{
         return data.drinks.find((x)=>x.id === Number(id));
        })
    },[id])
    useEffect(()=>{
        setsalad(()=>{
         return data.salads.find((x)=>x.id === Number(id));
        })
    },[id])
    useEffect(()=>{
        setSauces(()=>{
         return data.sauces.find((x)=>x.id === Number(id));
        })
    },[id])
    useEffect(()=>{
        setsides(()=>{
         return data.sides.find((x)=>x.id === Number(id));
        })
    },[id])
    useEffect(()=>{
        setProduct(()=>{
         return data.pasta.find((x)=>x.id === Number(id));
        })
    },[id])
    useEffect(()=>{
        setdessert(()=>{
            return data.dessert.find((x)=>x.id === id)
        })
    },[id])
    console.log(setProducts)

  return (
    <>
        <div className='container mt-5 pt-4 ProductPage'>
        <div className='display-6 text-center'>{product?.name}</div>
        <div className='row mt-5'>
          <div className='col-md-6 text-center'>
            <img src={product?.image} alt='...' className='radius my-3' />
            <Link to='/' className='btn btn-outline-dark'>
              Back
            </Link>
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center'>
            <div className='bg-dark text-white py-1 px-2 my-4'>
               {product?.ingredients}
            </div>
            <div>{product?.description}</div>
            <div className='display-3 text-center my-3'>R{product?.price}</div>
            <div className='text-center'>
              <button
                className='btn btn-outline-dark'
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className='my-5'></div>
      </div>
    </>
  )
}

export default ProductPage