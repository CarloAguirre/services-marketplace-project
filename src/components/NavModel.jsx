// import Cookies from 'universal-cookie'
import '../assets/css/navbar.css'
import { NavUserFunctions } from './NavUserFunctions'

export const NavModel = ({name}) => {

    return (
    

            <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid navbar-custom">
                <div className="ms-4">
                <a className="navbar-brand link-dark fw-semibold ms-5" href="/">CABRA DEL VALLE
                <span><img src="./src/assets/imgs/goat.png" alt="imagen de una cabra, logo de cabra del valle" className='ms-2'/></span>
                </a>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav me-5">
                    <a className="nav-link link-dark" aria-current="page" href="/">Inicio</a>
                    <a className="nav-link link-dark" href="/login">Iniciar Sesión</a>
                    {
                        (name)
                            ? <NavUserFunctions name={name}/> 
                            : null                          
                    }
                </div>
                </div>
            </div>
            </nav>

    )
  }