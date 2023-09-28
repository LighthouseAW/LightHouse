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

    const title1 = 'Where We Serve'
    const title2 = 'We see art opening hearts across the Arab World'
    const title3 = 'Lighthouse Arab World was born in the hearts and minds of a small group of people in North Africa who believed, and continue to believe that it is possible to break down walls of hate towards Christ and Christians. The countries that comprise the Middle East and North Africa are some of the least reached in the world, and for people groups that are categorized as reached, the church is very small and often underground.'

    return (
        <HomeLayout>
            <div className='min-h-screen bg-white bg-cover bg-no-repeat flex items-center justify-center'>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-transparent"></div>
                    <div className="w-5/6 justify-center flex pt-32 ">
                        <div className="w-1/2 pt-12 z-20 relative">
                            <p className={`z-20 text-black text-6xl font-bold pb-4`}>{title1}</p>
                            {/* <p className={`z-20 text-black text-4xl font-bold`}>{title2}</p> */}
                            <p className={`z-20 text-black py-5 text-2xl`}>{title3}</p>
                        </div>
                        <div className=" w-1/2 flex flex-col items-center justify-center text-white">
                        <Groups groups={groups} />
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}