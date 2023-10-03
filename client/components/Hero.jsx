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
        <div className='h-screen bg-home bg-cover bg-no-repeat flex items-center justify-center'>
            <div className="absolute top-0 left-0 right-0 bottom-0"/>
            <div className="text-black z-[2] text-center">
                <h2 className={`z-20 relative text-6xl font-bold`}>{heading}</h2>
                <p className={`z-20 text-black relative py-5 text-3xl`}>{message}</p>
                <div className='flex justify-center gap-40'>
                    {/* <button className={`bg-white text-xl text-black rounded-full py-3 text-center justify-center ${isMobile ? 'px-1 pt-6 ' : 'px-6'}`} href="/give">Give Now</button> */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                    <div className="relative z-30">
                        <ModalVideo
                            // thumb={VideoThumb}
                            thumbWidth={384}
                            thumbHeight={216}
                            thumbAlt="Modal video thumbnail"
                            video={youtubeVideoId}
                            videoWidth={800}
                            videoHeight={450}
                            className="relative z-30"
                        />
                        <Link
                            className={`bg-[#f18802] text-2xl text-white rounded-full py-3 text-center justify-center ${isMobile ? 'px-1 pt-6 ' : 'px-6'}`} 
                            href="/give"
                            onClick={() => {
                            setSelectedLink("Home");
                            setSelectedSubLink("");}}>Give</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}