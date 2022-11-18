


export const NavUserFunctions = ({name}) => {
  return (
    <>
      <a className="nav-link link-dark" href="/create-tour">Crear Tour</a>
      <p className="mx-2 mt-2 fw-semibold text-success">Usuario: {name}</p>
    </>
  )
}
