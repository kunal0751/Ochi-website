import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured project
        </h1>
      </div>
      <div className="px-20">
      <div className="cards w-full flex gap-10 mt-10">
        <div className="cardcontainer relative w-1/2 h-[80vh]">
        <h1 className="absolute  text-[#cdea68] left-full -translate-x-1/2  top-1/2 -translate-y-1/2 z-[9] mb-10  leading-none tracking-tighter font-bold text-8xl">
        {"CARDBOARD SPACESHIP".split('').map((item,index)=>(
            <span>{item}</span>
            ))}
        </h1>
          <div className=" card w-full h-full bg-green-600 rounded-xl overflow-hidden ">
            <img className="w-full h-full bg-cover "src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"></img>
          </div>
          <div className=" icons flex gap-7 rounded-full px-5 border-gray-50 ">
          <div>BRANDED TEMPLATE</div>
          <div>SALES DECK</div>
          <div>SOCIAL MEDIA TEMPLATES</div>
          </div>
         
        </div>
        <div className="cardcontainer relative w-1/2 h-[80vh] ">
        <h1 className="absolute  text-[#cdea68] right-full translate-x-1/2  top-1/2 -translate-y-1/2 z-[9] mb-10  leading-none tracking-tighter font-bold text-8xl">
          {"AH2 & MATTHORN".split('').map((item,index)=>(
            <span>{item}</span>
            ))}
        </h1>
          <div className=" card w-full h-full bg-green-600 rounded-xl overflow-hidden ">
            <img className="w-full h-full bg-cover "src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"></img>
          </div>
          <div className="">
            PITCH DECK
          </div>
        </div>
      </div> 
      </div>
      
    </div>
  );
}

export default Featured;
