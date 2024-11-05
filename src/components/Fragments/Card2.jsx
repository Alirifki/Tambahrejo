import React from 'react'

const Card2 = (props) => {
    const {judul, ket} = props
  return (
        <div className='w-[30%] bg-white shadow rounded-3xl mx-2 my-2 pb-5 m-1 mt-0 pt-3 p-2'> 
            <center>
                <svg class="mt-4 text-green-500 w-[30px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"/>
            </center>
            <p class="popins text-green-500 text-sm text-center">{judul}</p>                         
            <p class="popins text-slate-500 text-sm text-center">{ket}</p>       
        </div>
  
  )
}

export default Card2