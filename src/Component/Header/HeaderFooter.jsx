import React from 'react'
import { FaBlog } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai"; 
import { GiTwoCoins } from "react-icons/gi"; 
import { CgMenuCake } from "react-icons/cg"; 
const HeaderFooter = () => {
    return (
        <>
           <section className='bg1 fixed z-50 w-full
            h-16 bottom-0 backdrop-blur-md flex justify-around  items-center'>
    <div className="">
        <Link to={"/"}>
         <span className="block pl-1 text-[2rem] text-yellow-400 cursor-pointer"><CgMenuCake /></span>
        <span className="block text-slate-50 capitalize text-[16px] font-light">home</span>
        </Link>
    </div>
    <div className="">
        <Link to={"/Coin"}>
       <span className="block pl-1 text-[1.8rem] text-yellow-400 cursor-pointer"> <GiTwoCoins /></span>
        <span className="block text-slate-50 capitalize text-[16px] font-light">coins</span>
        </Link>
    </div>
  
   
    <div className="">
        <Link to={"/News"}>
       <span className="block pl-1 text-[1.8rem] text-yellow-400 cursor-pointer "><FaBlog />  </span>
        <span className="block text-slate-50 capitalize text-[16px] font-light">news</span>
        </Link>
   </div>
    <div className="">
        <span className="block pl-2 text-[1.8rem] text-yellow-400 cursor-pointer"><AiOutlineSetting /></span>
        <span className="block text-slate-50 capitalize text-[16px] font-light">setting</span>
    </div>
</section>

        </>
    )
}

export default HeaderFooter
