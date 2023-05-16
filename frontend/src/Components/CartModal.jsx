import React, { useContext, useEffect, useState } from "react";
import CartComponent from "./CartComponent";
import AppContext from "../context/AppContext";

function CartModal({ onCloseModal }) {

  const {cart} = useContext(AppContext)
  const [total, setTotal] = useState(0)
 
  useEffect(()=>{
    Calculate()
  }, [cart])

  const Calculate = () =>{
    let tot = 0
    for(let i = 0; i < cart.length; i++){
      tot += Number(cart[i].price)
    }
    setTotal(tot)
  }


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={onCloseModal}
          >
            X
          </button>
        </div>
         <div className="cartitemshow">
          {cart.map((prod, index) =>(
            <CartComponent key={index} product={prod}/>
          ))}
         </div>
          <div className="col-md-4 mt-3">
              <div className="card">
                <div className="card-body text-center">
                    <h6 className="card-title">Total</h6>
                    <div className="display-5 my-3">
                      R{new Intl.NumberFormat().format(total)}
                    </div>
                </div>
              </div>
          </div>
        {/* <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
         <CartComponent/>
        </div> */}
        <div className="footer">
          <button
            onClick={onCloseModal}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
