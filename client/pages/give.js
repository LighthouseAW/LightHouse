import { useEffect, useState } from "react";
import HomeLayout from '../components/Index/HomeLayout';
import DonatingSection from "../components/Give/DonatingSection"
import GiftInfo from "../components/Give/GiftInfo"
import Contact from "../components/Contact"

export default function Give() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const userAgent = window.navigator.userAgent;
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
        };
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    // Manually inject both embed scripts after mount
    useEffect(() => {
        // Bloomerang
        const bloomerang = document.createElement("script");
        bloomerang.src = "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/lighthousearabworld/.widget-js/113664.js";
        bloomerang.async = true;
        document.body.appendChild(bloomerang);

        // Qgiv
        if (!document.getElementById("qgiv-embedjs")) {
            const qgiv = document.createElement("script");
            qgiv.id = "qgiv-embedjs";
            qgiv.src = "https://secure.qgiv.com/resources/core/js/embed.js";
            qgiv.async = true;
            document.body.appendChild(qgiv);
        }

        return () => {
            // Cleanup on unmount
            document.body.removeChild(bloomerang);
        };
    }, []);

    const title = "MAKING GOD'S LOVE VISIBLE TO EVERYONE IN THE MIDDLE EAST AND NORTH AFRICA"

    return (
        <HomeLayout>
            <div className='h-screen bg-about bg-cover bg-no-repeat'>
                <div className={`${isMobile ? "px-2 text-2xl" : "px-48 text-3xl"} static pt-36 z-20 text-white`}>
                    <h2>{title}</h2>
                </div>
                <div className={`absolute inset-0 ${isMobile ? "" : "bg-gradient-to-b from-transparent to-color"}`}></div>

                <div className="flex-col text-white relative z-20">
                    {/* Qgiv embed container */}
                    <div className="flex flex-col justify-center items-center pt-8">
                        <div
                            className="qgiv-embed-container"
                            data-qgiv-embed="true"
                            data-embed-id="90997"
                            data-embed="https://secure.qgiv.com/for/lighthousearabworld/embed/90997/amount/1842322/onetime/"
                            data-width="630"
                        ></div>
                    </div>

                    {isMobile ? (
                        <div className="flex flex-col pt-8">
                            <div>
                                <GiftInfo />
                            </div>
                            <div className="pb-8">
                                <DonatingSection />
                            </div>
                        </div>
                    ) : (
                        <div className="flex-col">
                            <div className="flex w-full px-12">
