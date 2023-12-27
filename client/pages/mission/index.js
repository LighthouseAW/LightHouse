import HomeLayout from '../../components/Index/HomeLayout';
import MissionNav from '../../components/NavBars/MissionNav'
import Link from 'next/link'
import Image from 'next/image'
import { useActiveLink } from '../../context/ActiveLinkContext'
import React, { useState, useEffect } from "react"

export default function Mission() {
    const [isMobile, setIsMobile] = useState(false);
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

    const breakWords = "We believe the light of God’s love penetrates the darkness"
    const missionTitle = "Our Mission"
    const missionWords = "Building bridges in a hostile environment and breaking down walls of hate, we use the power of the arts and media to bring the light of Jesus to the Arab World."
    const visionTitle2 = "Our Vision"
    const visionWords = "We envision a future where the gospel of Jesus Christ is advancing among all peoples of the Arab World, where believers are bold and empowered to reach out to their neighbors, where the Church is healthy, growing and united in love, and where believers from Muslim backgrounds are living with dignity and thriving in their own cultures while contributing to its flourishing."


    return (
        <HomeLayout>
            <div className='h-full bg-white bg-cover bg-no-repeat flex items-center justify-center '>
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-slate-300 to-transparent"></div>
                <div className={`${isMobile ? " px-2 pb-8" : ""} w-5/6 relative z-20 pt-48`}>
                        <p className={`z-20 pb-4 text-black text-5xl font-bold`}>{missionTitle}</p>
                        <div className='flex  space-x-14'>
                            <div className={`${isMobile ? "" : " w-1/2"} flex  relative z-20`}>
                                <p className={`z-20 text-black text-2xl`}>{missionWords}</p>
                            </div>
                            {isMobile ? <></>:<div className="w-1/2 relative z-20 flex items-center justify-center pb-20">
                                <div>
                                    <div className="relative ">
                                    <Image alt="picture" src="/images/beaLight.jpeg" width="750" height="750" className="z-20 relative"/>
                                    <svg className="z-10 absolute top-0 right-0 -mt-11 -mr-24 hidden lg:block" width="504" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect></pattern></defs><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect></svg>
                                </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            <div className='flex items-center justify-center  bg-color '>
                <div className={`${isMobile ? "px-2" : ""} w-5/6 relative z-20 pb-20 pt-8 `}>
                    <p className={`z-20 pb-4 text-black text-4xl font-bold ${isMobile ? "" : "pl-96 text-right"}  `}>{visionTitle2}</p>
                        <div className='flex space-x-16'>
                        {isMobile ? <></>:<div className="w-1/2 relative z-20 flex items-center justify-center pb-20">
                                <div>
                                    <div className="relative">
                                    <svg className="z-10 absolute top-0 left-0 -mt-11 -ml-24 hidden lg:block" width="504" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect></pattern></defs><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect></svg>
                                    <Image alt="picture" src="/images/vision.jpeg" width="650" height="650" className="z-20 relative" />
                                </div>
                                </div>
                            </div>}
                            <div className={`${isMobile ? "" : "w-1/2 text-right"}  flex relative z-20`}>
                                <p className={`z-20 text-black text-xl ${isMobile ? "" : "text-right"} `}>{visionWords}</p>
                            </div>
                        </div>
                    </div>
                {/* <div className="flex items-center justify-center py-32 z-20">
                    <div className="w-5/6 z-20 flex items-center justify-center space-x-6  ">
                        <div className="w-1/2  relative z-20">
                            <div>
                                <div className="relative">
                                    <Image alt="picture" src="/images/vision.jpeg" width="750" height="750" className="z-20 relative" />
                                    <svg className="z-10 absolute top-0 left-0 -mt-11 -ml-24 hidden lg:block" width="504" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect></pattern></defs><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect></svg>
                                </div>
                            </div>
                        </div>
                    <div className="w-1/2  relative z-20">
                        <p className={`z-20 text-black text-6xl font-bold`}>Our Vision</p>
                        <p className={`z-20 text-black py-5 text-3xl`}>We envision a future where the gospel of Jesus Christ is advancing among all peoples of the Arab World, where believers are bold and empowered to reach out to their neighbors, where the Church is healthy, growing and united in love, and where believers from Muslim backgrounds are living with dignity and thriving in their own cultures while contributing to its flourishing.</p>
                    </div>
                        </div>
                </div> */}
        </div>
        <div className="bg-color pb-12">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className="  flex flex-col items-center w-5/6 bg-band bg-cover bg-no-repeat justify-center m-auto">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                            <p className={`text-[#f18802] mt-8 text-center ${isMobile ? "text-3xl" : "text-6xl"}  font-bold pb-10 z-20 relative`}>
                                {breakWords}
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <Link
                                href="/coreValues"
                                className="text-black underline text-center text-2xl font-bold mb-8 z-20 relative"
                                onClick={() => {
                                    setSelectedLink("Home");
                                    setSelectedSubLink("");}}
                                >Our Core Values →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </HomeLayout>
    )
}