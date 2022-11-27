


export const NavUserFunctions = ({name}) => {
  return (
    <>
      <a className="nav-link link-light nav-hover mt-4" href="/create-tour"> <p>Crear Tour</p></a>
      <p className="mx-2 mt-4 pt-2 fw-bold text-light">Usuario: {name}</p>
    </>
  )
}
