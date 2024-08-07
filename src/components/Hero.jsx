import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
    <>
        <video src="/batman-bg.mp4" autoPlay loop muted/>
        <div className='overlay' id={'home'}></div>
            <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 z-10 text-white'>
                
                <div className='flex flex-col gap-4'>

                    <img src="/batman-logo.png" className='h-[3rem] w-[6.5rem] max-h-full max-w-full self-center relative bottom-20' />

                    <p>IT'S TIME TO GET THOSE</p>
                    <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>gotham<span className='text-batman-yellow-100'>gains</span></h1>
                </div>
                <p className='text-sm md:text-base font-light'>I hereby acknowledge that I may become <span className='text-batman-yellow-100 font-medium'>Batman</span> and accept all risks of becoming the local <span className='text-batman-yellow-100 font-medium'>Dark Knight</span>, afflicted with severe body dysmorphia, unable to fit through doors.</p>
                <Button func={() => {
                    window.location.href = '#generate'
                }} text={"Accept & Begin"}></Button>
            </div>
    </>
    )
}