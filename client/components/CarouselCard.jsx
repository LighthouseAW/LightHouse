import React from 'react';
import Image from "next/image";

export default function CarouselCard({bg, image, text, name}){
    // console.log(bg)
    return(
        <div className={`p-4 min-w-[350px] min-h-[350px] ${bg}`}>
  {/* <Image src={image || "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"} alt={image.name} className="absolute object-cover w-full p-2" width={500} height={380} /> */}
        <div className="">
            <div className="bg-white/50 min-h-[365px] rounded-lg h-full flex-grow ">
            <div className="">
                <h1 className="p-8 text-2xl text-black">{name}</h1>
                <div className="z-10 flex items-center justify-center">
                <div className="px-12">
                    <h3>{text}</h3>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        )
    }