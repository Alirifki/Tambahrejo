import React from 'react'
import 'flowbite';

const Button = (props) => {
    const {children ='...', 
       variant = 'bg-slate-500',
       onClick = () =>{} , 
       type="button"} = props;
  return ( 
      <>
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white border-t-white`}
         type={type}
         onClick={onClick}
         >
            {children}
        </button>
     </>

  );
}

export default Button