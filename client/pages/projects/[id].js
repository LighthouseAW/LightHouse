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
            <div className='h-screen bg-slate-300 bg-cover bg-no-repeat'>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color">
                    
                </div>
                    
                    <div className="flex flex-col items-center justify-center pt-80 text-white">
                        <h1 className="text-6xl">{project.name}</h1>
                        <div>{project.subtitle}</div>
                        <div>{project.blurb}</div>
                        <div>{project.video}</div>
                        <div>{project.mission_statement}</div>
                        <VideoPlayer link={project.video} />
                    </div>
                </div>
            <div className='bg-color grid pb-20 items-center justify-center'>
            </div>
        </HomeLayout>
    )
}