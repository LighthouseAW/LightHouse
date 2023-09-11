import HomeLayout from '../../components/HomeLayout';
import ProjectsNav from '../../components/NavBars/ProjectsNav'
import React, { useState, useEffect, useContext } from 'react';
import Groups from "../../components/Groups"

export default function WhereWeServe() {
    const [groups, setGroups] = useState({})

    useEffect(() => {
        fetch(`https://api.joshuaproject.net/v1/countries.json?api_key=5378a7708ebc&primary_languages=arb`)
            .then(res => res.json())
            .then(groups => {
                setGroups(groups);
                console.log("Fetched Groups:", groups);
            })
    }, []);


    return (
        <HomeLayout>
            <div className='h-screen bg-about bg-cover bg-no-repeat'>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                {/* <div className="pt-20">
                    <ProjectsNav />
                </div> */}
                <div className="flex flex-col items-center justify-center pt-80 text-white">
                    <Groups groups={groups} />
                </div>
            </div>
            <div className='grid mb-20 items-center justify-center'>
        </div>
        </HomeLayout>
    )
}