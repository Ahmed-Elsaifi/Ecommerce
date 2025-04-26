import React, { useState } from 'react'
import styles from './Register.module.css'
import { useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {


 let [successmesg,setSuccessMesg]= useState(null)
 let [failmesg,setFailMesg]= useState(null)
 let [loading,setLoading]=useState(false)
 const navigate =  useNavigate()

 const validation =yup.object().shape({
  name:yup.string().required('enter your name').min(3,'min lenght is 3').max(20,'max lenght is 20'),
  email:yup.string().required('enter your email').email('please inter valid email'),
  password:yup.string().required('enter your pass').matches(/^[A-z0-9]{6,15}$/,'enter a valide passsssss'),
  rePassword:yup.string().required('please inter rePass word').oneOf([yup.ref('password')],'repass dosnet matchs'),
  phone:yup.string().required('enter your phone ').matches(/^01[1250][0-9]{8}$/,'only egyption number')

 })
  
  // enter your register

async  function register(values){

  //message came from data when user not exist
  setSuccessMesg(null)
  //message came from data when user Already exist
  setFailMesg(null)
  // change button when user submit 
  setLoading(true)

  // call data from api and handle it 
    try {
      const response= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
      let data =response.data
      console.log(data.message);
      
   setSuccessMesg(data.message);
   setTimeout(() => {
    navigate('/login')
   }, 2000);
      
      
    } catch (error) {
      setFailMesg(error.response.data.message)
      
    }
    finally{
      setLoading(false)
    }
  }

// it’s response to handle form and handle validation 
const formik=  useFormik({
  initialValues:{
    
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
  
    
  },
  onSubmit:register,
  validationSchema:validation
})

  
  





  return (
    <>
      
<form  onSubmit={formik.handleSubmit} className='pt-10 w-10/12 mx-auto' >

 

   {/* input name */}
  <div className="mb-6 ">
    <label htmlFor="name" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="text" id="name" name='name'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name " required />
  </div> 
   {/*div response about handle buler and handle errors and dispaly incorrect validation  */}
  {formik.errors.name && formik.touched.name ? <div className='p-4 rounded text-red-600  bg-red-50 dark:bg-gray-800 dark:text-red-400  ' role="alert" >
    {formik.errors.name}</div>:null}

    {/* input email */}
  <div className="mb-6">
    
    <label htmlFor="email" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">Email address</label>
    <input onBlur={formik.handleBlur}  onChange={formik.handleChange} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your Email" required />
  </div> 
   {/*div response about handle buler and handle errors and dispaly incorrect validation  */}

  {formik.errors.email && formik.touched.email ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert" >
  {formik.errors.email}
  </div>:null}

                  {/* input password */}
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input onBlur={formik.handleBlur}  onChange={formik.handleChange} type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your password" required />
  </div> 
                 {/*div response about handle buler and handle errors and dispaly incorrect validation  */}

  {formik.errors.password && formik.touched.password ? <div className='p-4 rounded text-red-600  bg-red-50 dark:bg-gray-800 dark:text-red-400  ' role="alert" >
  {formik.errors.password}</div>:null}

                 {/* input rePassword */}

  <div className="mb-6">
    <label htmlFor="rePassword" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">Re Password</label>
    <input onBlur={formik.handleBlur}  onChange={formik.handleChange} name='rePassword' type="Password" id="rePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your repassword" required />
  </div> 
                 {/*div response about handle buler and handle errors and dispaly incorrect validation  */}

  {formik.errors.rePassword && formik.touched.rePassword ? <div className='p-4 rounded text-red-600  bg-red-50 dark:bg-gray-800 dark:text-red-400  ' role="alert" >
  {formik.errors.rePassword}</div>:null}

                 {/* input phone  */}
 
  <div className="mb-6">
    <label htmlFor="phone" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">phone Number</label>
    <input onBlur={formik.handleBlur}  onChange={formik.handleChange} type="tel" id="phone"  name='phone' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your phone" required />
  </div> 
                 {/*div response about handle buler and handle errors and dispaly incorrect validation  */}

  {formik.errors.phone && formik.touched.phone ? <div className='p-4 rounded text-red-600  bg-red-50 dark:bg-gray-800 dark:text-red-400  ' role="alert" >
    {formik.errors.phone}</div>:null}

  <button type="submit" className="  text-white bg-main-color hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 block  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {loading?'lodaing....':'Register Now'}</button>

                 {/* show message if data came from api */}

  {successmesg?<div>{successmesg}</div>:null}
  {failmesg?<div>{failmesg}</div>:null}
  
</form>


    </>
  )
}

export default Register
