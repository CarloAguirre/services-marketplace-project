// import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { CreateAccount } from '../pages/CreateAccount'


export const Router = () => {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route exact path= "/" element={<Login />} />
          <Route exact path= "/home" element={<Home />} />
          <Route exact path= "/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

