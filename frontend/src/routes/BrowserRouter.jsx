import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NavBar from '../layout/NavBar/NavBar';
import MainHome from '../pages/Home/MainHome';
import MainFavorite from '../pages/Faviourite/MainFavorite';
import Error from '../pages/Error/Error';

const BrowserRouter = () => {

  // creating browser router
  const router = createBrowserRouter([
    {
      path : "/",
      element : <MainHome/>,
      errorElement : <Error/>

    },
    {
      path : "/favorite",
      element : <MainFavorite/>,
      errorElement : <Error/>

    },
    {
      path : "/nav",
      element : <NavBar/>,
      errorElement : <Error/>

    }
  ])


  return (
    <div>
      <RouterProvider router= {router}/>
    </div>
  )
}

export default BrowserRouter
