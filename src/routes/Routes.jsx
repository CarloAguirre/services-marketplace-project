import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { CreateAccount } from '../pages/CreateAccount'
import { CreateProduct } from '../pages/CreateProduct'
import { CargarImagenProducto } from '../pages/CargarImagenProducto'



export const Router = () => {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route exact path= "/login" element={<Login />} />
          <Route exact path= "/" element={<Home />} />
          <Route exact path= "/create-account" element={<CreateAccount />} />
          <Route exact path= "/create-tour" element={<CreateProduct />} />
          <Route exact path= "/upload-service-image" element={<CargarImagenProducto />} /> 
          {/* <Route exact path= "/cloud" element={<CloudinaryTest />} />    */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

