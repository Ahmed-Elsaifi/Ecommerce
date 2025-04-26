import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SpecificCategories() {
    let[item,setItem]= useState([])
      const x=useParams()

  async function getSpecififItem() {
    try {
          const {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${x.id}`)
          setItem(data.data)
    } catch (error) {
          console.log(error);
    }
  }
    useEffect(()=>{
      getSpecififItem()
    },[])
  return  <>
      <div className="md:flex gap-10 justify-around text-3xl font-bold   md:flex-wrap border">
        <img src={item.image} className='w-full md:w-1/3' alt="" />
        <h1>{item.name}</h1>
      </div>
  </>
}
