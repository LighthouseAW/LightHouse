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

    // Qgiv — cleans up and re-initializes on every mount
    useEffect(() => {
        const existingQgiv = document.getElementById("qgiv-embedjs");
        if (existingQgiv && existingQgiv.parentNode) {
            existingQgiv.parentNode.removeChild(existingQgiv);
        }

        const embedContainer = document.querySelector('.qgiv-embed-container');
        if (embedContainer) embedContainer.innerHTML = '';

        const qgiv = document.createElement("script");
        qgiv.id = "qgiv-embedjs";
        qgiv.src = "https://secure.qgiv.com/resources/core/js/embed.js";
        qgiv.async = true;
        document.body.appendChild(qgiv);

        return () => {
            const qgiv = document.getElementById("qgiv-embedjs");
            if (qgiv && qgiv.parentNode) qgiv.parentNode.removeChild(qgiv);
        };
    }, []);

    // Bloomerang — loads once and hides the injected donate button
    useEffect(() => {
        const bloomerang = document.createElement("script");
        bloomerang.src = "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/lighthousearabworld/.widget-js/113664.js";
        bloomerang.async = true;
        document.body.appendChild(bloomerang);

        bloomerang.onload = () => {
            const hideButton = setInterval(() => {
                const btn = document.querySelector('.secure-btn-container');
                if (btn) {
                    btn.style.display = "none";
                    clearInterval(hideButton);
                }
            }, 100);
            setTimeout(() => clearInterval(hideButton), 5000);
        };

        return () => {
            const bloomerang = document.querySelector('script[src*="bloomerang"]');
            if (bloomerang && bloomerang.parentNode) bloomerang.parentNode.removeChild(bloomerang);
        };
    }, []);

    const title = "MAKING GOD'S LOVE VISIBLE TO EVERYONE IN THE MIDDLE EAST AND NORTH AFRICA"

    return (
        <HomeLayout>
            <div className={`bg-about bg-cover bg-no-repeat ${isMobile ? "min-h-screen" : "h-screen"}`}>
                <div className={`${isMobile ? "px-2 text-2xl" : "px-48 text-3xl"} static pt-36 z-20 text-white`}>
                    <h2>{title}</h2>
                </div>
                <div className={`absolute inset-0 ${isMobile ? "" : "bg-gradient-to-b from-transparent to-color"}`}></div>

                <div className="flex-col text-white relative z-20">
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
                                <div id='bloomerang-form-113664' className='pt-4 absolute left-40 top-0'></div>
                                <div className="w-1/2 pt-4 text-black z-20">
                                    <GiftInfo />
                                </div>
                                <div className="w-1/2 pt-28">
                                    <DonatingSection />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={`relative z-10 items-center ${isMobile ? "pt-24" : "pt-72"}`}>
                <div className={`${isMobile ? "mb-72" : ""} relative bg-rug h-[500px] bg-no-repeat bg-cover bg-center`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-color to-transparent"></div>
                </div>
                <Contact />
            </div>
        </HomeLayout>
    )
}
