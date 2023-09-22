import HomeLayout from '../../components/HomeLayout';
import Link from "next/link";
import AboutNav from '../../components/NavBars/AboutNav'
import React, { useState, useEffect, useContext } from 'react';
import BodMap from "../../components/BodMap"

export default function Staff() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch(`/api/employees`)
            .then(res => res.json())
            .then(employees => setEmployees(employees))
    }, []);

    console.log(employees)


    return (
        <HomeLayout>
            <div className='h-screen bg-slate-300 bg-cover bg-no-repeat'>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                    {/* <div className="pt-20">
                            <AboutNav />
                        </div> */}
                        <div className=""></div>
                        <BodMap employees={employees} />
                    </div>

                <div className='grid mb-20 items-center justify-center'>
            </div>
        </HomeLayout>
    )
}