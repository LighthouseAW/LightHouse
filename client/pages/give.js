import { useEffect, useState } from "react";
import HomeLayout from '../components/HomeLayout';
import Link from "next/link"
import DonatingSection from "../components/DonatingSection"
import GiftInfo from "../components/GiftInfo"
import Contact from "../components/Contact"

export default function Give() {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        if (!scriptLoaded) {
            const script = document.createElement("script");
            script.src = 'https://lighthousearabworld.kindful.com/embeds/c685c50a-25c6-48be-bf8e-1a34b337a64c/init.js?type=form';
            script.dataset.embedId = 'c685c50a-25c6-48be-bf8e-1a34b337a64c';
            script.dataset.lookupType = 'jquery-selector';
            script.dataset.lookupValue = '#kindful-donate-form-c685c50a-25c6-48be-bf8e-1a34b337a64c';

            document.head.appendChild(script);

            setScriptLoaded(true);

            return () => {
                document.head.removeChild(script);
            };
        }
    }, [scriptLoaded]);

    const title = "MAKING GOD'S LOVE VISIBLE TO EVERYONE IN THE MIDDLE EAST AND NORTH AFRICA"

    return (
        <HomeLayout>
            <div className='h-screen bg-about bg-cover bg-no-repeat '>
                <div className="static px-48 pt-36 z-20 text-white text-3xl"><h2>{title}</h2></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                <div className="flex items-center justify-center text-white relative z-20">
                    <div className="flex w-full">
                            <div className='kindful-embed-wrapper pt-24' id='kindful-donate-form-c685c50a-25c6-48be-bf8e-1a34b337a64c'></div>
                        <div className="w-2/5  pt-28 text-black z-20">
                            <GiftInfo />
                        </div>
                    </div>
                    <DonatingSection />
                    {/* <div className="absolute bg-white w-full h-[700px]"></div> */}

                    {/* <div className="absolute bottom-96 bg-white w-full h-96"></div> */}
                </div>
            </div>
            <div className='relative bg-rug h-96 mt-80 bg-no-repeat bg-cover bg-center '>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-b from-color/75 to-transparent"></div> */}

                </div>
            <div className='pb-6 items-center px-20'>
                {/* <div className="flex w-full">
                        <div className="w-3/5 z-20 relative">
                        </div>
                        <div className="w-2/5 text-black z-20">
                        <DonatingSection />
                        </div>
                    </div> */}
                    <Contact />
            </div>
        </HomeLayout>
    )
}