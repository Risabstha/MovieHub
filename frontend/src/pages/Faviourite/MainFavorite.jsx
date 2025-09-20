import React from 'react'
import NavBar from '../../layout/NavBar/NavBar'
import Favorite from './Favorite'

const MainFavorite = () => {
  return (
    // <div className='bg-white text-black dark:bg-[#211f1f] dark:text-[#e8e3e3]'>
    <div>
        <NavBar/>
        <Favorite/>
    </div>
  )
}

export default MainFavorite
