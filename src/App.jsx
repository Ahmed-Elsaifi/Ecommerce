import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Notfound from './Components/Notfound/Notfound'
import Cart from './Components/Cart/Cart'
import Products from './Components/Products/Products'
import Categories from './Components/Categories/Categories'
import Login from './Components/Login/Login'
import Brands from './Components/Brands/Brands'
import Register from './Components/Register/Register'
import AuthContextProvider from './Context/AuthContext'
import Guard from './Guard/Guard'
import AuthGuard from './Guard/AuthGuard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import Order from './Components/Order/Order'
import SpecificCategories from './Components/SpecificCategories/SpecificCategories'



const queryClient = new QueryClient()


export default function App() {


const routes =createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Guard><Home/></Guard>},
    {path:'/cart',element:<Guard><Cart/></Guard>},
    {path:'/products',element:<Guard><Products/></Guard>},
    {path:'/categories',element:<Guard><Categories/></Guard>},
    {path:'/brands',element:<Guard><Brands/></Guard>},
    {path:'/order',element:<Guard><Order/></Guard>},
    {path:'/details/:id',element:<Guard><ProductDetails/></Guard>},
    {path:'/specificcategories/:id',element:<Guard><SpecificCategories/></Guard>},
    {path:'/login',element:<AuthGuard><Login/></AuthGuard>},
    {path:'/register',element:<AuthGuard><Register/></AuthGuard>},
    {path:"*",element:<Notfound/>}
  ]}

])



  
  return <>
  
   
      <AuthContextProvider>

        <CartContextProvider>
        <QueryClientProvider client={queryClient} >

      <RouterProvider router={routes} />
        </QueryClientProvider>
        </CartContextProvider>
        <Toaster/>




      </AuthContextProvider>

  </>
}
