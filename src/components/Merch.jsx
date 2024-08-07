import React from 'react'
import Footer from './Footer'

export default function Merch() {
  return (
    <Footer header={"train like a hero"} title={['Embody the', 'Dark Knight', '    ']}>
        
        <div className='flex flex-col gap-48'>

            <div className='grid grid-cols-2 gap-4 content-center pt-24'>

                    <div className='flex flex-col gap-4'>

                        <a href="https://shopee.ph/Marvel-Batman-Compression-Sports-Shirt-Men's-Summer-Sports-Quick-Dry-Short-Sleeve-Black-T-shirt-Quick-Dry-Breathable-Gym-Workout-White-Gym-T-shirt-i.1043642845.24518640563?sp_atk=36ce9139-3398-441a-912b-48c7c6f61130&xptdk=36ce9139-3398-441a-912b-48c7c6f61130" target='_blank'>
                        <img src="/batman1.png" className='hover:scale-110 duration-300 cursor-pointer'/>
                        </a>
                    </div>

                    <a href="https://shopee.ph/Marvel-Batman-Compression-Sports-Shirt-Men's-Summer-Sports-Quick-Dry-Short-Sleeve-Black-T-shirt-Quick-Dry-Breathable-Gym-Workout-White-Gym-T-shirt-i.1043642845.24518640563?sp_atk=36ce9139-3398-441a-912b-48c7c6f61130&xptdk=36ce9139-3398-441a-912b-48c7c6f61130" target='_blank'>
                        <img src="/batman2.png" className='hover:scale-110 duration-300 cursor-pointer'/>
                        </a>
            </div>

            <div className='flex flex-col gap-[5rem]'>
                <img src="/batman.png"  />
                <div className='flex flex-col gap-20 items-center'>
                    <div className='flex flex-col gap-8 justify-center items-center'>
                        <h1 className='uppercase font-semibold text-4xl sm:text-6xl md:8xl lg:10xl'>Gotham<span className='text-batman-yellow-100'>Gains</span></h1>
                        <p className=' sm:text-base'>Where Gotham's heroes forge their strength</p>
                        <p className='text-sm text-slate-400'>About the <a href="https://github.com/riXoon" target='_blank' className='text-batman-yellow-100 hover:underline duration-200'>author <i className="fa-solid fa-arrow-right"></i></a></p>
                    </div>

                    <p className='text-sm sm:text-base text-slate-400'>Copyright © 2023 GothamGains</p>
                </div>
            </div>
        </div>

    </Footer>

  )
}
