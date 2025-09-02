import React, { useContext, useState, useEffect } from "react";
import Hero from '../components/Index/Hero'
import HomeLayout from '../components/Index/HomeLayout';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from '../components/Index/Carousel';
import Contact from "../components/Contact";
import TextModal from "../components/Index/TextModal";
import IndexContainer from "../components/Index/IndexContainer";
import WAMLoGO from '../public/wamstuff/WAMLoGO.png';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [openModals, setOpenModals] = useState(Array(4).fill(false));

  const openModal = (index) => {
    // Create a copy of the openModals array and set the specified modal to true
    const updatedModals = [...openModals];
    updatedModals[index] = true;
    setOpenModals(updatedModals);
  };

  const closeModal = (index) => {
    // Create a copy of the openModals array and set the specified modal to false
    const updatedModals = [...openModals];
    updatedModals[index] = false;
    setOpenModals(updatedModals);
  };

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

  const breakContent = [
    {
      title: "Gospel Through Media",
      text: "We use social media, radio, internet technology, and films to communicate the gospel to Arabic speakers throughout the world.",
      background: "bg-car6",
      textColor: "text-white",
    },
    {
      title: "Train and Replicate",
      text: "We believe in spiritual discipleship and training to build and empower Arab Christians and the Arab Church.",
      background: "bg-car1",
      textColor: "text-white",
    },
    // {
    //   title: "Meeting the need",
    //   text: "The Middle East and North Africa frequently experience natural and man-made disasters. Our ministry invests people, time, and money where God calls us to care for those in need.",
    //   background: "bg-car3",
    // },
    {
      title: "Art Opens Hearts",
      text: "We believe that art opens doors to evangelism and discipleship that are typically closed to traditional methods, especially in the Arab World.",
      background: "bg-car4",
      textColor: "text-white",
    },
  ];

  return (
    <HomeLayout>
    {/*<div className="absolute top-24 right-4 z-30">
        <Link href="/wam25">
          <button className="bg-[#07545c] p-2 rounded-lg">
            <Image src={WAMLoGO} alt="Why Art Matters Logo" width={200} height={200} />
          </button>
        </Link>
      </div>*/}
      <Hero heading="Lighthouse Arab World" message="Reaching the heart of the Arab World with the Gospel of Jesus" />
      <div className='relative bg-rug p-40 mt-48 bg-no-repeat bg-cover bg-center '>
        <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent'></div>
      </div>
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${isMobile ? "translate-y-64  h-[300px]" : "translate-y-64 h-[400px]"}  z-10 w-5/6 justify-center m-auto flex ${isMobile ? "space-x-2" : 'space-x-12'}`}>
        {/* <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent'></div> */}
        {/* <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/50'></div> */}
        {breakContent.map((item, index) => (
          <div className={`w-1/3 rounded-lg flex flex-col items-center break-content-item justify-between pt-6 ${item.background} bg-cover bg-center`} key={index}>
            <p className={`${item.textColor} text-center ${isMobile ? "" : "text-2xl"}  z-20`}>{item.title}</p>
            {isMobile ? (
              <div className="p-4">
                <button
                  className="text-white font-bold py-2 px-4 rounded relative z-30"
                  onClick={() => openModal(index)}
                >
                  Read More →
                </button>
                <TextModal
                  content={item.text}
                  isOpen={openModals[index]}
                  onClose={() => closeModal(index)}
                  className="p-4"
                />
              </div>
            ) : (
              <div className="p-4">
              <div className="p-2 bg-slate-500/50 rounded-lg">
              <p className="text-white text-center hover-text z-20 px-2">{item.text}</p>
              </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <IndexContainer />
      </div>
      <Carousel />
      <div>
        <Contact />
      </div>
    </HomeLayout>
  )
}
