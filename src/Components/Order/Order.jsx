import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';

export default function Order() {
 let[payment,setPayMent]= useState()
 const{cartId}=  useContext(CartContext)


function handelSubmit(values){
  console.log(values);
  if(payment=='cash'){
    cash(values)
  }else if (payment=='visa'){
    visa(values)
  }
 
}
async function cash(values){

 try {
  const res =await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{values},{headers:{token:localStorage.getItem('myToken')}})

  console.log('cashhhhhhhh');
  console.log(res);
  
  
 } catch (error) {
    console.log(error);
    
 }
  
  
}
async function visa(values){
  console.log(window.location.origin);
  

  try {
    const res=await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${window.location.origin}`,{values}
      ,{headers:{
        token:localStorage.getItem('myToken')
      }}
    )
    window.open(res.data.session.url,'_blank')
    console.log(res);
    
    console.log('visaaaaaaaaaaaa');
    
  } catch (error) {
    console.log(error);
    
  }
  
  
}

const formik=  useFormik({
    initialValues:{
      shippingAddress:{
        details: '',
        phone:'',
        city: ''
        }
    },
    onSubmit:handelSubmit
  })
  return <>
       <form  onSubmit={formik.handleSubmit}>
    <div className="mb-6 ">
    <label htmlFor="details" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">details</label>
    <input   onChange={(e)=>formik.setFieldValue('shippingAddress.details',e.target.value)}  type="text" id="details" name='details'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your details " required />
  </div> 
   {/*div response about handle buler and handle errors and dispaly incorrect validation  */}


  <div className="mb-6 ">
    <label htmlFor="phone" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">phone</label>
    <input    onChange={(e)=>formik.setFieldValue('shippingAddress.phone',e.target.value)}   type="tel" id="phone" name='phone'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your phone " required />
  </div> 
  <div className="mb-6 ">
    <label htmlFor="city" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">city</label>
    <input    onChange={(e)=>formik.setFieldValue('shippingAddress.city',e.target.value)}   type="text" id="city" name='city'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your city " required />
  </div> 
  <button onClick={()=>setPayMent('cash')} className='bg-main-color text-white py-2 px-3 rounded' >Chash</button >
  <button onClick={()=>setPayMent('visa')}   className='bg-main-color text-white py-2 px-3 rounded mx-5' >Visa</button>
  
   {/*div response about handle buler and handle errors and dispaly incorrect validation  */}


  
    </form>
  
  </>
   

}
