import Head from 'next/head';
import React, { useEffect, useState } from "react";

export default function HomeLayout({ children }) {
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
        <>
            <Head>
                <title>LighthouseAW</title>
                <link rel="icon" href="/images/favicon.ico" />
                <meta name="viewport" content={`width=device-width, ${isMobile? 'initial-scale=1.0' : ""}`}></meta>
            </Head>
            {children}
        </>
    );
}