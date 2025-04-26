import axios from 'axios'
import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast'

export  const CartContext=createContext()

export default function CartContextProvider({children}) {
  let [allCat,setAllCart]= useState([])
  let [numOfCart,setNumOfCart]=useState()
  let [totalPrice,setTotalPrice]=useState()
  let[cartId,setCartId]=useState()
  let [price,setPrice]=useState()

async  function addToCart(id){
  try {
    const {data}=await  axios.post('https://ecommerce.routemisr.com/api/v1/cart',{productId:id},{headers:{token:localStorage.getItem('myToken')}
})
  if(data.status=='success'){
    toast.success ('Add To Cart Succeesfully')
    setCartId(data.cartId)
    setNumOfCart(data.numOfCartItems)
  }
  console.log(data);
    
  } catch (error) {
    console.log(error);
  }
}

async function getAllCartItems() {
  try {
const{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
    headers:{
      token:localStorage.getItem('myToken')
    }
  })
  // console.log(data.data.products);
  setAllCart(data.data.products)
  setNumOfCart(data.numOfCartItems)
  setTotalPrice(data.data.totalCartPrice)
  setCartId(data.cartId)
  console.log(data.cartId);

 } catch (error) {
  console.log(error);
}
}
async function updateCart(id,count){
  try {
   const{data}= await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count},{headers:{
      token:localStorage.getItem('myToken')
    }})
    console.log(data,'catttttttwwww');
    if(data.status=='success'){
      setAllCart(data.data.products)
      console.log(data.data.products);
      
      setTotalPrice(data.data.totalCartPrice)
      setNumOfCart(data.numOfCartItems)
      console.log(data.data.products.price);
      
      setPrice(data.price)
      console.log(data.data.totalCartPrice);
    }
  } catch (error) {
    console.log(error);
  }
}
async function deleteCart(id){
  try {
    const {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers:{token:localStorage.getItem('myToken')}})

    console.log(data,'deleteeeeeeeeeeeee');
    if(data.status=='success'){
      setAllCart(data.data.products)
      setTotalPrice(data.data.totalCartPrice)
      setNumOfCart(data.numOfCartItems)
    }
  } catch (error) {
    console.log(error);
  }
}

  return (
    <CartContext.Provider value={{addToCart,getAllCartItems,allCat,numOfCart,updateCart,price,totalPrice,deleteCart,cartId}}>
      {children}
    </CartContext.Provider>
  )
}
