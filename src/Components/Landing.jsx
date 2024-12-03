import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div className=" w-full h-screen bg-zinc-900 pt-1">
      <div className=" textstructure mt-52 px-20 mb-10 font-bold"> 
        {[ "We create", "Eye Opening", "Presentation"].map((item,index)=>{
          return(
          <div className="masker">
         <div key={item} className="w-fit flex  overflow-hidden ">
         {index ==1 && (<div className="mr-[1vw] w-[8vw]  rounded-md  h-[5.7vw] relative top-[1.2vw] bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"></div>)}

          <h1 className='  uppercase text-[7vw] h-full leading-[7vw] tracking-tighter font-["Founders_Grotesk"]font-bold'>
            {item}
          </h1>
          </div>
        </div>
          );

        })}
       
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-30 flex justify-between items-center py-5 px-20">
        {[
          "for Public and Private Comanies",
          " from the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none  capitalize">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500  font-light text-md capitalize rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center  justify-center border-[1px] border-zinc-400 rounded-full">
          <span className="rotate-[45deg]">
          <FaArrowUpLong  />
          </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
// w-[7.5vw] h-[5vw]