// import Cookies from 'universal-cookie'
import '../assets/css/navbar.css'
import { NavUserFunctions } from './NavUserFunctions'

export const NavModel = ({name, pagina}) => {

    const fromPage = pagina;
    return (
    

            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid navbar-custom">
                <div className="ms-4">
                <a className="navbar-brand link-light fw-semibold ms-5" href="/">CABRA DEL VALLE
                <span><img src="./src/assets/imgs/goat.png" alt="imagen de una cabra, logo de cabra del valle" className='ms-2'/></span>
                </a>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav me-5">
                    {
                        (fromPage === 'home')
                                ? <a className="nav-link link-light mt-4" aria-current="page" href="/"> <p>Inicio</p></a>
                                : <a className="nav-link link-light nav-hover mt-4" aria-current="page" href="/"> <p>Inicio</p></a>
                    }
                    {
                        (fromPage === 'login')
                                ? <a className="nav-link link-light mt-4" href="/login"> <p>Iniciar Sesión</p></a>
                                : <a className="nav-link link-light nav-hover mt-4" href="/login"> <p>Iniciar Sesión</p></a>
                    }
                    
                    {
                        (name)
                            ? <NavUserFunctions name={name} paginaDesde={fromPage}/> 
                            : null                          
                    }
                </div>
                </div>
            </div>
            </nav>

    )
  }