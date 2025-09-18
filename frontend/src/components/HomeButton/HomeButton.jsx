 import React from 'react'
import { Link } from 'react-router-dom'
 
 const HomeButton = () => {
   return (
     <div>
       <Link to='/' className='px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-gray-300 hover:bg-gray-200'>Go to Home</Link>
     </div>
   )
 }
 
 export default HomeButton
 