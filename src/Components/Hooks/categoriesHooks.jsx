import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function CategoriesHooks() {

  function allCategories(){
    return  axios.get('https://ecommerce.routemisr.com/api/v1/categories')

      // setAllCategries(data.data)

    
  }
  const {data:ahmed,isLoading:loding}=  useQuery({
    queryKey:["allCategories"],
    queryFn:allCategories,
  })
  const categoriesData=ahmed?.data.data

  return {categoriesData,loding}
  

}
