import HomeLayout from '../../components/HomeLayout';
import MissionNav from '../../components/NavBars/MissionNav'
import Link from 'next/link'
import Image from 'next/image'
import { useActiveLink } from '../../context/ActiveLinkContext'

export default function Mission() {

    const { selectedLink, setSelectedLink } = useActiveLink();
    const { selectedSubLink, setSelectedSubLink } = useActiveLink();

    return (
        <HomeLayout>
            <div className='h-full bg-slate-300 bg-cover bg-no-repeat flex items-center justify-center '>
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-color"></div>
                    <div className="flex items-center space-x-6 justify-center pt-24 w-5/6 relative z-20">
                        <div className="w-1/2  relative z-20">
                            <p className={`z-20 text-black text-6xl font-bold`}>Our Mission</p>
                            <p className={`z-20 text-black py-5 text-3xl`}>Building bridges in a hostile environment and breaking down walls of hate, we use the power of the arts and media to bring the light of Jesus to the Arab World.</p>
                        </div>
                        <div className="w-1/2 relative z-20 flex items-center justify-center pt-20 pb-20">
                            <div>
                            <div className="relative">
                                <Image alt="picture" src="/images/beaLight.jpeg" width="750" height="750" />
                                <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent to-color"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-200/40 "></div>
                            </div>
                            </div>
                        {/* <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-color h-[750px] w-[800px]"></div> */}
                        </div>
                    </div>
                </div>
            <div className="bg-color ">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className="  flex flex-col items-center w-5/6 bg-band bg-cover bg-no-repeat justify-center m-auto">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                            <p className='text-[#f18802] mt-8 text-center text-6xl font-bold pb-10 z-20 relative'>
                                We believe art can show the love of Jesus to everyone
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
                                Learn about our Vision↓
                            </p>
                    </div>
                </div>
            </div>
        </div>
            <div className='flex items-center justify-center  bg-color '>
                <div className="flex items-center justify-center py-32 z-20">
                    <div className="w-5/6 z-20 flex items-center justify-center space-x-6  ">
                    <div className="w-1/2  relative z-20">
                    <div>
                        <Image alt="picture" src="/images/vision.jpeg" width="750" height="750" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                        </div>
                    </div>
                    <div className="w-1/2  relative z-20">
                        <p className={`z-20 text-black text-6xl font-bold`}>Our Vision</p>
                        <p className={`z-20 text-black py-5 text-3xl`}>We envision a future where the gospel of Jesus Christ is advancing among all peoples of the Arab World, where believers are bold and empowered to reach out to their neighbors, where the Church is healthy, growing and united in love, and where believers from Muslim backgrounds are living with dignity and thriving in their own cultures while contributing to its flourishing.</p>
                    </div>
                    {/* <ModalVideo
                            // thumb={VideoThumb}
                            thumbWidth={384}
                            thumbHeight={216}
                            thumbAlt="Modal video thumbnail"
                            video={youtubeVideoId}
                            videoWidth={800}
                            videoHeight={450}
                        /> */}
                        </div>
                </div>
        </div>
        </HomeLayout>
    )
}