import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import fb from "../public/logos/fb.svg"
import youtube from "../public/logos/youtube.svg"
import Link from "next/link";
import UserContext from "../context/UserContext"

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const [selectedLink, setSelectedLink] = useState("");

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
        fetch("/api/me").then((r) => {
            if (r.ok) {r.json().then((data) => {
                setUser(data)});
            }});
        }, [setUser]);

    const handleLogOut = (e) => {
        fetch(`/api/logout`,{
            method: 'DELETE'
            })
            .then(() => {
                fetch("/api/me").then((r) => {
                    if (r.ok) {r.json().then((data) => {
                        setUser(data)});
                    }});
            });
    }

    const footText="Lighthouse Arab World, a ministry of Lighthouse Media NA Inc. is a 501(C)(3) Not-for-profit organzation. Copyright 2019-2023 All Rights Reserved."

    return (
        <footer className="bg-zinc-900 footer">
            <div className="text-white justify-center p-8">
                <div className="flex">
                    <div className={`w-96 ${isMobile ? "":'mr-80'}`}>
                <p className="font-light text-sm mb-5">{footText}</p>
                    <Link href="/privacyPolicy"><button className="underline">Privacy Policy</button></Link>
                </div>
                    <div className="w-32"></div>
                        <h3 className="font-bold text-base ml-auto">Follow
                            <div className={`flex space-x-5 ${isMobile ? "" : "pr-20"} pt-4`}>
                        <Link href="https://www.facebook.com/lighthouseaw" ><Image src={fb} width="11.25" height="18" alt="Facebook" /></Link>
                            {/* <Image src={twitter} width="18" height="18" alt="Twitter" /> */}
                        <Link href="https://www.youtube.com/@LighthouseAW" ><Image src={youtube} width="11.25" height="18" alt="YouTube" /></Link>
                            </div>
                            <div className="pt-6">
                                <Link href="/login" >
                                        Team Portal
                                </Link>
                            </div>
                            {user?.username == "Guest" || user == null ? null :
                                <div className="">
                                    <ul className='pt-2'>
                                        <Link href="/" onClick={handleLogOut} className='z-20'>
                                            Logout
                                        </Link>
                                    </ul>
                                </div>
                            }
                        </h3>
                    </div>
                <div className="flex">
                    <ul className="flex mt-10">
                        <li className="font-light text-sm mb-2 pr-2">@ 2023 Lighthouse</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}