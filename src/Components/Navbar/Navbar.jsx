import React, { useContext, useEffect } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { CartContext } from '../../Context/CartContext'

const Navbar = () => {
const{token,setToken}=  useContext(AuthContext)
const {numOfCart,getAllCartItems}=useContext(CartContext)
const navigate=  useNavigate()

function logOut(){
  localStorage.removeItem('myToken')
  setToken(null)
  navigate('/login')
}
useEffect(()=>{
  getAllCartItems()
},[])

  return  <>

  <nav className="bg-main-color fixed z-50 right-0 left-0 top-0 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div className=" flex flex-wrap items-center justify-between  p-4">
      <Link to={''} className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Flowbite Logo" />
      </Link>
          <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
          </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className=" flex justify-between flex-col items-center font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-main-color md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    
            {token?<>
        
            <li>
              <NavLink to={''} className="block py-2 px-3  text-white  rounded-sm md:bg-transparent hover:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to={'/cart'} className="block py-2 px-3 text-white  rounded-sm md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</NavLink>
            </li>
            <li>
              <NavLink to={'/products'} className="block py-2 px-3 text-white  rounded-sm  md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</NavLink>
            </li>
            <li>
            <NavLink to={'/categories'} className="block py-2 px-3 text-white  rounded-sm  md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">categories</NavLink>
          </li>
        <li>
          <NavLink to={'/brands'} className="block py-2 px-3 text-white  rounded-sm  md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</NavLink>

        </li>
        <li><i className="fa-solid fa-cart-plus text-white text-xl"><span className='mx-2'>{numOfCart}</span></i></li>
       
        
        </>:null}
        {token?  <button onClick={logOut} className='rounded text-white px-5 py-2 bg-blue-600 hover:bg-blue-500  '>LogOut</button>:<>
          <li>
          <NavLink to={'login'} className="block py-2 px-3 text-white fw-[800] rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
        </li>
        <li>
          <NavLink to={'register'} className="block py-2 px-3 text-white fw-[800] rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</NavLink>
        </li>
        </>}
      
       

        
        
      </ul>
    </div>
  </div>
</nav>



    
    
    
    
    
    </>
 
}

export default Navbar
