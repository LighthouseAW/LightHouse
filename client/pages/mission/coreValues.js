import HomeLayout from '../../components/HomeLayout';
import Image from "next/image"
import Link from "next/link"

export default function Mission() {

    const title = "Our Values"
    const vt1 = "1. We believe that God loves all"
    const v1 = "God loves and desires that people from all nations be reconciled to himself, including the people of the Arab World. "
    const vt2 = "2. We believe that God has a plan for the Arab World"
    const v2 = "The Arab World is an important part of God's plan of redemption; therefore, we have a passion to reach the Arab heart and mind with the gospel of Jesus."
    const vt3 = "3. We believe that art opens hearts"
    const v3 = "Media and art communicate truth on a deep level, opening closed doors to people’s hearts and minds. "
    const vt4 = "4. We believe in encouraging others to stay"
    const v4 = "Persecution and instability have led many Arab Christians to leave their home countries. We want to encourage them to stay, continuing to be salt and light in their world."
    const vt5 = "5. We believe in the value of the Arab voice"
    const v5 = "Seeing familiar faces and hearing familiar voices gives us credibility with our audience and encourages openness to the message. "
    const vt6 = "6. We believe in replication and mobilization"
    const v6 = "Through teaching others to use media and art to share the love of Jesus, we can replicate and multiply our impact while mobilizing others in the harvest. "
    const vt7 = "7. We believe in partnerships"
    const v7 = "Partnering with others, learning from each other, and encouraging each other, maximizes everyone's strengths and multiplies our impact. "
    const vt8 = "8. We believe in excellence"
    const v8 = "Doing all things as unto the Lord and not unto men demands that we do not settle for mediocre work but continually strive for excellence through the power that God provides, and doing so encourages others to do the same. "
    const vt9 = "9. We believe in the Church"
    const v9 = "The Church is the body of Christ, the visible expression of our risen Savior in the world. Therefore, we will always seek to serve and encourage the church in the region, and our staff will be committed to service and fellowship in a local church. "

    return (
        <HomeLayout>
            <div className='flex-grow bg-white bg-cover bg-no-repeat flex flex-col items-center relative'>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-tranparent"></div>
                <div className="flex-grow w-5/6 pt-40 pb-20 text-white z-20 relative">
                    <div className="bg-white/30 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-black text-6xl font-bold mb-14`}>{title}</h2>
                        <div className="relative">
                            <Image alt="picture" src="/images/CoreValues.jpeg" className="relative z-20" width="325" height="325"/>
                            <svg className="z-10 absolute top-0 right-0 mt-4 mr-28  hidden lg:block" width="263" height="250" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                    <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect>
                                            </pattern>
                                        </defs>
                                    <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect>
                                <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect>
                            </svg>
                        </div>
                    </div>
                    <h2 className={`text-black text-4xl font-bold`}>{vt1}</h2>
                    <p className={`text-black py-5 text-xl mb-2`}>{v1}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt2}</h2>
                    <p className={`text-black py-5 text-xl mb-2`}>{v2}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt3}</h2>
                    <p className={`text-black py-5 text-xl mb-2`}>{v3}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt4}</h2>
                    <p className={`text-black py-5 text-xl mb-2`}>{v4}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt5}</h2>
                    <p className={`text-black py-5 text-xl mb-2`}>{v5}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt6}</h2>
                    <p className={`text-black py-5 text-xl mb-2`}>{v6}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt7}</h2>
                    <p className={`text-black py-5 text-xl mb-2`}>{v7}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt8}</h2>
                    <p className={`text-black py-5 text-xl mb-2`}>{v8}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt9}</h2>
                    <p className={`text-black py-5 text-xl mb-2`}>{v9}</p>
                    </div>
                    </div>
                </div>
        <div className="bg-color pb-12">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className=" flex flex-col items-center w-5/6 bg-SOFCall bg-cover bg-no-repeat justify-center m-auto">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                            <p className='text-white mt-8 text-center text-5xl font-bold pb-10 z-20 relative'>
                                We believe art can show the love of Jesus to everyone
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <Link
                                href="/projects"
                                className="text-black underline text-center text-2xl font-bold mb-8 z-20 relative"
                                onClick={() => {
                                    setSelectedLink("Home");
                                    setSelectedSubLink("");}}
                                >See How We Reach People →</Link>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6 z-20 relative'>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </HomeLayout>
    )
}