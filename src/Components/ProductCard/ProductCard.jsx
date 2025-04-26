import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export default function ProductCard(props) {

  const {price,_id,ratingsAverage,imageCover,description,title} = props.product;
  let star=Math.floor(ratingsAverage)
  const{addToCart}=useContext(CartContext)
  
  return (
    <>
          {/* display product */}
    
  <div className=" hover:scale-105 hover:border-main-color transition-all bg-white border border-gray-200 rounded-lg relative  shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="px-5 pb-5">
      <Link to={`/details/${_id}`} >
    <div className='caart'>
  <div >
       <img className="rounded-t-lg w-full block" src={imageCover} alt="product image" />
  </div>
    <div >
        <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="tracking-tight text-gray-900 dark:text-white">{description.slice(0,2)+'....'}</p>
    </div>
    <div className="flex items-center mt-2.5 mb-5">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {Array.from({length:star},(_,index)=>{
            return <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      })}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{ratingsAverage}</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-xl  font-bold text-gray-900 dark:text-white">{price}<span>Egp</span></span>
    </div>
    </div>
      </Link>
            <button  onClick={()=>addToCart(_id)}  className="text-white ms-auto block absolute bottom-0 right-0 bg-main-color hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
    </div>
  </div>
  


    
    
    
    
    </>
  )
}
