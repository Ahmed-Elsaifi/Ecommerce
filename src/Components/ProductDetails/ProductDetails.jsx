import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { CartContext } from '../../Context/CartContext';

export default function ProductDetails() {
  let[specificData,setSpecificData]=useState([])
  let [sora,setSora]=useState()
    const x=useParams()
     let [st,Setst]= useState()
  const{addToCart}=  useContext(CartContext)
  // let star=Math.floor(specificData.ratingsAverage)

  //Get SepesificData From Api 
async  function getSpecificProduct(){
   try{
    const {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
   setSpecificData(data.data)

   Setst(data.data.ratingsAverage)
   setSora(data.data.images)
   
   }catch(err){
    console.log(err);
    
   }
   
  }
  useEffect(()=>{
    getSpecificProduct()
  },[])
  
  return (
   <>
     <div className='grid grid-cols-1 lg:grid-cols-2 border shadow ' >
      <div className=' w-full' >
        <Swiper  loop={true} style={{height:'100%'}} >

            {sora?.map((e,index)=><SwiperSlide key={index} >
              <img src={e} className='w-full' ></img>
            </SwiperSlide>)}
        </Swiper>
     
        
      </div>
      <div className='lg:relative  ' >
        <div>
        <h1 className='my-5  font-medium text-xl py-4'>{specificData.title}</h1>
        <p className='mb-4 py-6'>{specificData.description}</p>
        <div className='flex justify-around px-4 mb-3' >
       
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {Array.from({length:st},(_,index)=>{
            return <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      })}
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{st}</span>
      </div>
      <span className='font-bold text-xl'>{specificData.price} Egp</span>
        

        </div>
        </div>
        <div className='lg:absolute lg:bottom-0 lg:right-0'>
        <button onClick={()=>addToCart(x.id)} className='rounded bg-main-color hover:bg-green-500 py-5 px-8 text-white ' > Add to Cart</button>
        </div>

        
      </div>
     </div>
     
   
   </>
  )
}
