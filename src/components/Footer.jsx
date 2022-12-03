import '../assets/css/footer.css'

export const Footer = () => {
  return (
    <>
        <hr className='container' />
        <p className='text-center'>© Cabra del valle 2022-2023 - Todos los derechos reservados </p>
        <div className='d-flex justify-content-center'>
            <a href=""><i class="fa-brands fa-instagram fa-2x social-links text-dark"></i></a>
            <a href=""><i class="fa-brands fa-whatsapp fa-2x ms-4 social-links text-dark"></i></a>       
        </div>
        <hr className='mb-0'/>
    </>
  )
}
