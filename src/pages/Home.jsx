import Cookies from 'universal-cookie'

export const Home = () => {

    const cookies = new Cookies();

    console.log(cookies.get("name"))
    console.log(cookies.get("email"))
    console.log(cookies.get("uid"))
    console.log(cookies.get("token"))

    const name = cookies.get("name")

  return (
    <>
        <h1>Bienvenido {name} </h1>
    </>
  )
}
