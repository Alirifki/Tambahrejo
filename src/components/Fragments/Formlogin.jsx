import Inputform from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";


const Formlogin = () => {
  const handleLogin = (e) =>{
    e.preventDefault();
    localStorage.setItem('email',e.target.email.value);
    localStorage.setItem('password',e.target.password.value);
    window.location.href="/dashboard"
  }
  return (
    <form onSubmit={handleLogin}>
       <Inputform 
        label="Email"
        type="email" 
        placeholder="example@gmail.com"
        name="email"
      />
       <Inputform
       label="Password"
       type="password"
       placeholder="*****"
       name="password"
       />
        <Button variant='bg-blue-400 w-full' type="submit">Login</Button>
      </form>
  )
}

export default Formlogin