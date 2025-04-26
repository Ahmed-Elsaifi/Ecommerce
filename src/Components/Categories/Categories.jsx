import React, { useState } from 'react'
import styles from './Categories.module.css'
import CategoriesHooks from '../Hooks/categoriesHooks'
import { Link } from 'react-router-dom'
import ProductCategories from '../ProductCategories/ProductCategories'

const Categories = () => {
 


 const{categoriesData}= CategoriesHooks()
 console.log(categoriesData,'aisndasinjxasnj');
  

//  setId(categoriesData._id)

  return <>
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 ' >
        

      {categoriesData?.map((productCategries,index)=><ProductCategories key={productCategries._id} product={productCategries} index={index}/>)}
    </div>
    </>
  
}
export default Categories
