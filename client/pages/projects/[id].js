import React, { useState, useEffect, useContext } from 'react';
import HomeLayout from '../../components/HomeLayout';
import UserContext from '../../context/UserContext';
import { useRouter } from 'next/router';
import Link from "next/link";
import VideoPlayer from "../../components/VideoPlayer"

export default function Project() {
    const [user, setUser] = useContext(UserContext);
    const [project, setProject] = useState([]);
    const router = useRouter()
    const id = router.query.id

    useEffect(() => {
        fetch(`/api/projects/${id}`)
            .then(res => res.json())
            .then(project => {
                setProject(project);
                console.log(project)
            })
    }, [id]);


    return (
        <HomeLayout>
            <div className='min-h-screen bg-white bg-cover bg-no-repeat flex items-center justify-center'>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-transparent">
                </div>
                <Link href="/projects" className="absolute top-32 left-16 z-30 underline text-black px-4 py-2 rounded-md ">← Go Back</Link>
                    <div className="flex flex-col text-center text-l items-center justify-center z-20 relative pt-40 text-black p-4 space-y-6 w-1/2">
                        <h1 className="text-6xl">{project.name}</h1>
                        <div classname="">{project.subtitle}</div>
                        <VideoPlayer link={project.video} />
                        {project.website && project.website !== "" && (
                            <Link href={project.website} target='_blank' className="rounded-lg p-2 underline">Website →</Link>
                        )}
                        <div classname=" text-center text-xl p-4">{project.mission_statement}</div>
                        <div classname=" text-center text-xl p-4">{project.about}</div>
                        <div classname=" text-center text-xl p-4">{project.blurb}</div>

                    </div>
                </div>
            <div className='bg-color grid pb-20 items-center justify-center'>
            <Link href="/projects" className="z-30 underline text-black px-4 py-2 rounded-md "></Link>
            </div>
        </HomeLayout>
    )
}