import HomeLayout from '../components/HomeLayout';
import GiveForm from "../components/GiveForm";
import Link from "next/link";
import DonatingSection from "../components/DonatingSection";
import Donation from "../components/Donation";
import { useEffect } from "react";

export default function Give() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://lighthousearabworld.kindful.com/embeds/c685c50a-25c6-48be-bf8e-1a34b337a64c/init.js?type=form";
        script.dataset.embedId = "c685c50a-25c6-48be-bf8e-1a34b337a64c";
        script.dataset.lookupType = "jquery-selector";
        script.dataset.lookupValue = "#kindful-donate-form-c685c50a-25c6-48be-bf8e-1a34b337a64c";
        document.head.appendChild(script);

        return () => {
          // Clean up the script when the component unmounts
            document.head.removeChild(script);
        };
    }, []);

    return (
        <HomeLayout>
            <div className='h-screen bg-about bg-cover bg-no-repeat'>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                <div className="flex items-center justify-center pt-32 text-white relative z-20">
                        <div className="flex w-full">
                            <div className="w-1/2 p-8 z-20 relative">
                            <div className='kindful-embed-wrapper' id='kindful-donate-form-c685c50a-25c6-48be-bf8e-1a34b337a64c'></div>
                                <script src='https://lighthousearabworld.kindful.com/embeds/c685c50a-25c6-48be-bf8e-1a34b337a64c/init.js?type=form' data-embed-id='c685c50a-25c6-48be-bf8e-1a34b337a64c' data-lookup-type='jquery-selector' data-lookup-value='#kindful-donate-form-c685c50a-25c6-48be-bf8e-1a34b337a64c'></script>
                            </div>
                            <div className="w-1/2 p-8 pt-64 text-black z-20" >
                                <DonatingSection />
                            </div>
                        </div>
                        <div className="absolute bg-white w-full h-[700px]"></div>
                        {/* <div className="absolute bottom-0 bg-white w-full h-96"></div> */}
                        </div>
                    </div>
                    <div className="bg-color py-20 ">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                    <div className="absolute bg-white h-80" ></div>
                </div>
            </div>
            </div>
                <div className='grid pb-20 items-center justify-center'>
            </div>
        </HomeLayout>
    )
}