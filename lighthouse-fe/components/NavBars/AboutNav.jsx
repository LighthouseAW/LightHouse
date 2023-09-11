import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";

export default function AboutNav() {

    return (
        <div className='fixed w-full z-8 h-16 items-center justify-center flex  bg-[#DCE2C8]/50 text-black items-center' >
                <div className="flex items-center justify-center">
                    <div className="top-8 w-full flex items-center justify-center text-xl">
                        <div className="">
                            <Link
                            href="/about"
                            className="h-16 w-80 hover:bg-orange-300 flex justify-center items-center text-xl relative"
                            >
                            About Lighthouse
                            </Link>
                        </div>
                        <div className="">
                                <Link
                                    href="/about/statementOfFaith"
                                    className="h-16 w-80 hover:bg-orange-300 flex justify-center items-center text-xl relative"
                                >
                                    Statement of Faith
                                </Link>
                        </div>
                        <div className="">
                                <Link
                                    href="/about/staff"
                                    className="h-16 w-40 hover:bg-orange-300 flex justify-center items-center text-xl relative"
                                >
                                    Staff
                                </Link>
                        </div>
                </div>
            </div>
        </div>
    );
}