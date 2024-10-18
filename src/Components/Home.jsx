// import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { AiOutlineDotNet } from "react-icons/ai";
import pic from"../../public/mypic.jpg"


function Home() {
  return (
    <>  
    <div name="Home"
     className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
            {/*Home left*/}
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
        <span className="text-xl">Welcome In My Feed</span>
        <div className="flex space-x-1 text-2xl md:text-4xl">
        <h1>Hello, I,m a</h1>
        {/*<span className="text-red-700 font-bold">Developer</span>*/}
        <ReactTyped 
        className="text-red-700 font-bold"
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className="text-sm md:text-md text-justify">
            Hello and Welcome! I am Studying Master of Computer Application
            at Lloyd Institute of Engineering and Technology.
             <br />
            My Interest Include Full Stack Web Developer. 
            <br />
            My Future Goal is to get set the benchmark in the field of Dot Net[Developer].
            <br />
            Take a look at my work through the tabs :
        </p>
        <br />
        {/*Social media icons*/}
        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
        <div className="space-y-2">
          <h1 className="font-bold">Available on</h1>
          <ul className="flex space-x-3">
          <li> <a href="https://www.facebook.com/" target="_blank">
            <FaFacebookSquare className="text-2xl cursor-pointer"/></a></li>
          <li> <a href="https://www.linkedin.com/home" target="_blank">
            <FaLinkedin className="text-2xl cursor-pointer" /></a></li>
          <li> <a href="https://www.youtube.com" target="_blank">
            <FaYoutube  className="text-2xl cursor-pointer"/></a></li>
          <li> <a href="https://www.telegram.com" target="_blank">
            <FaTelegram  className="text-2xl cursor-pointer"/></a></li>
          </ul>
        </div>
        <div className="space-y-2">
        <h1 className="font-bold">Currently Studying on</h1>
          <div className="flex space-x-3">
          <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]"/> 
          <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]"/>
          <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]"/>
          <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]"/>
          <AiOutlineDotNet className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]" />
          </div>
        </div>
        </div>
        </div>
        {/*Home right*/}
        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-6 order-1">
          <img src={pic} 
          className="rounded-full md:w-[450px] md:h-[450px]"
          alt="" />
        </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home
