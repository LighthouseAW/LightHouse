import Image from 'next/image'
import { Roboto } from 'next/font/google'
import UserContext from "../context/UserContext";
import React, {useContext, useState} from "react"
import Hero from '../components/Hero'
import HomeLayout from '../components/HomeLayout';
import Link from 'next/link'
import Carousel from '../components/Carousel'
import Contact from "../components/Contact"

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useContext(UserContext)

  const breakTitle11 = "Gospel through Media"
  const breakTitle12 = "We use social media, internet technology, and films to communicate the gospel to Arabic speakers throughout the world."

  const breakTitle21 = "Train and Replicate"
  const breakTitle22 = "We believe in training and mentoring Arab Christians to use art, such as media, to communicate the gospel to their communities, cities and nations."

  const breakTitle31 = "Meeting the need"
  const breakTitle32 = "The Middle East and North Africa frequently experience natural and man made disasters. Our ministry invests people, time and money where God calls us to care for those in need."

  const breakTitle41 = "Art opens hearts"
  const breakTitle42 = "We believe that art opens doors to evangelism and discipleship that are typically closed to traditional methods, especially in the Arab World."

  const breakText = "We believe the light of God’s love penetrates the darkness"

  return (
    <HomeLayout>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div> */}
        <Hero heading="Lighthouse Arab World" message="Reaching the heart of the Arab World with the Gospel of Jesus" />
        <div className='relative bg-rug p-40 mt-48 bg-no-repeat bg-cover bg-center '>
          <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent'></div>
          {/* <div className='absolute inset-0 bg-gradient-to-r from-white/30 to-transparent'></div>
          <div className='absolute inset-0 bg-gradient-to-l from-white/30 to-transparent'></div> */}
        </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-64 z-10 w-5/6 justify-center m-auto h-[400px] flex">
          <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent'></div>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/50'></div>
            <div className="w-1/4 flex flex-col items-center justify-between pt-6 bg-car1 bg-cover bg-center">
              <p className="text-black text-center text-2xl z-20">{breakTitle11}</p>
              <p className="text-white text-center  z-20 px-4 pb-6">{breakTitle12}</p>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-between pt-6 bg-car2 bg-cover bg-center">
              <p className="text-black text-center text-2xl z-20">{breakTitle21}</p>
              <p className="text-white text-center  z-20 px-4 pb-6">{breakTitle22}</p>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-between pt-6 bg-car3 bg-cover bg-center">
              <p className="text-black text-center text-2xl z-20">{breakTitle31}</p>
              <p className="text-white text-center  z-20 px-4 pb-6">{breakTitle32}</p>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-between pt-6 bg-car4 bg-cover bg-center">
              <p className="text-black text-center text-2xl z-20">{breakTitle41}</p>
              <p className="text-white text-center  z-20 px-4 pb-6">{breakTitle42}</p>
          </div>
        </div>
        <Carousel />
        <div>
        <Contact />
      </div>

      {/* <div className='bg-white p-4 flex flex-row pt-60'>
                <div className='flex flex-col items-center m-auto w-2/6 bg-blue-300/50'>
                    <p className='text-[#F17F29] mt-20 text-center text-4xl font-bold mb-20'>
                        Igniting the Church of the Middle East
                    </p>
                    <p className='text-[#F17F29] text-center text-2xl font-bold mb-10'>
                        with faith, hope, and the gospel of Jesus Christ
                    </p>
                    <Link href="/projects" className="bg-[#F17F29] rounded-full p-6 mb-10">How We Reach People</Link>
                </div>
                    <div className='flex flex-col items-center m-auto w-2/6'>
                </div>
            </div> */}
            <div className="bg-color pb-12">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className=" flex flex-col items-center w-5/6 bg-SOFCall bg-cover bg-no-repeat justify-center m-auto">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                            <p className='text-white mt-8 text-center text-5xl font-bold pb-10 px-2 z-20 relative'>
                                {breakText}
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
