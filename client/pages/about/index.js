import HomeLayout from '../../components/HomeLayout';
import Link from "next/link";
import AboutNav from '../../components/NavBars/AboutNav'
import ModalVideo from "../../components/ModalVideo";
import Timeline from "../../components/Timeline";

export default function About() {
    const youtubeVideoId = "a5PtUpO8kss";
    const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

    return (
        <HomeLayout>
            <div className='h-screen bg-about bg-cover bg-no-repeat'>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                {/* <div className="pt-20">
                    <AboutNav />
                </div> */}
                <div className="flex flex-col items-center pt-48 text-black relative z-20">
                    <p className={` text-6xl font-bold pb-16`}>About Us</p>
                    {/* <p className={` py-5 text-3xl`}>We strive to transform lives through the Gospel of Jesus Christ </p> */}
                    <div className="bg-cover bg-no-repeat relative bg-staffPic h-[300px] w-5/6 text-3xl rounded-lg" > <p className=" pt-60 text-center z-20 relative" >We strive to transform lives through the Gospel of Jesus Christ</p> <div className='absolute inset-0 bg-gradient-to-b from-transparent to-white'></div> </div>
                    
                </div>
            </div>
            <div className="bg-color py-20 ">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className=" absolute  bottom-1 left-1/2 transform -translate-x-1/2 translate-y-20  flex flex-col items-center w-5/6 bg-blue-300/50 justify-center m-auto">
                            <p className='text-black mt-8 text-center text-4xl font-bold mb-10'>
                                We believe art can show the love of Jesus to everyone
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <Link href="/projects" className="text-black underline text-center text-2xl font-bold mb-8">See how we reach people →</Link>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6'>
                                Learn about what makes us unique ↓
                            </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-color">
                <div className='bg-color bg-cover bg-no-repeat mb-40'>
                <div className="flex flex-col items-center justify-center text-black pt-40 z-20">
                    <div className='w-5/6'>
                        <p className={`z-20 text-6xl text-black font-bold`}>What makes us unique</p>
                        <p className={`z-20 py-5 text-3xl`}>We are a ministry in the Arab World, from the Arab World, to the Arab World. We want our audience to see faces and voices that they recognize, that speak to them on a deep level. Our content is primarily in Arabic, written and produced by those with a passion to reach the Arab mind and the Arab heart with the gospel of Jesus.</p>
                    </div>
                </div>
                </div>
                <div className="bg-color py-20 ">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className=" absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center w-5/6 bg-blue-300/50 justify-center m-auto">
                            <p className='text-black mt-8 text-center text-4xl font-bold mb-12'>
                                We believe art can show the love of Jesus to everyone
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                                <p className='text-black text-center text-2xl font-bold mb-4'>
                                    See how we reach people
                                </p>
                            <Link href="/projects" className="bg-[#F17F29] rounded-full p-4 mb-4">Outreach →</Link>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6'>
                                Learn about our history ↓
                            </p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className="bg-color py-2 ">
                <Timeline />
            </div>
        </HomeLayout>
    )
}