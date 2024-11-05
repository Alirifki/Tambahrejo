import Inputform from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";


const Formregister = () => {
  return (
    <form action="">
        <Inputform
        label="Fullname"
        type="text"
        placeholder="Insert Your Name"
        name="fullname"
        />
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
       <Inputform
       label="Confirm Password"
       type="password"
       placeholder="*****"
       name="confirmpassword"
       />
        <Button variant='bg-green-400 w-full'>Register</Button>
      </form>
  )
}

export default Formregister