import Image from 'next/image';
import Link from "next/link";
import React, { useState, useEffect } from "react"

export default function BodMap({ employees }) {
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

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 ${isMobile ? "" : "p-32"}  pt-40`}>
            {employees.map((employee, index) => {
                return (
                <div key={index} className="bg-slate-200 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 flex flex-col justify-center  z-20">
                    <Link href={`/staff`} className="font-semibold text-black text-lg mb-2 ">{employee.name}</Link>
                        <div className="image-container">
                            {/* <img src={photoUrl} alt="Project Photo" layout="responsive" width={300} height={300} /> */}
                        </div>
                    <div className="text-black  mt-2">{employee.blurb}</div>
                </div>
            )})}
        </div>
    )
}