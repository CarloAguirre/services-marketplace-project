import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { CreateAccount } from '../pages/CreateAccount'
import { CreateProduct } from '../pages/CreateProduct'
import { CargarImagenProducto } from '../pages/CargarImagenProducto'
import { CargarImagenItinerario } from '../pages/CargarImagenItinerario'
import { TourDetails } from '../pages/TourDetails'
import { PerfilGuia } from '../pages/PerfilGuia'
import { Contact } from '../pages/Contact'
import { Error404 } from '../pages/Error404'





export const Router = () => {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route exact path= "/login" element={<Login />} />
          <Route exact path= "/" element={<Home />} />
          <Route exact path= "/create-account-241500-03" element={<CreateAccount />} />
          <Route exact path= "/create-tour" element={<CreateProduct />} />
          <Route exact path= "/upload-service-image" element={<CargarImagenProducto />} />
          <Route exact path= "/upload-service-imag2" element={<CargarImagenItinerario />} />
          <Route exact path= "/tour-details" element={<TourDetails />} />
          <Route exact path= "/guide-profile" element={<PerfilGuia />} />
          <Route exact path= "/contact" element={<Contact />} />
          <Route exact path= "/error-404" element={<Error404 />} />
          <Route exact path= "/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

