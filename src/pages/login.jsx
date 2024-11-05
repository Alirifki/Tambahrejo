import { Link } from "react-router-dom"
import Formlogin from "../components/Fragments/Formlogin"
import Auth from "../components/Layouts/Auth"

const Login = () => {
  return (
   <Auth title="Login" type='login' >
    <Formlogin/>
   </Auth>
  )
}

export default Login