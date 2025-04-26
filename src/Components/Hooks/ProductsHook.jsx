import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

export default function ProductsHook() {




  async function getAllProduct (){
    try{
    // setLodaing(true)
    return  axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }catch(err){
    console.log(err);
  }
  }
const {data,isLoading}=  useQuery({
    queryKey:['allProducts'],
    queryFn: getAllProduct,
    
  })
  const allData=data?.data.data

  return {allData,isLoading}
}
