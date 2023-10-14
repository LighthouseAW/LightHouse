import UserContext from '../../context/UserContext';
import React, { useState, useEffect, useContext } from 'react';
import HomeLayout from '../../components/HomeLayout';
import ProjectMap from "../../components/ProjectMap";
import CreateProject from "../../components/CreateProject"
import Link from "next/link";
import Image from "next/image"
import ProjectsNav from '../../components/NavBars/ProjectsNav'

export default function Projects() {
    const [user, setUser] = useContext(UserContext);
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState([]);
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
        fetch(`/api/projects`)
            .then(res => res.json())
            .then(projects => setProjects(projects))
    }, []);

    useEffect(() => {
        fetch(`/api/projects/1`)
            .then(res => res.json())
            .then(project => setProject(project))
    }, []);

    const title1 = 'Ministry and strategy must change to reach Arab Muslims'
    const title2 = 'We see art opening hearts across the Arab World'
    const title3 = 'There has been missionary efforts in the Middle East and North Africa for 150 years. While God has worked in miraculous and transformative ways, we believe that missions in the region must change and focus on new and unique methods that break through historic barriers.'

    const break1 = 'We believe that art and media can communicate truth on a deep level'
    const break2 = "Films like 'Son of her Tears' have been shown in Arab World theaters and film festivals"
    const break3 = 'Learn about our Outreach Projects ↓'

    const break21 = "Your gifts help make the gospel available to the world"
    const break22 = "We are so thankful for the support that you give"

    return (
        <HomeLayout>
            <div className='h-full bg-white bg-cover bg-no-repeat flex items-center justify-center '>
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-slate-300 to-transparent"></div>
                    <div className="flex items-center space-x-6 justify-center pt-24 w-5/6 relative z-20">
                        <div className={`${isMobile ? "" : "w-1/2 "}  relative z-20`}>
                            <p className={`z-20 text-black ${isMobile ? "text-4xl" : "text-6xl"}  font-bold pb-4`}>{title1}</p>
                            {/* <p className={`z-20 text-black text-4xl font-bold`}>{title2}</p> */}
                            <p className={`z-20 text-black py-5 text-2xl`}>{title3}</p>
                        </div>
                        {isMobile ? <></>:<div className="w-1/2 relative z-20 flex items-center justify-center pt-20 pb-20">
                            <div>
                            <div className="relative">
                                <Image alt="picture" src="/images/Men Cooking.png" width="500" height="500" className="relative z-20" />
                                <svg className="z-10 absolute top-0 right-0 -mt-11 -mr-24 hidden lg:block" width="504" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect></pattern></defs><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect><rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect></svg>
                            </div>
                            </div>
                        {/* <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-color h-[750px] w-[800px]"></div> */}
                        </div>}
                    </div>
                </div>
            <div className="bg-color ">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className="  flex flex-col items-center w-5/6 bg-projectsBreak bg-cover bg-no-repeat justify-center m-auto">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                            <p className={`text-black mt-8 text-center ${isMobile ?  "text-3xl" : "text-6xl"}  font-bold pb-10 z-20 relative`}>
                                {break1}
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <div
                                className="text-black  text-center text-2xl font-bold mb-8 z-20 relative"
                                >{break2}</div>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6 z-20 relative'>
                                {break3}
                            </p>
                    </div>
                </div>
            </div>
        </div>
            <div className='flex items-center justify-center  bg-color '>
                <div className="flex items-center justify-center py-16 z-20">
                    <div className="w-5/6 z-20 flex items-center justify-center space-x-6  ">
                    <div className="bg-white pt- project-map ">
                <ProjectMap projects={projects} />
            </div>
                </div>
            </div>
        </div>
        <div className="bg-color pb-12">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className="  flex flex-col items-center w-5/6 bg-projBreak2 bg-cover bg-no-repeat justify-center m-auto">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                            <p className={`text-black mt-8 text-center ${isMobile ? "text-3xl" : "text-6xl "} font-bold pb-10 z-20 relative`}>
                                {break21}
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <div
                                className="text-black  text-center text-2xl font-bold mb-8 z-20 relative"
                                >{break22}</div>
                        </div>
                            <Link href='/give' className=' underline text-black mt-2 text-center text-4xl font-bold mb-6 z-20 relative'>
                                Give now →
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </HomeLayout>
    )
}