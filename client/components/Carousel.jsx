import React, { useState, useEffect} from "react";
import CarouselCard from "./CarouselCard";
import Link from "next/link";
import Image1 from '../public/carousel/Carousel1.jpeg'
import Image2 from '../public/carousel/Carousel2.jpeg'
import Image3 from '../public/carousel/Carousel3.jpeg'
import Image4 from '../public/carousel/Carousel4.jpeg'
import Image5 from '../public/carousel/Carousel5.jpeg'

export default function Carousel() {
    const images = [
        { image: Image1, url: "/mission", title: "Our Mission" },
        { image: Image2, url: "/about/statementOfFaith", title: "What we believe" },
        { image: Image3, url: "/projects/whereWeServe", title: "Where we serve" },
        { image: Image4, url: "/projects", title: "Our Work" },
        { image: Image5, url: "/about", title: "About Us" },
    ];

    const pictureMap = images.map((image, index) => (
        <CarouselCard
            key={index}
            image={image.image}
            name={image.image.name}
            button={createButton(image.url, image.title)}
        />
    ));

    function createButton(url, title) {
        return (
            <>
                <button className="px-5 bg-white hover:bg-slate text-black font-bold py-2 rounded-full">
                    <a href={url}>{title}</a>
                </button>
            </>
        );
    }

    return (
        <div className="flex overflow-x-auto scroll-auto scrollbar-hide">
            {pictureMap}
        </div>
    );
}





