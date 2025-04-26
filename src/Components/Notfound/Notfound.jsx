import React from 'react'
import styles from './Notfound.module.css'
import notfound from '../../assets/images/error.svg'

const Notfound = () => {
  return (
    <>
    <div className='flex items-center justify-center' >
      <img src={notfound} alt="title " srcset="" />
    </div>
    </>
  )
}
export default Notfound
