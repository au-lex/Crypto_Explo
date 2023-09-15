import React from 'react'

import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <>
            <main>
                <figure className='flex justify-center mt-20'>
                    <div className='w-[280px] h-[280px]  '>
                        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1694320906/fzi184at9pfqykos6cxn.svg"
                         alt="" className='w-[100%]' />
                    </div>
                </figure>

                <figcaption className='px-5'>
                    <h1 className='text-white text-[1.4rem]'>Explore the Depths of
                     YourCryptoCoin Blockchain with <span className='text-[2rem] text-yellow-300'>coinVerse</span> </h1>
                     <p className='text-slate-300 mt-2'>Fast, reliable, and comprehensive insights into every transaction and block.</p>
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
