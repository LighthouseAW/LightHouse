import HomeLayout from '../../components/HomeLayout';
import ProjectsNav from '../../components/NavBars/ProjectsNav'
import StatisticsComponent from "../../components/StatisticsComponent"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from 'react'

export default function Impact() {
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

    const breakText = "We believe the light of God’s love penetrates the darkness"

    return (
        <HomeLayout>
            <div className='h-screen bg-slate-300 bg-cover bg-no-repeat '>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                    {/* <div className="pt-20">
                        <ProjectsNav />
                    </div> */}
                    <div className={`flex-col ${isMobile ? "" : "px-16 "} pt-28 items-center justify-center z-20 relative`}>
                    <h1 className="text-3xl font-semibold mb-4 z-20 relative">Ministry Statistics</h1>

                        <div className = "flex">
                        {isMobile ? <></>:<div className="w-1/2 p-12 ">
                        <div className="relative">
                        <svg className="z-10 absolute top-0 left-0 -mt-11 -ml-24 hidden lg:block" width="504" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect></pattern></defs><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect></svg>
                                    <Image alt="picture" src="/images/howReach.jpeg" width="650" height="650" className="z-20 relative" />
                            </div>
                        </div>}
                <div className={`${isMobile ? '' : 'w-1/2 p-12 '} flex flex-col items-center justify-center text-white`}>
                    <div className="items-center justify-center">
                        <StatisticsComponent
                        title="Daily Impact"
                        value="30k"
                        description="People receiving the Gospel Daily"
                        />
                        <StatisticsComponent
                        title="Monthly Impact"
                        value="15+"
                        description="New Followers of Christ each month"
                        />
                        <StatisticsComponent
                        title="Growing connections"
                        value="100+"
                        description="Seekers in follow-up conversations"
                        />
                        <StatisticsComponent
                        title="Training"
                        value="50+"
                        description="Arab Christians trained in media and mission"
                        />
                        <StatisticsComponent
                        title="Pre-evangelism"
                        value="Millions"
                        description="Connected though secular channels"
                        />
                        <StatisticsComponent
                        title="BelightFM"
                        value="500k"
                        description="Listening to Belight FM daily in lebanon and surrounding countries"
                        />
                    </div>
                    </div>
                </div>
                </div></div>
                <div className={`${isMobile ? "pt-24" : "h-20  p-24"} items-center justify-center`}>
            </div>
            <div className="bg-color pb-12">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className=" flex flex-col items-center w-5/6 bg-SOFCall bg-cover bg-no-repeat justify-center m-auto">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                            <p className='text-white mt-8 text-center text-5xl font-bold pb-10 px-2 z-20 relative'>
                                {breakText}
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <Link
                                href="/give"
                                className="text-black underline text-center text-2xl font-bold mb-8 z-20 relative"
                                onClick={() => {
                                    setSelectedLink("Home");
                                    setSelectedSubLink("");}}
                                >Get Involved →</Link>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6 z-20 relative'>
                            </p>
                    </div>
                </div>
            </div>
        </div>
        </HomeLayout>
    )
}