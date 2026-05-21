import { useEffect, useState } from "react";
import Script from "next/script";
import HomeLayout from '../components/Index/HomeLayout';
import Link from "next/link"
import DonatingSection from "../components/Give/DonatingSection"
import GiftInfo from "../components/Give/GiftInfo"
import Contact from "../components/Contact"

export default function Give() {
    const [isMobile, setIsMobile] = useState(false);

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

    const title = "MAKING GOD'S LOVE VISIBLE TO EVERYONE IN THE MIDDLE EAST AND NORTH AFRICA"

    return (
        <HomeLayout>
            
            <div className='h-screen bg-about bg-cover bg-no-repeat '>
                <div className={`${isMobile ? " px-2 text-2xl" : "px-48 text-3xl"} static  pt-36 z-20 text-white `}><h2>{title}</h2></div>
                <div className={`absolute inset-0 ${isMobile ? "" : "bg-gradient-to-b from-transparent to-color"}`}></div>
                <div className="flex-col text-white relative z-20">
                    <div className="flex flex-col justify-center items-center pt-8">
<div
                            className="qgiv-embed-container"
                            data-qgiv-embed="true"
                            data-embed-id="90997"
                            data-embed="https://secure.qgiv.com/for/lighthousearabworld/embed/90997/amount/1842322/onetime/"
                            data-width="630"
                        ></div>
                        <Script
                            id="qgiv-embedjs"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `(function(w, d, s, id){var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "https://secure.qgiv.com/resources/core/js/embed.js";fjs.parentNode.insertBefore(js, fjs);})(window, document, 'script', 'qgiv-embedjs');`
                            }}
                        /></div>
                    { isMobile ? 
                    <div className = "flex flex-col pt-8">
                        {/* <div id='bloomerang-form-113664'></div> */}
                        <div>
                        <GiftInfo />
                        </div>
                        <div className="pb-8">
                        <DonatingSection />
                        </div>
                    </div> : 
                <div className="flex-col">
                    <div className="flex w-full px-12">
                    <div id='bloomerang-form-113664' className='pt-4 absolute left-40 top-0'></div>
                            <div className="w-1/2 pt-4 text-black z-20">
                            <GiftInfo />
                        </div>
                            <div className="w-1/2 pt-28">
                            <DonatingSection />
                        </div>
                    </div>
                    </div>}

                </div>
            </div>
            <div className={`items-center ${isMobile ? "pt-12" : "pt-72 "}`}>
                    <div className={`${isMobile ? "mb-72" : ""} relative bg-rug h-96 bg-no-repeat bg-cover bg-center`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-color to-transparent"></div>
                </div>
                <Contact />
            </div>
        </HomeLayout>
    )
}
