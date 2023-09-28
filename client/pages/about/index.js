import HomeLayout from '../../components/HomeLayout';
import Link from "next/link";
import Image from 'next/image'
import AboutNav from '../../components/NavBars/AboutNav'
import ModalVideo from "../../components/ModalVideo";
import Timeline from "../../components/Timeline";
import { useActiveLink } from '../../context/ActiveLinkContext';

export default function About() {
    const youtubeVideoId = "a5PtUpO8kss";
    const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
    const { selectedLink, setSelectedLink } = useActiveLink();
    const { selectedSubLink, setSelectedSubLink } = useActiveLink();

    return (
        <HomeLayout>
            <div className='h-full bg-white bg-cover bg-no-repeat flex items-center justify-center '>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-transparent"></div>
                {/* <div className="pt-20">
                    <MissionNav />
                </div> */}
                    <div className="flex items-center justify-center space-x-6 pt-24 w-5/6  relative z-20">
                        <div className="w-1/2  relative z-20">
                            <p className={`z-20 text-black text-6xl font-bold`}>About Us</p>
                            <p className={`z-20 text-black py-5 text-3xl`}>We strive to transform lives through the Gospel of Jesus Christ</p>
                        </div>
                        <div className="w-1/2 relative z-20 flex items-center justify-center pt-20 pb-20">
                            <div>
                                <div className="relative">
                            <Image alt="picture" src="/images/about.jpeg" width="750" height="750" className="" />
                            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color "></div> */}
                            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-200/40 "></div> */}
                            </div>
                        </div>
                        {/* <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-color h-[750px] w-[800px]"></div> */}
                        </div>
                    </div>
                </div>
            <div className="bg-color ">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className=" flex flex-col items-center w-5/6 bg-staffPic bg-cover bg-no-repeat justify-center m-auto">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent gradient-to-r"></div>
                        {/* <div className="absolute inset-0 right-3/4 w-2/12 ml-[119px] bg-gradient-to-b from-black/50 to-transparent"></div> */}
                            <p className='text-white mt-8 text-center text-5xl font-bold pb-10 px-4 z-20 relative'>
                                We believe the light of God’s love penetrates the darkness
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <Link
                                href="/give"
                                className="text-black underline text-center text-2xl font-bold mb-8 z-20 relative"
                                onClick={() => {
                                    setSelectedLink("Home");
                                    setSelectedSubLink("");}}
                                >Get Involved →</Link>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6 z-20 relative'>
                                Learn about what makes us unique ↓
                            </p>
                    </div>
                </div>
            </div>
        </div>
            <div className='flex items-center justify-center bg-color '>
                <div className="flex items-center justify-center py-32 z-20">
                    <div className="w-5/6 space-x-6 z-20 flex items-center justify-center ">
                    <div className="w-1/2  relative z-20">
                    <div>
                        <div className="relative">
                            <Image alt="picture" src="/images/unique.jpeg" width="750" height="750" />
                            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div> */}
                        </div>
                        </div>
                    </div>
                    <div className="w-1/2  relative z-20">
                        <p className={`z-20 text-black text-6xl font-bold`}>What makes us unique</p>
                        <p className={`z-20 text-black py-5 text-3xl`}>We are a ministry in the Arab World, from the Arab World, to the Arab World. We want our audience to see faces and voices that they recognize, that speak to them on a deep level. Our content is primarily in Arabic, written and produced by those with a passion to reach the Arab mind and the Arab heart with the gospel of Jesus.</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="bg-color py-20 ">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-20 flex flex-col items-center w-5/6 bg-aboutBreak2 bg-cover bg-no-repeat justify-center m-auto">
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-white'></div>
                            <p className='text-white mt-8 text-center text-4xl font-bold mb-10 z-20 relative'>
                                We believe art can show the love of Jesus to everyone
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <Link href="/projects"
                            className="text-black underline text-center text-2xl font-bold mb-8 z-20 relative"
                            onClick={() => {
                                setSelectedLink("ourWork");
                                setSelectedSubLink("ourWork");
                            }}
                            >See how we reach people →</Link>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6 z-20 relative'>
                                Learn about our history ↓
                            </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-color">
            </div>
            <div className="bg-color py-2 ">
                <Timeline />
            </div>
        </HomeLayout>
    )
}