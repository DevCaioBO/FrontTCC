import React from 'react'

export default function SchoolSenaiName() {
  return (
    <div className='flex w-full flex-col pl-5 lg:pl-24 font-poppins gap-2 mt-20'>
        <div className='flex flex-col'>
            <p className='font-extralight text-[15px] '>Senai de Santo Amaro - Senai suiço-Brasileira</p>
        
        
            <p className='font-semibold text-4xl'>Escola SENAI Suíço-Brasileira<br/> 
            "Paulo Ernesto Tolle"</p>
        </div>
        <div className='flex  gap-7 w-full'>
            <button className='rounded-xl w-36 h-14 text-center text-white bg-red-500  p-2'>Ver Cursos</button>
            <button className='border border-red-500 w-36 h-14 rounded-xl text-center text-red-500 bg-white  '>Falar Conosco</button>
        </div>
      
    </div>
  )
}
