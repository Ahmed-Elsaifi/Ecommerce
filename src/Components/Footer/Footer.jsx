import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='bg-[#2c3e50]'>


    <div className="container">

    <div className=' py-8 text-[#ecf0f1] flex justify-between items-center px-5 mt-11 text-center'>
      <div className="text  tracking-widest ">
        @copyRight <span className='font-bold' >Ecommerce</span> . All Rights Reseved
        <p className='mt-5'>Designed By <span className='font-bold'>Ahmed El-Saifi</span></p>
      </div>
    <ul className='center gap-5 text-xl'>

      <Link to={'https://www.facebook.com/profile.php?id=100092926756639'}target='_blank' >
        <li><i className='fa-brands fa-facebook hover:text-blue-900 cursor-pointer' ></i></li>
      </Link>
      <Link to={'http://youtube.com'} target='_blank' >
        <li><i className='fa-brands fa-youtube hover:text-red-700  cursor-pointer' ></i></li>
      </Link>
      <Link  to={'https://www.linkedin.com/in/ahmed-el-saifi-61963031a'} target='_blank'>
        <li><i className='fa-brands fa-linkedin hover:text-blue-500 cursor-pointer' ></i></li>
      </Link>
      <Link  to={'https://www.whatsapp.com/01080579743'} target='_blank'>
        <li><i className='fa-brands fa-whatsapp hover:text-green-500 cursor-pointer' ></i></li>
      </Link>
      <Link to={'https://www.instagram.com/ahmedhisham4494?igsh=Ym13NzJ4bXp6MWIw'} target='_blank'>
        <li><i className='fa-brands fa-instagram hover:text-red-500 cursor-pointer' ></i></li>
      </Link>
      <Link to={'https://github.com/Ahmed-Elsaifi'} target='_blank'>
        <li><i className='fa-brands fa-github hover:text-[#333] cursor-pointer' ></i></li>
      </Link>
      </ul>
    </div>

    </div>

    </div>
    </>
  )
}
export default Footer
