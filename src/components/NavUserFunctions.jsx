


export const NavUserFunctions = ({name, paginaDesde}) => {
  return (
    <>
    {
      (paginaDesde === 'createProduct')
           ? <a className="nav-link link-light mt-4__custom" href="/create-tour"> <p>Create Service</p></a>
           : <a className="nav-link link-light nav-hover mt-4__custom" href="/create-tour"> <p>Create Service</p></a>
      }
      <p className="mx-2 mt-4__custom pt-2 fw-bold text-light">User: {name}</p>
    </>
  )
}
