import React, { useEffect, useState } from 'react'
import styles from './Brands.module.css'
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';

const Brands = () => {
  const [dataBrands,setDataBrands]=useState([])
 async function getAllBrands(){
    try {
      const {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
      console.log(data.data);
      setDataBrands(data.data)
      
      
    } catch (error) {
      console.log(error);
    }
  
  }
  useEffect(()=>{
    getAllBrands()
  },[])

 
  return  <>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
    {dataBrands.map((item)=><div key={item._id}>

      <img src={item.image} alt="" />
      <h1>{item.name}</h1>
    </div>)}

  </div>
    </>
  
}
export default Brands
