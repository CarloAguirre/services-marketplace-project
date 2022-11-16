// import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'


export const Router = () => {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route exact path= "/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

