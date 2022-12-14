import Cookies from 'universal-cookie'
import '../assets/css/navbar.css'
import { NavUserFunctions } from './NavUserFunctions'


export const NavModel = ({pagina}) => {

    const cookies = new Cookies();
    
    const name = cookies.get("name")
    const token = cookies.get("token")


    const onClickHandle = ()=>{
        cookies.remove("nombre")
        cookies.remove("token")
        cookies.remove("email")

        window.location.href = "./"
    }

    const fromPage = pagina;
    return (
    

            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid navbar-custom">
                <div className="ms-4">
                <a className="navbar-brand link-light fw-semibold ms-5" href="/"><img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1669834998/goat_aj7p83.png" alt="imagen de una cabra, logo de cabra del valle" className='ms-2 logo-custom'/>
                </a>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav me-5 nav-font">
            
                    {
                        (fromPage === 'home')
                                ? <a className="nav-link link-light mt-4__custom" aria-current="page" href="/"> <p>Home</p></a>
                                : <a className="nav-link link-light nav-hover mt-4__custom" aria-current="page" href="/"> <p>Home</p></a>
                    }
                    {
                        (fromPage === 'login')
                                ? (token)
                                    ?<a className="nav-link link-light mt-4__custom" onClick={onClickHandle} style={{cursor: 'pointer'}}> <p>Logout</p></a>
                                    :<a className="nav-link link-light  mt-4__custom" href="/login"> <p>Login</p></a>
                                : (token)
                                    ?<a className="nav-link link-light nav-hover mt-4__custom" onClick={onClickHandle} style={{cursor: 'pointer'}}> <p>Logout</p></a>
                                    :<a className="nav-link link-light nav-hover mt-4__custom" href="/login"> <p>Login</p></a>
                    }
                    {
                        (token)
                        ? <NavUserFunctions name={name} paginaDesde={fromPage}/> 
                        : null                          
                    }
                    {
                        (fromPage === 'createAccount')
                                ? (token)
                                    ? null
                                    : <a className="nav-link link-light  mt-4__custom" href="/registration"> <p>Create Account</p></a>
                                : (token)
                                    ? null 
                                    : <a className="nav-link link-light nav-hover mt-4__custom" href="/registration"> <p>Create Account</p></a>
                    }
                    
                </div>
                </div>
            </div>
            </nav>

    )
  }