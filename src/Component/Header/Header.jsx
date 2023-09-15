import React from 'react'
import { ImHappy2 } from "react-icons/im"; 

const Header = () => {
    return (
        <>
        <main className='fixed w-full  backdrop-blur-md  top-0' >
            <section className='flex  justify-between px-4 py-4 bg1'>

            <div>
            <h1 className='text-white'>coinVerse</h1>
            </div>

            <section>
                <h1 className='text-[1.5rem] text-white '>
                    <span className='text-[18px] text-yellow-400'>hi,</span> welcome Aulex.. <span className=''></span></h1>
             </section>

            <div className='w-[2.5rem] h-[2.5rem] rounded-full bg-red-400'></div>
            </section>

             
             
        </main>
        </>
    )
}

export default Header
