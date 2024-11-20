import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './pages/MainLayout'
import Blog from './pages/Blog'
function App() {
   const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainLayout />} />
    <Route path="/blog" element={<Blog />} />
    </>
    )
)
  
  return <RouterProvider router={router} />

}

export default App