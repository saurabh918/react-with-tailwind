import React from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { opticsData } from '../context/Usecontext'
import Product from '../components/Product'
import { storeData } from '../Data'

const Cart = () => {
  const {state,dispatch} = useContext(opticsData)
  const data = storeData
  console.log(data)

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center lg:grid lg:grid-cols-3'>
      {state.cart.map(p => {
        const prod = data.find(item => item.id === p);
        if(prod) {
          prod.qty = 1; //default value
          const handleQty = () => {
          prod.qty = document.getElementsByClassName("qty" + prod.id)[0].value;
          console.log(prod.qty)
          }
          const onBuyBtnClick = () => {
            let price = prod.price * prod.qty;
            dispatch({type: "Buy",payload: price})
            console.log(price)
          }
          return (
            <Product item={prod} buyButton={true} handleQty={handleQty} onBuyBtnClick={onBuyBtnClick} key={p.id}/>
          )
        }
      })}
      <button className='absolute top-5 left-5 white bg-white px-4 py-2'>Total : ${state.total}</button>
      </div>
    </>
  )
}

export default Cart