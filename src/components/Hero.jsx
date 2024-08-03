import React from 'react'
import Button from './Button'

export default function Hero(props) {
  
  return (
    <div className='min-h-screen flex flex-col gap-10 justify-center items-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>

            <p className='uppercase '>it's time to get</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400'>normous</span></h1>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span>and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            

            <Button text={"Accept & Begin"}></Button>

        </div>
    </div>
  )
}
