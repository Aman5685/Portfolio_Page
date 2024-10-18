// import React from 'react'
import html from"../../public/html.png";
import css from"../../public/css.jpg";
import javascript from"../../public/javascript.png";
import tailwind from"../../public/tailwind.png";
import react from "../../public/reactjs.png";
function Skills() {
    const cardItem=[
        {
            id:1,
            logo:html,
            name:"html"
        },
        {
            id:2,
            logo:css,
            name:"css"
        },
        {
            id:3,
            logo:javascript,
            name:"javascript"
        },
        {
            id:4,
            logo:tailwind,
            name:"tailwind"
        },
        {
            id:5,
            logo:react,
            name:"react"
        },
    ]
  return (
    <>
      <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <span className="underline text-xl font-semibold">Currently Working</span>
         <div className="grid grid-cols-2 md:grid-cols-5 gap-5 my-3">
            {
                cardItem.map(({id,logo,name})=>(
                    <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                     <img src={logo} className="w-[120px] h-[120px] rounded-full" alt="" />
                      <div>
                        <div className="">{name}</div>
                      </div>
                      {/*
                       <div className="px-6 py-4 space-x-4 justify-around">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source code</button>
                       </div> */}
                    </div>
                ))
            }
         </div>
        </div>
     </div>
     
    </>
  )
}

export default Skills;