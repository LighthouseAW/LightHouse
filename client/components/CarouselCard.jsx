import React from 'react';
import Image from "next/image";

export default function CarouselCard({bg, image, text, name}){
    console.log(bg)
    return(
        <div className={`p-2 relative min-w-[500px] min-h-[400px] ${bg}`}>
            {/* <Image src={image || "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"} alt={image.name} className="absolute object-cover w-full p-2" width={500} height={380} /> */}
            <div className="relative ">
                <h1 className="w-full p-12 text-4xl text-black">{name}</h1>
                <div className="w-full z-10 flex items-center justify-center">
                    <div className="px-12">
                    <h3>{text}</h3>
                    </div>
                    {/* <div className="flex px-2">
                        {button}
                    </div> */}
                </div>
            </div>
        </div>
        )
    }