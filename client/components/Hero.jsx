import React, { useEffect, useState } from "react";
import Link from "next/link";
import ModalVideo from "./ModalVideo";
import { useActiveLink } from '../context/ActiveLinkContext';

export default function Hero({ heading, message }) {
    const [isMobile, setIsMobile] = useState(false);
    const youtubeVideoId = "a5PtUpO8kss";
    const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
    const { selectedLink, setSelectedLink } = useActiveLink();
    const { selectedSubLink, setSelectedSubLink } = useActiveLink();

    useEffect(() => {
        const checkIsMobile = () => {
            const userAgent = window.navigator.userAgent;
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    return (
        <div className="relative h-screen">
            <div className='bg-home bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center relative'>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-white" />
            </div>
            <div className="text-black z-[2] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className={`z-20 relative ${isMobile ? "text-4xl" : "text-6xl "} font-bold`}>{heading}</h2>
                <p className={`z-20 text-black relative py-5 ${isMobile ? "text-2xl" : "text-3xl "}`}>{message}</p>
                <div className='flex flex-col items-center justify-center'>
                    {isMobile ? 
                        <ModalVideo
                            thumbWidth={384}
                            thumbHeight={216}
                            thumbAlt="Modal video thumbnail"
                            video={youtubeVideoId}
                            videoWidth={320}
                            videoHeight={180}
                            className="relative z-30"
                        />
                        :
                        <ModalVideo
                            thumbWidth={384}
                            thumbHeight={216}
                            thumbAlt="Modal video thumbnail"
                            video={youtubeVideoId}
                            videoWidth={800}
                            videoHeight={450}
                            className="relative z-30" />
                        }
                    {/* <Link
                        className={`bg-[#f18802] text-2xl text-white rounded-full py-3 text-center justify-center ${
                            isMobile ? 'px-4' : 'px-6'
                        }`}
                        href="/give"
                        onClick={() => {
                            setSelectedLink("Home");
                            setSelectedSubLink("");
                        }}
                    >
                        Give
                    </Link> */}
                </div>
            </div>
        </div>
    );
}