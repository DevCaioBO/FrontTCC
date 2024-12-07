import React from 'react'
import sininho from '../../assets/img/sininho.png'
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import course1 from '../../assets/img/engenheiro.png'
import course2 from '../../assets/img/exelCourse.png'
import course3 from '../../assets/img/pythonCourse.png'

import 'swiper/css';
import 'swiper/css/effect-cards';

export default function SenaiRollCardsCourse() {
    return (
        <div className='w-full'>
        <div className='mt-20 font-poppins lg:pl-24 pl-2 mb-10  '>
            <div className='flex flex-col w-full'>
                <p className='font-bold text-3xl'><span className='text-red-clean-type'>Próximos cursos</span> que vão <span className='text-red-clean-type'>abrir</span> em <span className='text-red-clean-type'>Breve!</span></p>
                <p className='flex text-sm font-light flex-wrap'>Quero receber notificações quando existirem cursos disponiveis<span className='w-7 h-7 flex'><img className='w-full  bg-no-repeat' src={sininho} alt="" /></span></p>
            </div>
     
    </div>
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="lg:w-[400px] md:w-[300px] w-[250px] h-fit"

      >
        <SwiperSlide className='rounded-lg w-full   '>
            <img  className="w-full  "src={course1} alt="" />
            <div className='flex flex-col  items-center justify-center  w-full h-32 absolute -mt-32 bg-dec-angle bg-cover bg-no-repeat '>
                <p className='w-full pl-9  '>TI</p>
                <div className='flex w-full justify-center gap-2  '>
                    <p>Data Inicio : 11/01/24</p>
                    <p>Data Término : 12/03/24</p>
                   
                </div>
                <hr className='w-full h-[2px] bg-gray-500'/>
            </div>
            </SwiperSlide>


            <SwiperSlide className='rounded-lg w-full   '>
            <img  className="w-full  "src={course2} alt="" />
            <div className='flex flex-col  items-center justify-center  w-full h-32 absolute -mt-32 bg-dec-angle bg-cover bg-no-repeat '>
                <p className='w-full pl-9  '>TI</p>
                <div className='flex w-full justify-center gap-2 '>
                    <p>Data Inicio : 11/01/24</p>
                    <p>Data Término : 12/03/24</p>
                   
                </div>
                <hr className='w-[75%] h-[2px] bg-gray-500'/>
            </div>
            </SwiperSlide>


            <SwiperSlide className='rounded-lg w-full   '>
            <img  className="w-full  "src={course3} alt="" />
            <div className='flex flex-col  items-center justify-center  w-full h-32 absolute -mt-32 bg-dec-angle bg-cover bg-no-repeat '>
                <p className='w-full pl-9  '>TI</p>
                <div className='flex w-full justify-center gap-2  '>
                    <p>Data Inicio : 11/01/24</p>
                    <p>Data Término : 12/03/24</p>
                   
                </div>
                <hr className='w-[75%] h-[2px] bg-gray-500'/>
            </div>
            </SwiperSlide>


     
 
   
      </Swiper>
    </>
        </div>
    )
}