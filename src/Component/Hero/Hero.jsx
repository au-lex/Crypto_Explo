import React from 'react'

import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <>
            <main>
                <figure className='flex justify-center mt-20'>
                    <div className='w-[480px] h-[380px]   '>
                        {/* <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1694320906/fzi184at9pfqykos6cxn.svg"
                         alt="" className='w-[100%]' /> */}
                         <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1697133980/12_1_momkym.png"
                         className='w-[100%] '
                         alt="" />
                    </div>
                </figure>

                <figcaption className='px-5'>
                    <h1 className='text-[2rem] text-yellow-300'>
                      coinVerse </h1>
                      
                     <p className='text-slate-300 mt-2'>Get All The Info Regarding Your Favorite Crypto Currency
                     Fast, reliable, and comprehensive insights into every transaction and block.
                     </p>
                     <p className='text-slate-300 mt-2'></p>
                   <div className='flex  my-4'>
                    <button className='bg-white block rounded-[25px] text-yellow-800 font-extrabold capitalize
                      w-[50%] h-[3rem]
                    '>explore now</button>
                   </div>
                </figcaption>

          <section className=''>

             

                </section>

            </main>
        </>
    )
}

export default Hero
