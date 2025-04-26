import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCategories(props) {


   const{image,name,_id}= props.product;
  
  return <>
  
  
    <Link to={`/specificCategories/${_id}`} >
    
   <div >
   <img src={image} className='w-full  h-[300px] rounded '  alt="" />
   <h2 className='py-2 font-bold'>{name}</h2>
   </div>   
    
    
    </Link>

  </>
   
}
