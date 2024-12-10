import { Link } from "react-router-dom"
import Formlogin from "../components/Fragments/Formlogin"
import Auth from "../components/Layouts/Auth"
import Cards from "../components/Fragments/Card"

const Login = () => {
  return (
<> 
      <div className="flex flex-row-reverse mx-5 py-2">
        <Link to="/" className="bg-green-400 font-medium p-3 rounded hover:bg-white hover:border">Home</Link>
      </div>
    <div className="flex flex-col justify-center items-center mt-10 ">
      <div>
      <p className="w-full font-bold text-3xl mb-4">SELAMAT DATANG DI SISTEM INFORMASI DESA TAMBAHREJO</p>
      </div>
      <div className="bg-slate-100 w-1/4 p-4">
          <Formlogin/>
      </div>
    </div>
</>
  )
}

export default Login