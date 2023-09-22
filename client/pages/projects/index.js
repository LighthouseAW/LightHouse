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
            <div className='h-full bg-slate-300 bg-cover bg-no-repeat flex items-center justify-center '>
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-color"></div>
                    <div className="flex items-center space-x-6 justify-center pt-24 w-5/6 relative z-20">
                        <div className="w-1/2  relative z-20">
                        <p className={`z-20 text-black text-6xl font-bold pb-4`}>How we reach people</p>
                            <p className={`z-20 text-black text-4xl font-bold`}>We see art opening hearts across the Arab World</p>
                            <p className={`z-20 text-black py-5 text-2xl`}>Social Media is reaching millions across the Arab World and our mission is to connect them with the Gospel of Jesus Christ</p>
                        </div>
                        <div className="w-1/2 relative z-20 flex items-center justify-center pt-20 pb-20">
                            <div>
                            <div className="relative">
                                <Image alt="picture" src="/images/howReach.jpeg" width="450" height="450" />
                                <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent to-color"></div>
                            </div>
                            </div>
                        {/* <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-color h-[750px] w-[800px]"></div> */}
                        </div>
                    </div>
                </div>
            <div className="bg-color ">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className="  flex flex-col items-center w-5/6 bg-projectsBreak bg-cover bg-no-repeat justify-center m-auto">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                            <p className='text-black mt-8 text-center text-6xl font-bold pb-10 z-20 relative'>
                                We believe that art and media can communicate truth on a deep level
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <div
                                className="text-black  text-center text-2xl font-bold mb-8 z-20 relative"
                                >Films like 'Son of her Tears' have been shown in Arab World theaters and film festivals</div>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6 z-20 relative'>
                                Learn about our Outreach Projects ↓
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
                            <p className='text-black mt-8 text-center text-6xl font-bold pb-10 z-20 relative'>
                                Your gifts help make the gospel available to the world
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <div
                                className="text-black  text-center text-2xl font-bold mb-8 z-20 relative"
                                >We are so thankful for the support that you give</div>
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