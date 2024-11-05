
import { Link } from "react-router-dom"

const Auth = (props) => {
    const {children, title, type} = props
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='w-full max-w-xs'>
        <h1 className='text-3xl mb-2 text-blue-600'>{title}</h1>
        <p className='font-medium text-slate-500'>
          Welcome, Please enter your detail
        </p>
      {children}
      <p className="text-sm mt-5 text-center">
        {type === "login" ?
         "Don't have a accaount? " : 
         "Already have a account? " } 

         {type === 'login' && 
        <Link to="/register" className="font-bold text-blue-600">Register</Link>
         }
         {type === 'register' &&
        <Link to="/login" className="font-bold text-blue-600">Login</Link>
         }
      </p>
      </div>
   </div>
   
  )
}

export default Auth