
import { NavModel } from '../components/NavModel';
import '../assets/css/home.css'
import { CardGrid } from '../components/CardGrid';
import '../assets/css/card.css'
import '../assets/css/login.css'

export const PerfilGuia = () => {

    let page = 'home';
    
  return (
    
    <div className='principal'>

    <header>
      {<NavModel pagina={page}/>}
    </header>

      <div className='background-body'>
        <div className='flex-box__row container'>
          <div className='flex-box mt-5'>
            <div className='flex-box__row justify-content-start'>
              <i class="fa-solid fa-check-double mt-3 me-2"></i>
              <h1>CONOCIMIENTOS EN:</h1>
            </div>
            <div style={{backgroundColor: '#c6582d'}} className="flex-box__row justify-content-center align-items-center py-3 mb-4 mt-3">
              <i class="fa-sharp fa-solid fa-mountain pb-2 me-2 fa-2x"></i>
              <h3>Alta Montaña</h3>
            </div>
            <div style={{backgroundColor: '#c6582d'}} className="flex-box__row justify-content-center align-items-center py-3 mb-4">
              <i class="fa-solid fa-person-hiking pb-2 me-2 fa-2x"></i>
              <h3>Trekking y Running</h3>
            </div>
            <div style={{backgroundColor: '#c6582d'}} className="flex-box__row justify-content-center align-items-center py-3 mb-4">
              <i class="fa-solid fa-person-biking pb-2 me-2 fa-2x"></i>
              <h3>Ciclismo</h3>
            </div>
            <div style={{backgroundColor: '#c6582d'}} className="flex-box__row justify-content-center align-items-center py-3 mb-4">
              <i class="fa-solid fa-basketball pb-2 me-2 fa-2x"></i>
              <h3>Tenis</h3>
            </div>
            <div style={{backgroundColor: '#c6582d'}} className="flex-box__row justify-content-center align-items-center py-3 mb-4">
              <i class="fa-solid fa-kit-medical pb-2 me-2 fa-2x"></i>
              <h3>Primero Auxilios</h3>
            </div>

            <div style={{backgroundColor: '#c6582d'}} className="py-3 my-5 flex-box__noMargin">
              <div className='py-2 px-3'>
                <h2>Información:</h2>
                <p>Nombre: Fernanda Aguirre Chacón</p>
                <p>Edad: 26 Años</p>
                <p>Lugar de nacimiento: Antofagasta</p>
                <p>Mail: Fernandaaguirreguia@outlook.es</p>
              </div>
            </div>

            <h2>Perfil</h2>
            <p>Guía diplomada por la Universidad Andres Bello Con 3 años de experiencia.
            He trabajado con niños y adultos mayores guiándolos en actividades outdoors. A la vez he ido creando nuevas rutas, aprendiendo técnicas y habilidades, para entregar un servicio completo y de calidad.
            Pertenezco a un club de montaña de la región de Coquimbo, con el cual he subido volcanes hasta los 6.000 metros de altura en la cordillera de Arica.
            Me apasiona la flora y fauna.
            Practico activamente mountain bike.</p>

            <h2 className='mt-4'>Certificaciones</h2>
            <ul>
              <li>Curso de ingles online Open English (2014)</li>
              <li>Primeros Auxilios en áreas remotas (WFR) Nols, Chile (2019)</li>
              <li>Certificada en SERNATUR La Serena (2021)</li>
              <li>Bleeding control American college of surgeons committee on trauma, Temuco (2021)</li>
              <li>Curso de Rescate ITRA, Temuco (2021)</li>
              <li>Recertification WFR NASAR, Temuco (2021)</li>
            </ul>
          </div>
          <div className='flex-box mt-5' style={{minWidth: '55%', maxWidth: '55%'}}>
            <img src="../src/assets/imgs/fer.1.jpg" className='mb-5' alt="imagen numero 1 de la guia Fernanda Aguirre" />
            <img src="../src/assets/imgs/fer.2.jpg" className='mb-5' alt="imagen numero 1 de la guia Fernanda Aguirre" />
            <img src="../src/assets/imgs/fer.3.jpg" className='mb-5' alt="imagen numero 1 de la guia Fernanda Aguirre" />
            
          </div>

        </div>
      <hr className=' container' />
      <p className='text-center'>© Cabra del valle 2022 - todos los derechos reservados</p>
      <hr className='mb-0'/>
      </div>     
    </div>

  )
}