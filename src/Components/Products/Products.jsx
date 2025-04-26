import React from 'react'
import styles from './Products.module.css'
import ProductsHook from '../Hooks/ProductsHook'
import ProductCard from '../ProductCard/ProductCard'
import { BounceLoader } from 'react-spinners'

const Products = () => {
  const {allData,isLoading}=ProductsHook()
  return (
    <>
     {/* disPlay AllData */}
   {isLoading?<div className='bg-red-300 h-screen flex justify-center items-center ' ><BounceLoader/></div>:<>
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {allData.map((pro)=><ProductCard product={pro}key={pro._id} />)}
      </div>
   </>}
    </>
  )
}
export default Products
