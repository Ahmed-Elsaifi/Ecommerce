import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard'
import {BounceLoader} from 'react-spinners'

import sora from '../../assets/images/slider-image-1.jpeg'
import sora2 from '../../assets/images/slider-image-2.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import sora3 from '../../assets/images/blog-img-1.jpeg'
import sora4 from '../../assets/images/blog-img-2.jpeg'
import { useQuery } from '@tanstack/react-query'
import Categories from '../Categories/Categories'
import CategoriesHooks from '../Hooks/categoriesHooks'
import ProductsHook from '../Hooks/ProductsHook'
const Home = () => {

  const {categoriesData}=CategoriesHooks()
  const {allData,isLoading} = ProductsHook()

// async function getAllProduct (){
//     try{
//     // setLodaing(true)
//     return  axios.get('https://ecommerce.routemisr.com/api/v1/products')
//     }catch(err){
//     console.log(err);
//   }
//   }
// const {data,isLoading}=  useQuery({
//     queryKey:'allProducts',
//     queryFn: getAllProduct,
    
//   })
//   const allData=data?.data.data
  // function allCategories(){
  //   return  axios.get('https://ecommerce.routemisr.com/api/v1/categories')

  //     // setAllCategries(data.data)

    
  // }
// const {data:ahmed,isLoading:loding}=  useQuery({
//     queryKey:"allCatigries",
//     queryFn:allCategories
//   })
//   const allDatacat=ahmed?.data.data
   

  return (
    <>
    {/* swiper Home */}
  <div className="grid grid-cols-6 pb-4 ">
      <div className="  col-span-4">
        <Swiper loop={true} slidesPerView={1} style={{height:'100%'}} >
          <SwiperSlide>
            <img className='w-full h-full block'  src={sora} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img  className='w-full h-full block' src={sora2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" col-span-2">
        <img className='h-1/2'   src={sora3} alt="" />
        <img className='h-1/2'  src={sora4} alt="" />
      </div>
    </div>  
    {/*Display  Data form Categories */}
    <div className='pb-8'>
    <Swiper slidesPerView={5} loop={true} style={{height:'100%'}} >
    {categoriesData?.map((productcat)=><SwiperSlide  product ={productcat}key={productcat._id} >
      <img src={productcat.image} className='w-full h-[200px] ' alt="" />
      <p>{productcat.name}</p>
    </SwiperSlide>)}
    </Swiper>
    </div>
    {/* disPlay AllData */}
   {isLoading?<div className='bg-red-300 h-screen flex justify-center items-center ' ><BounceLoader/></div>:<>
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {allData.map((pro)=><ProductCard product={pro}key={pro._id} />)}
      </div>
   </>}
    </>
  )
}
export default Home
