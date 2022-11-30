import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { NavModel } from '../components/NavModel';
import '../assets/css/home.css'
import { CardGrid } from '../components/CardGrid';
import '../assets/css/card.css'
import '../assets/css/login.css'

export const PerfilGuia = () => {

    let page = 'perfilGuia';
    
  return (
    
    <div className='principal'>

    <header>
      {<NavModel pagina={page}/>}
    </header>

      <div className='background-body'>
        <div className='text-center pt-4'>        
          <h1>--- FERNANDA AGUIRRE ---</h1>        
        </div>
        <div className='flex-box mt-5 galeria-responsive'>
            <img src="../src/assets/imgs/fer.1.jpg" className='mb-5 img-responsive' alt="imagen numero 1 de la guia Fernanda Aguirre" />         
        </div>    
            <div className='flex-box__row justify-content-start galeria-responsive'>
              <i class="fa-solid fa-check-double mt-3 me-2"></i>
              <h1>CONOCIMIENTOS EN:</h1>
            </div>
        <div className='flex-box__row container'>
          <div className='flex-box mt-5'>
            <div className='flex-box__row justify-content-start galeria-pc'>
              <i class="fa-solid fa-check-double mt-3 me-2 galeria-pc"></i>
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

            <div className='flex-box mt-5 galeria-responsive'>
              <img src="../src/assets/imgs/fer.2.jpg" className='mb-5 img-responsive' alt="imagen numero 1 de la guia Fernanda Aguirre" />         
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

            <div className='flex-box mt-5 galeria-responsive'>
              <img src="../src/assets/imgs/fer.3.jpg" className='mb-5 img-responsive' alt="imagen numero 1 de la guia Fernanda Aguirre" />         
            </div> 

            <div style={{backgroundColor: '#c6582d'}} className="flex-box__row align-items-center py-3 mb-5 mt-5">
              <div className='flex-box__atributos justify-content-center'>
                <h3 className='ms-3'>Caracter</h3>
                <p className='ms-3'>Manejo de liderazgo</p>
              </div>
              <div className='flex-box'>
                <i class="fa-solid fa-circle-user me-2 less-margin fa-3x"></i>        
              </div>
            </div>
            <div style={{backgroundColor: '#c6582d'}} className="flex-box__row align-items-center py-3 mb-5 mt-3">
              <div className='flex-box__atributos justify-content-center'>
                <h3 className='ms-3'>GEOREFERENCIACIÓN</h3>
                <p className='ms-3'>Se usar mapa cartográfico y brújula. Capaz de crear rutas.</p>
              </div>
              <div className='flex-box'>
                <i class="fa-solid fa-compass me-2 less-margin fa-3x"></i>        
              </div>
            </div>
            <div style={{backgroundColor: '#c6582d'}} className="flex-box__row align-items-center py-3 mb-5 mt-3">
              <div className='flex-box__atributos justify-content-center'>
                <h3 className='ms-3'>PERSONALIDAD</h3>
                <p className='ms-3'>Carismática, apasionada por lograr metas y aprender rápido.</p>
              </div>
              <div className='flex-box'>
                <i class="fa-solid fa-leaf me-2 fa-3x less-margin"></i>       
              </div>
            </div>
           
          </div>
          <div className='flex-box mt-5 galeria-pc' style={{minWidth: '55%', maxWidth: '55%'}}>
            <img src="../src/assets/imgs/fer.1.jpg" className='mb-5 img-responsive' alt="imagen numero 1 de la guia Fernanda Aguirre" />
            <img src="../src/assets/imgs/fer.2.jpg" className='mb-5 img-responsive' alt="imagen numero 2 de la guia Fernanda Aguirre" />
            <img src="../src/assets/imgs/fer.3.jpg" className='mb-5 img-responsive' alt="imagen numero 3 de la guia Fernanda Aguirre" />           
          </div>        
        </div>

        <div className='flex-box__row justify-content-start galeria-responsive mb-4'>
            <i class="fa-solid fa-check-double mt-3 me-2"></i>
            <h2>Participacion en Sernatur</h2>
        </div>
        <div className='flex-box my-5 container galeria-pc'>
            <div className='flex-box__row justify-content-start'>
              <i class="fa-solid fa-check-double mt-3 me-2"></i>
              <h2>Participación en Sernatur:</h2>
            </div>
        </div>

        <div className='d-flex justify-content-center container'>
          <iframe className='video__perfilGuia' src="https://www.youtube.com/embed/M5o60wd1t8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      <div className='galeria-pc'>

        <div className='flex-box__row container mt-5' style={{maxWidth: '90vw'}}>
          <div className='flex-box__galery'>
            <img src="../src/assets/imgs/fer.4.jpg"  className=' img-responsive' alt="imagen numero 1 de la guia Fernanda Aguirre" style={{maxWidth: '28vw'}}/> 
          </div>
          <div className='flex-box__galery'>
            <img src="../src/assets/imgs/fer.5.jpg" className='mb-5 img-responsive' alt="imagen numero 2 de la guia Fernanda Aguirre" style={{maxWidth: '28vw'}} />
            <img src="../src/assets/imgs/fer.7.jpg" className='mb-5 img-responsive' alt="imagen numero 3 de la guia Fernanda Aguirre" style={{maxWidth: '28vw'}} /> 
          </div>
          <div className='flex-box__galery'>
            <img src="../src/assets/imgs/fer.6.jpg" className='mb-4 img-responsiv' alt="imagen numero 4 de la guia Fernanda Aguirre" style={{maxWidth: '28vw'}} />
          </div>
        </div>

        <div className='flex-box__row container justify-content-center'>
          <div className='flex-box__galery '>
            <img src="../src/assets/imgs/fer.9.jpg" className='mb-5 img-responsive' alt="imagen numero 5 de la guia Fernanda Aguirre" style={{width: '28vw'}} />
          </div>
          <div className='flex-box__galery image-up'>
            <img src="../src/assets/imgs/fer.8.jpg" className='mb-5 img-responsive' alt="imagen numero 6 de la guia Fernanda Aguirre" style={{width: '28vw'}} />
          </div>
          <div className='flex-box__galery'>
            <img src="../src/assets/imgs/fer.10.jpg" className='mb-5 img-responsive' alt="imagen numero 7 de la guia Fernanda Aguirre" style={{width: '28vw'}} />
          </div>
        </div>
      </div>

      <div className='galeria-responsive mt-5'>
          <img src="../src/assets/imgs/fer.4.jpg"  className='mb-5' alt="imagen numero 1 de la guia Fernanda Aguirre" style={{width: '85vw'}}/> 
          <img src="../src/assets/imgs/fer.5.jpg" className='mb-5' alt="imagen numero 2 de la guia Fernanda Aguirre" style={{width: '85vw'}} />
          <img src="../src/assets/imgs/fer.6.jpg" className='mb-5' alt="imagen numero 4 de la guia Fernanda Aguirre" style={{width: '85vw'}} />
          <img src="../src/assets/imgs/fer.8.jpg" className='mb-5' alt="imagen numero 6 de la guia Fernanda Aguirre" style={{width: '85vw'}} />
          <img src="../src/assets/imgs/fer.10.jpg" className='mb-5' alt="imagen numero 7 de la guia Fernanda Aguirre" style={{width: '85vw'}} />
      </div>

      <hr className=' container' />
      <p className='text-center'>© Cabra del valle 2022-2023 - Todos los derechos reservados</p>
      <hr className='mb-0'/>
      </div>     
    </div>

  )
}