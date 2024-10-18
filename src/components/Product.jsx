import React from 'react'
import { useContext } from 'react'
import { opticsData } from '../context/Usecontext'

const Product = ({item,buyButton,handleQty,onBuyBtnClick}) => {
  const {state,dispatch} = useContext(opticsData)
  const handleRemove = () => {
    dispatch({type: "Delete", payload: item.id})
    dispatch({type:"ClearTotal"})
  }
  return (
    <div className='mx-auto px-8 border border-gray-200 rounded-lg'>
      <img src={item.image} alt='optics' /> 
      <p className='text-xl'>{item.name}</p>
      <p className='text-lg'>$ {item.price}</p>
      <div className="btn-container flex justify-center basis-2/4">
      {buyButton ? <div className='qty-container flex items-center'><p className='basis-2/4'> Quantity <input className={'qty'+item.id+ ' w-10'} type="number" defaultValue={1} onChange={()=>handleQty()} /></p> <button className='bg-blue-500 text-white p-2 ml-auto mb-4 block basis-2/4' onClick={()=>onBuyBtnClick()} >Buy</button></div> : ""}
      {state.cart.some(p => p === item.id) ? <button className='bg-red-500 text-white p-2 mx-auto mb-4 block basis-2/4' onClick={()=>handleRemove()} >Remove from cart</button> : <button className='bg-green-500 text-white p-2 mx-auto mb-4 block' onClick={()=>dispatch({type: "Add", payload: item.id})} >Add to cart</button>}
      </div>
    </div>
  )
}

export default Product