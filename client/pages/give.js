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
            <Script 
                src="https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/lighthousearabworld/.widget-js/113664.js" 
                strategy="lazyOnload"
            />
            <div className='h-screen bg-about bg-cover bg-no-repeat '>
                <div className={`${isMobile ? " px-2 text-2xl" : "px-48 text-3xl"} static  pt-36 z-20 text-white `}><h2>{title}</h2></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                <div className="flex-col text-white relative z-20">
                    { isMobile ? 
                    <div className = "flex flex-col justify-center items-center h-screen w-screen">
                        <div id='bloomerang-form-113664'></div>
                        <div style={{ paddingTop: '84rem' }}>
                        <GiftInfo />
                        </div>
                        <div className="pb-8">
                        <DonatingSection />
                        </div>
                        {/* <DonatingSection /> */}
                    </div> : 
                <div className="flex-col">
                    <div className="flex w-full">
                    <div id='bloomerang-form-113664' className='pt-24 absolute left-40 top-0'></div>
                            <div className = "w-3/5"></div>
                            <div className="w-1/2 pt-28 text-black z-20">
                            <GiftInfo />
                        </div>
                    </div>
                    <div className= "px-48">
                    <DonatingSection />
                    </div>
                    </div>}

                </div>
            </div>
            <div className={`items-center ${isMobile ? "pt-96" : "pt-72 "}`}>
                    <div className={`${isMobile ? "mb-72" : ""} relative bg-rug h-96 bg-no-repeat bg-cover bg-center`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-color to-transparent"></div>
                </div>
                <Contact />
            </div>
        </HomeLayout>
    )
}
