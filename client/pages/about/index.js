import React, { useState, useEffect } from "react";
import HomeLayout from '../../components/Index/HomeLayout';
import Link from "next/link";
import Image from 'next/image'
import AboutNav from '../../components/NavBars/AboutNav'
import ModalVideo from "../../components/Index/ModalVideo";
import Timeline from "../../components/About/Timeline";
import { useActiveLink } from '../../context/ActiveLinkContext';

export default function About() {
    const youtubeVideoId = "a5PtUpO8kss";
    const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
    const { selectedLink, setSelectedLink } = useActiveLink();
    const { selectedSubLink, setSelectedSubLink } = useActiveLink();
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

    const sec1Title = "Arabs need to hear the Gospel"
    const sec1 = "The Arab world encompasses the land where Christianity was born. However, the vast majority of people have little access to the gospel or a church in their community. Lighthouse Arab World focuses on people groups who have little opportunity to hear and understand the gospel. With a few exceptions, many cities and regions still have no Christian presence. Where there is a presence, the Church is often under pressure, and Christians experience persecution."

    const sec2Title = "From the Arab World, To the Arab World, In the Arab World"
    const sec2 = "We want our audience to see faces and voices that they recognize, that speak to them on a deep level. Our content is primarily in Arabic, written and produced by those with a passion to reach the Arab mind and Arab heart. Many on our team are not from a Christian background, creating a passion to reach out and disciple others like themselves. We use all aspects of media, but especially social media and even over the air secular television to connect with our Arabic audience and show them that being a Christian and participating in culture is possible."

    const sec3Title = "Where we are"
    const sec3 = "Our ministry and partners live and operate in the Middle East and North Africa, primarily in Lebanon, Egypt and Morocco. Our goal is to create the highest quality content possible to eliminate unnecessary barriers to the message of Jesus Christ and the Bible."

    return (
        <HomeLayout>
            <div className='h-full bg-white bg-cover bg-no-repeat flex items-center justify-center '>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-transparent"></div>
                    <div className={`${isMobile ? 'text-center' : "" } w-5/6 relative z-20 pt-40`}>
                        <div className=" p-4 rounded-lg">
                        <p className={`${isMobile ? 'text-center' : "" }  z-20 pb-4 text-black text-4xl font-bold`}>{sec1Title}</p>
                            <div className={`flex ${isMobile ? 'items-center justify-center' : ""}  space-x-16`}>
                            <div className={`${isMobile ? "" : "w-1/2"} flex relative z-20`}>
                                <p className={` ${isMobile ? 'text-center px-2' : "" } z-20 text-black text-xl`}>{sec1}</p>
                            </div>
                            {isMobile ? <></> : <div className="w-1/2 relative z-20 flex items-center justify-center pb-20">
                                <div>
                                    <div className="relative ">
                                    <svg className="z-10 absolute top-0 right-0 -mt-11 -mr-24 hidden lg:block" width="504" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect></pattern></defs><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect></svg>
                                    <Image alt="picture" src="/images/newAbout.jpeg" width="650" height="650" className="z-20 relative" />
                                </div>
                                </div>
                            </div>}
                        </div>
                    </div></div>
                </div>
            <div className='flex items-center justify-center bg-color '>
            <div className={`${isMobile ? 'text-center pt-12' : "" } w-5/6 relative z-20 pb-12`}>
                        <p className={`z-20 pb-4 text-black text-4xl ${isMobile ? "" : "text-right pl-96"} font-bold `}>{sec2Title}</p>
                        <div className='flex space-x-16'>
                        {isMobile ? <></> : <div className="w-1/2 relative z-20 flex items-center justify-center pb-20">
                                <div>
                                    <div className="relative">
                                    <svg className="z-10 absolute top-0 left-0 -mt-11 -ml-24 hidden lg:block" width="504" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect></pattern></defs><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect></svg>
                                    <Image alt="picture" src="/images/unique.jpeg" width="650" height="650" className="z-20 relative" />
                                </div>
                                </div>
                            </div>}
                            <div className={`${isMobile ? "" : "w-1/2 text-right"} flex relative z-20`}>
                                <p className={`z-20 text-black text-xl ${isMobile ? "px-2" : "text-right"}`}>{sec2}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center bg-color '>
                <div className={`${isMobile ? 'text-center' : "" } w-5/6 relative z-20 pb-32`}>
                        <p className={`z-20 pb-4 text-black text-4xl font-bold`}>{sec3Title}</p>
                        <div className='flex  space-x-16'>
                            <div className={`${isMobile ? "" : "w-1/2"} flex relative z-20`}>
                                <p className={`z-20 text-black text-xl px-2`}>{sec3}</p>
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
            <div className={`bg-color ${isMobile ? "pt-64   " : 'py-20'}`}>
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-20 flex flex-col items-center w-5/6 bg-aboutBreak2 bg-cover bg-no-repeat justify-center m-auto">
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-white'></div>
                            <p className='text-white mt-8 text-center text-4xl font-bold mb-10 z-20 relative'>
                                We believe art can show the love of Jesus to everyone
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <Link href="/about/statementOfFaith"
                            className="text-black underline text-center text-2xl font-bold mb-8 z-20 relative"
                            onClick={() => {
                                setSelectedLink("ourWork");
                                setSelectedSubLink("ourWork");
                            }}
                            >Our Statement of Faith →</Link>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6 z-20 relative'>
                                Learn about our history ↓
                            </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-color">
            </div>
            <div className="bg-color py-2 pb-12 flex items-center justify-center">
                <Timeline />
            </div>
        </HomeLayout>
    )
}
