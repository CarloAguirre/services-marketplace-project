


export const NavUserFunctions = ({name}) => {
  return (
    <>
      <a className="nav-link link-light nav-hover" href="/create-tour">Crear Tour</a>
      <p className="mx-2 mt-2 fw-bold text-light">Usuario: {name}</p>
    </>
  )
}
