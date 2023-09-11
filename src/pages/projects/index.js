import UserContext from '../../context/UserContext';
import React, { useState, useEffect, useContext } from 'react';
import HomeLayout from '../../components/HomeLayout';
import ProjectMap from "../../components/ProjectMap";
import CreateProject from "../../components/CreateProject"
import Link from "next/link";
import Image from "next/image"
import ProjectsNav from '../../components/NavBars/ProjectsNav'
import ProjectFeature from "../../components/ProjectFeature"

export default function Projects() {
    const [user, setUser] = useContext(UserContext);
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState([]);

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

    return (
        <HomeLayout>
            <div className='h-screen bg-projects bg-cover bg-no-repeat pt-24 relative'>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-[2]"></div>
                    {/* <div className=" z-10">
                        <ProjectsNav />
                    </div> */}
                    <div className="flex mb-0 mt-14 p-4 items-center justify-center">
                        <div className='w-1/2 px-4'>
                            <div className='bg-blue-300/50 rounded-lg shadow-md p-4 relative z-20'>
                                <div className='font-semibold text-5xl mb-2 text-white'>We see art opening hearts across the Arab World</div>
                                <p className="text-white text-2xl">We believe that art and media can communicate truth on a deep level</p>
                                <p className="text-white">Social Media is reaching millions across the Arab World and our mission is to connect them with the Gospel of Jesus Christ</p>
                                <p className="text-white">Films like 'Son of her Tears' have been shown in Arab World theaters and film festivals</p>
                                    {/* <ProjectFeature project={project} /> */}
                                    <Image alt="picture" src="/images/LighthouseReal1.png" width="100" height="100" />
                            </div>
                        </div>
                        <div className='w-1/2 px-4'>
                            {/* <ProjectMap projects={projects} /> */}
                            <div className="pt-20">
                            <div className='flex flex-col items-center justify-center m-auto'>
                                <p className='text-black mt-14 text-center text-4xl font-bold mb-14 z-10 px-6'>
                                    Your gifts help make the Gospel available to the Arab World
                                </p>
                                <p className='text-black text-center text-2xl font-bold mb-12 z-20'>
                                    We are so thankful for the support that you give
                                </p>
                            <button className={`bg-orange-500 text-xl text-stone-100 rounded-full py-3 text-center justify-center p-6 z-20 mb-12 `} href="/give">Give Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="bg-white py-20">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className=" absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-20 flex flex-col items-center w-5/6 bg-blue-300 justify-center m-auto">
                            <p className='text-[#F17F29] mt-8 text-center text-4xl font-bold mb-10'>
                                We are Changemakers & Storytellers
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                                <p className='text-[#F17F29] text-center text-2xl font-bold mb-4'>
                                    Passionate about using media to share about Jesus
                                </p>
                            <Link href="/mission" className="bg-[#F17F29] rounded-full p-4 mb-4">Our Mission →</Link>
                        </div>
                            <p className='text-[#F17F29] mt-2 text-center text-4xl font-bold mb-6'>
                                See all of our Outreach Projects ↓
                            </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-white pt-2 project-map ">
                <ProjectMap projects={projects} />
            </div>
    </HomeLayout>
    )
}