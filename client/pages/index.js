import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserContext from "../context/UserContext";
import React, {useContext, useState} from "react"
import Hero from '../components/Hero'
import HomeLayout from '../components/HomeLayout';
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useContext(UserContext)
  return (
    <HomeLayout>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div> */}
      <Hero heading="Lighthouse Arab World" message="Art Opens Hearts" />
      <div className='bg-rug p-80 bg-no-repeat'>
        <div className=" absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-60 z-20 flex flex-col items-center w-5/6 bg-blue-300 justify-center m-auto">
            <p className='text-black mt-20 text-center text-4xl font-bold mb-20'>
                We are Changemakers & Storytellers
            </p>
            <p className='text-black text-center text-2xl font-bold mb-10'>
                Passionate about using media to share about Jesus
            </p>
            <Link href="/mission" className="bg-[#F17F29] rounded-full p-6 mb-10">Our Mission</Link>
          </div>
        {/* <Carousel /> */}
      </div>
      <div className='bg-white p-4 flex flex-row pt-60'>
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
                {/* <Carousel /> */}
            </div>
    </HomeLayout>
  )
}
