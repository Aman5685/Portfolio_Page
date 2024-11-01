// import React from 'react'
import { useState } from "react";
import pic from"../../public/mypic.jpg"
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
    {/*menu->variale setMenu->Function*/}
    const [menu,setmenu]=useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Skills"
        },
        {
            id:5,
            text:"Contacts"
        },
        
    ]
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto text-white px-4 md:px-20 h-16 shadow-md bg-red-800 fixed top-0 left-0 right-0 z-50">
        <div className=" flex justify-between items-center   h-16">
               {/*Right part of navbar*/}
            <div className="flex space-x-2">
                <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                <h1 className="font-semibold text-xl cursor-pointer">Ama
                    <span className="text-green-500 text-2xl">n</span>
                <p className="text-sm">Web Developer</p></h1>
            </div>
            {/*Desktop Navbar*/}
            <div>
                <ul className="hidden md:flex space-x-8">
                    {
                       navItems.map(({id,text})=>(
                        <li className="hover:scale-105 duration-200 cursor-pointer"
                         key={id}>
                            {/*Link navbar to another components*/}
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass="active"
                            >{text}</Link>
                        </li>
                       )) 
                    }
                </ul>
                {/*Button function*/}
                <div onClick={()=>setmenu(!menu)} className="md:hidden">{menu?<IoClose size={24} />:<AiOutlineMenu size={24} />}</div>

            </div>
        </div>
        {/*Mobile Navbar*/}
        {
            menu && (
        <div className="bg-[powderblue] text-black">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {
                       navItems.map(({id,text})=>(
                        <li className="hover:scale-105 hover:bg-slate-500 duration-200 font-semibold cursor-pointer" key={id}>
                    <Link onClick={()=>setmenu(!menu)} 
                             to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass="active"
                            >{text}</Link>
                        </li>
                       )) 
                    } 
            </ul>
        </div>

            )
        }
      </div>
    </>
  )
}

export default Navbar;
