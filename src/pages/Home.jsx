import React from 'react'
import Navbar from '../components/Navbar'
import { storeData } from '../Data'
import Product from '../components/Product'
const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className='text-3xl text-center font-semibold mt-2 py-4'>Optics store</h1>
      <h2 className='text-4xl tracking-wide py-4 pl-8'>Products</h2>
        <div className='flex flex-col items-center lg:grid lg:grid-cols-3'>
          {storeData.map((item,i) => {
            return (
              <Product item={item} key={i} />
            )
          })}
        </div>
    </>
  )
}
export default Home