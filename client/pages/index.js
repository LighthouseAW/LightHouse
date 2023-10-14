import React, { useContext, useState, useEffect } from "react";
import Hero from '../components/Hero'
import HomeLayout from '../components/HomeLayout';
import Link from 'next/link'
import Carousel from '../components/Carousel'
import Contact from "../components/Contact"
import TextModal from "../components/TextModal"

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
      title: "Gospel through Media",
      text: "We use social media, internet technology, and films to communicate the gospel to Arabic speakers throughout the world.",
      background: "bg-car1",
    },
    {
      title: "Train and Replicate",
      text: "We believe in training and mentoring Arab Christians to use art, such as media, to communicate the gospel to their communities, cities and nations.",
      background: "bg-car2",
    },
    {
      title: "Meeting the need",
      text: "The Middle East and North Africa frequently experience natural and man-made disasters. Our ministry invests people, time, and money where God calls us to care for those in need.",
      background: "bg-car3",
    },
    {
      title: "Art opens hearts",
      text: "We believe that art opens doors to evangelism and discipleship that are typically closed to traditional methods, especially in the Arab World.",
      background: "bg-car4",
    },
  ];

  return (
    <HomeLayout>
      <Hero heading="Lighthouse Arab World" message="Reaching the heart of the Arab World with the Gospel of Jesus" />
      <div className={`relative bg-rug p-40 ${isMobile ? "" : " mt-48"} bg-no-repeat bg-cover bg-center `}>
        <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent'></div>
      </div>
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${isMobile ? "translate-y-64  h-[300px]" : "translate-y-64 h-[400px]"}  z-10 w-5/6 justify-center m-auto flex`}>
        <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/50'></div>
        {breakContent.map((item, index) => (
          <div className={`w-1/4 flex flex-col items-center justify-between pt-6 ${item.background} bg-cover bg-center`} key={index}>
            <p className={`text-black text-center ${isMobile ? "" : "text-2xl"}  z-20`}>{item.title}</p>
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
              <p className="text-white text-center  z-20 px-4 pb-6">{item.text}</p>
            )}
          </div>
        ))}
      </div>
      <Carousel />
      <div>
        <Contact />
      </div>
    </HomeLayout>
  )
}