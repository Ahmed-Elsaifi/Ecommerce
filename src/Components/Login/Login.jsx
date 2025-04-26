import React, { useContext, useEffect, useState } from 'react'
import styles from './Login.module.css'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

const Login = () => {
  let[successmesg,setSuccessMesg]=  useState(null)
  let [failmesg,setFailMesg]= useState(null)
  let [loding,setLoading]= useState(false)
  const {setToken}=useContext(AuthContext)
  const navigate= useNavigate()
  const validation=yup.object().shape({
      email:yup.string().required('enter your email').email('please inter valid email'),
      password:yup.string().required('enter your pass').matches(/^[A-z0-9]{6,15}$/,'enter a valide passsssss'),
  })
  async function login (values){
      setLoading(true)
      setFailMesg(null)
      setSuccessMesg(null)
    try{
      const response=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
      console.log(response.data);
      setSuccessMesg(response.data.message)
      setToken(response.data.token)
      localStorage.setItem('myToken',response.data.token)
    setTimeout(()=>{
        navigate('/')
    },1000)
    }
    catch(error){
      console.log(error.response.data.message);
      setFailMesg(error.response.data.message)
    }
    finally{
      setLoading(false)
    }
  }
const formik=  useFormik({
    initialValues:{
    email:'',
    password:''
  },
    onSubmit:login,
    validationSchema:validation
  }
)
  return (
    <>
     {/* input name */}
    <form  onSubmit={formik.handleSubmit}>
    <div className="mb-6 ">
    <label htmlFor="email" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">email</label>
    <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="text" id="email" name='email'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name " required />
  </div> 
   {/*div response about handle buler and handle errors and dispaly incorrect validation  */}
  {formik.errors.email && formik.touched.email ? <div className='p-4 rounded text-red-600  bg-red-50 dark:bg-gray-800 dark:text-red-400  ' role="alert" >
    {formik.errors.email}</div>:null}
  <div className="mb-6 ">
    <label htmlFor="password" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">password</label>
    <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="password" id="password" name='password'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name " required />
  </div> 
   {/*div response about handle buler and handle errors and dispaly incorrect validation  */}
  {formik.errors.password && formik.touched.password ? <div className='p-4 rounded text-red-600  bg-red-50 dark:bg-gray-800 dark:text-red-400  ' role="alert" >
    {formik.errors.password}</div>:null}
    <button type="submit" className="  text-white bg-main-color hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 block  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {loding?'loding...':'Login'}</button>
    {successmesg?<div className='bg-green-500 w-1/2 mx-auto rounded py-2 shadow text-white'>{successmesg}</div>:null}
    {failmesg?<div className='bg-red-500 w-1/2 mx-auto rounded py-2 shadow text-white' >{failmesg}</div>:null}
    </form>
    </>
  )
}
export default Login
