import { Link } from "react-router-dom"
import Formregister from "../components/Fragments/Formregister"
import Auth from "../components/Layouts/Auth"

const Register = () => {
  return (
   <Auth title="Register" type="register" >
    <Formregister/>
   </Auth>
  )
}

export default Register