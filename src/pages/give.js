import HomeLayout from '../components/HomeLayout';
import GiveForm from "../components/GiveForm";
import Link from "next/link"

export default function Give() {
    return (
        <HomeLayout>
            <div className='h-screen bg-about bg-cover bg-no-repeat'>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                <div className="flex items-center justify-center pt-32 text-white relative z-20">
                        <div className="flex w-full">
                            <div className="w-1/2 p-8 z-20 relative">
                                <GiveForm />
                            </div>
                            <div className="w-1/2 p-8 pt-64 text-black z-20" >
                                <p>Words about donating</p>
                            </div>
                        </div>
                        <div className="absolute bg-white w-full h-60"></div>
                        <div className="absolute bottom-0 bg-white w-full h-96"></div>
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