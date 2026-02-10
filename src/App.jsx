
import { useEffect, useState } from 'react';
import './App.css'
import Home from './component/pages/home/home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import Contact from './component/pages/Contact/Contact';
function App() {
  useEffect(()=>{

  movieshandler()

  }, [])
  const [films , setfilms]= useState([])
      async function movieshandler() {
        const response = await fetch('https://www.omdbapi.com/?s=star%20wars&apikey=d7d275b8');
        const data = await response.json();
        const datatransForm = data.Search.map((movieitem)=>{
            return{
              id : movieitem.imdbId ,
              title : movieitem.Title ,
              year :movieitem.Year ,
              poster : movieitem.Poster ,
              type : movieitem.Type
            }
        })
        setfilms(datatransForm)
      }

      const routes = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<Layout/>}errorElement={<h2>Error</h2>}>
            <Route path='/' element={<Home myfilms={films}/>}/>
            <Route path='/Contact' element={<Contact />}/>
          </Route>
        )
      )

  return (
    <>
   <RouterProvider router={routes} />
    </>
  )
}

export default App
