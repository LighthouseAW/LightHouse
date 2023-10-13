import HomeLayout from '../../components/HomeLayout';
import Image from "next/image";
import Link from "next/link"
import AboutNav from '../../components/NavBars/AboutNav'
import React, { useState, useEffect, useContext } from 'react';
import BodMap from "../../components/BodMap"

export default function Staff() {
    const [employees, setEmployees] = useState([])
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

    useEffect(() => {
        fetch(`/api/employees`)
            .then(res => res.json())
            .then(employees => setEmployees(employees))
    }, []);

    console.log(employees)

    const sec1Title = "Lighthouse Arab World Team"
    const sec1 = "The Lighthouse Arab World team is headquartered in Beirut Lebanon but has also team members across the Middle East and North Africa in Egypt, Tunisia and Morocco. Each person brings a passion to see Jesus known and worshipped across the Arab World and a skillset in media such as film directing, video editing, radio programming, script writing, presenting and many other areas. "
    const sec2 = "The team is supported by a fundraising and operations team based in the United States. "
    const breakWords = "We believe the light of God’s love penetrates the darkness"

    return (
        <HomeLayout>
            <div className='h-full bg-slate-300 bg-cover bg-no-repeat'>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                <div className={`${isMobile ? "" : "px-44"} relative z-20 pt-48`}>
                        <p className={`${isMobile ? "text-center" : ""} z-20 pb-4 text-black text-4xl font-bold`}>{sec1Title}</p>
                        <div className={`${isMobile ? "text-center" : ""} flex  space-x-16 `}>
                            <div className={`${isMobile ? "" : "w-1/2"}  flex-col relative z-20`}>
                                <p className={`z-20 text-black text-xl pb-4`}>{sec1}</p>
                                <p className={`z-20 text-black text-xl pb-4`}>{sec2}</p>
                            </div>
                            {isMobile ? <></> : <div className="w-1/2 relative z-20 flex items-center justify-center pb-20">
                                <div>
                                    <div className="relative ">
                                    <svg className="z-10 absolute top-0 right-0 -mt-11 -mr-24 hidden lg:block" width="504" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect></pattern></defs><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect></svg>
                                    <Image alt="picture" src="/images/about.jpeg" width="650" height="650" className="z-20 relative" />
                                </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                    </div>
                    <div className="bg-color ">
                        <div className='z-20 relative'>
                            <div className="flex items-center">
                                <div className="  flex flex-col items-center w-5/6 bg-band bg-cover bg-no-repeat justify-center m-auto">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                                    <p className={`text-[#f18802] mt-8 text-center ${isMobile ? "text-2xl" : 'text-6xl'} font-bold pb-10 z-20 relative`}>
                                        {breakWords}
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
                                        Board of Directors ↓
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid mb-10 items-center justify-center'>
                <BodMap employees={employees} />
            </div>
        </HomeLayout>
    )
}