import HomeLayout from '../../components/HomeLayout';
import Image from "next/image";
import Link from "next/link";
import AboutNav from '../../components/NavBars/AboutNav';
import React, { useState, useEffect } from "react";

export default function StatementOfFaith() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const userAgent = window.navigator.userAgent;
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);


    const title = "Statement of Faith"
    const subTitle = "Lighthouse Arab World is in the process of revising its Statement of Faith."
    // const sf1 = "• We believe that the Bible is God’s inspired word and without error. (2 Timothy 3:16,17)"
    // const sf2 = "• We believe that God is triune: Father, Son and Holy Spirit, three persons in one. (1 John 5:7)"
    // const sf3 = "• We believe We were created in God’s image but through our own voluntary disobedience fell. (Rom. 5:12) While We were yet sinners Christ died for us providing forgiveness for those who will believe on Him and confess him as Lord. (Rom 10:9,10) We have no righteousness in ourselves but must come to God through faith in Christ. (Eph. 2:8) If We sincerely repent of our sin and accept Christ’s lordship in our lives We are justified before God.(1 John 1:9)"
    // const sf4 = "• We believe that a change takes place in the heart when We receive Christ and that it is a result of being born of the Spirit of God. (John 3:5-7) It is God’s will that We lead a sanctified and holy life and that We grow in our faith. (Heb 6:1)"
    // const sf5 = "• We believe that as an act of obedience to Christ and as an outward sign of our salvation We are to be baptized by immersion in water. (Matt. 28:19)"
    // const sf6 = "• We believe that We are to share in the community of the Church the Lord’s supper in remembrance of Christ’s death and resurrection and atoning work. (1 Cor 11:28)"
    // const sf7 = "• We believe that the Baptism of the Holy Spirit is there to empower the believer and that His empowering is after the same manner as in Bible days. (Acts 1:8, 2:4) We are to walk in the Spirit continually, the Holy Spirit has gifts to bestow, and We should show fruit in our lives as evidence of a Spirit filled life. (Eph.4:30-32, 1 Cor 12: 1-12, Gal 5:22-23, Rom 12:6-8)"
    // const sf8 = "• We believe that all truth must be balanced with other scriptural truth so that extremes are avoided and that We walk in a Godly manner in our daily life. (Phil 4:5)"
    // const sf9 = "• We believe that the second coming of Christ is literal and inevitable (1 Thes. 4:16-17). We will all stand before God in the final judgment and receive eternal reward or judgment (Rev 20:11-13). Heaven is literal/eternal and Hell is literal/eternal and the place of torment for all who reject Christ. (John 14:12, Rev 20: 10, 15)"
    // const sf10 = "• We believe that We are to identify and actively participate with the local and visible church of Christ. (Heb 10:25)"
    // const sf11 = "• We believe that the church’s Great Commission is to go to all people, in all places, to win and disciple them to Jesus Christ.(James 5:20, Mark 16:15, 2 Cor 5:18-21)."
    const lusCov = "We Affirm the "

    return (
        <HomeLayout>
            <div className='flex-grow bg-white bg-cover bg-no-repeat flex flex-col items-center relative'>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-transparent"></div>
                <div className="flex-grow w-5/6 pt-40 pb-20 text-white z-20 relative">
                    <div className="bg-white/50 rounded-lg p-4">
                    <div className="flex justify-between items-center pb-4">
                        <h2 className={`${isMobile ? "text-center text-5xl" : "text-6xl"} text-black  font-bold mb-16`}>{title}</h2>
                        {isMobile ? <></> : <div className="relative">
                        <Image alt="picture" src="/images/SOF.jpeg" width="400" height="400" className="z-20 relative p-2"/>
                            <svg className="z-10 absolute top-0 right-0 mt-8 mr-44  hidden lg:block" width="263" height="250" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                    <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect>
                                            </pattern>
                                        </defs>
                                    <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect>
                                <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect>
                            </svg>
                        </div>}
                    </div>
                    {/* <h2 className={`text-black text-xl mb-6`}>{sf1}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{sf2}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{sf3}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{sf4}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{sf5}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{sf6}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{sf7}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{sf8}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{sf9}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{sf10}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{sf11}</h2> */}
                    <h2 className={`text-black text-xl mb-6`}>{subTitle}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{lusCov}<Link className="underline" traget="_blank" href="https://lausanne.org/content/covenant/lausanne-covenant">Lausanne Covenant</Link>.</h2>
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
                                href="/give"
                                className="text-black underline text-center text-2xl font-bold mb-8 z-20 relative"
                                onClick={() => {
                                    setSelectedLink("Home");
                                    setSelectedSubLink("");}}
                                >Get Involved →</Link>
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