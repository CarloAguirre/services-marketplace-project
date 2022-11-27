


export const NavUserFunctions = ({name, paginaDesde}) => {
  return (
    <>
    {
      (paginaDesde === 'createProduct')
           ? <a className="nav-link link-light mt-4" href="/create-tour"> <p>Crear Tour</p></a>
           : <a className="nav-link link-light nav-hover mt-4" href="/create-tour"> <p>Crear Tour</p></a>
      }
      <p className="mx-2 mt-4 pt-2 fw-bold text-light">Usuario: {name}</p>
    </>
  )
}
