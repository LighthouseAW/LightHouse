import HomeLayout from '../../components/HomeLayout';
import MissionNav from '../../components/NavBars/MissionNav'
import Link from 'next/link'

export default function Mission() {
    return (
        <HomeLayout>
            <div className='h-screen bg-mission bg-cover bg-no-repeat'>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                {/* <div className="pt-20">
                    <MissionNav />
                </div> */}
                <div className="flex flex-col items-center justify-center pt-48 text-center z-20">
                    <div className="w-4/6 z-20">
                <p className={`z-20 text-black text-6xl font-bold`}>Our Mission</p>
                    <p className={`z-20 text-black py-5 text-3xl`}>Building bridges in a hostile environment and breaking down walls of hate, we use the power of the arts and media to bring the light of Jesus to the Arab World.</p>
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
            <div className="bg-color py-20 ">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className=" absolute  bottom-1 left-1/2 transform -translate-x-1/2 translate-y-20  flex flex-col items-center w-5/6 bg-blue-300 justify-center m-auto">
                            <p className='text-black mt-8 text-center text-4xl font-bold mb-10'>
                                We believe art can show the love of Jesus to everyone
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <Link href="/give" className="text-black underline text-center text-2xl font-bold mb-8">Get Involved →</Link>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6'>
                                Learn about our Vision↓
                            </p>
                    </div>
                </div>
            </div>
        </div>
            <div className='grid items-center justify-center bg-color '>
            <div className="flex flex-col items-center justify-center pt-48 text-center z-20">
                    <div className="w-4/6 z-20">
                <p className={`z-20 text-black text-6xl font-bold`}>Our Vision</p>
                    <p className={`z-20 text-black py-5 text-3xl`}>We envision a future where the gospel of Jesus Christ is advancing among all peoples of the Arab World, where believers are bold and empowered to reach out to their neighbors, where the Church is healthy, growing and united in love, and where believers from Muslim backgrounds are living with dignity and thriving in their own cultures while contributing to its flourishing.</p>
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