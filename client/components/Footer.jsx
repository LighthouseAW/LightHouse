import React from "react";
import Image from "next/image";
import insta from "../public/logos/instagram.svg"
import youtube from "../public/logos/youtube.svg"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-900">
            <div className="text-white justify-center p-40">
                <div className="flex ">
                    <div className="w-96 mr-96">
                        {/* <h3 className="font-bold text-base mb-4">Sign Up for JonnyNice Newsletter</h3> */}
                        <p className="font-light text-sm mb-5">Sign up to receive exclusive news and discounts for beats.</p>
                        <Link href="/login"><button className="bg-neutral-600 rounded-full text-sm m-2 py-3 px-10 mb-10">Register</button></Link>
                    </div>
                    <div className="w-32"></div>
                    <h3 className="font-bold text-base">Follow</h3>
                        <div className="flex items-center space-x-5 mt-5">
                            {/* <Image src={fb} width="11.25" height="18" alt="Facebook" /> */}
                            <Image src={insta} width="15.75" height="18" alt="Instagram" />
                            {/* <Image src={twitter} width="18" height="18" alt="Twitter" /> */}
                            <Image src={youtube} width="20.25" height="18" alt="YouTube" />
                        </div>
                </div>
                <div className="flex">
                    <ul className="flex mt-10">
                        <li className="font-light text-sm mb-2 pr-2">@ 2023 Jonny Nice</li>
                        <li className="font-light text-sm mb-2 pr-2">Cookie policy</li>
                        <li className="font-light text-sm mb-2 pr-2">Terms and conditions</li>
                        <li className="font-light text-sm mb-2 pr-2">Privacy policy</li>
                        <li className="font-light text-sm mb-2 pr-2">Purchase terms and conditions</li>
                        <li className="font-light text-sm mb-2 pr-2">Statutory warranty</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}