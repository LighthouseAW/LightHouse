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
  return (
    <HomeLayout>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div> */}
      <Hero heading="Lighthouse Arab World" message="Art Opens Hearts" />
      <div className='relative bg-rug p-40 bg-no-repeat bg-cover bg-center '>
        <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent'></div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-y-0 z-20 w-5/6 justify-center m-auto h-[400px] flex">
        <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent'></div>
          <div className="w-1/4 flex flex-col items-center pt-6 bg-car1 bg-cover bg-center">
            <p className="text-black text-center text-2xl z-20">Gospel through Media</p>
          </div>
          <div className="w-1/4 flex flex-col items-center pt-6 bg-car2 bg-cover bg-center">
            <p className="text-black text-center text-2xl z-20">Train and Replicate</p>
          </div>
          <div className="w-1/4 flex flex-col items-center pt-6 bg-car3 bg-cover bg-center">
            <p className="text-black text-center text-2xl z-20">Meeting the need</p>
          </div>
          <div className="w-1/4 flex flex-col items-center pt-6 bg-car4 bg-cover bg-center">
            <p className="text-black text-center text-2xl z-20">Art opens hearts</p>
          </div>
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
    </HomeLayout>
  )
}
