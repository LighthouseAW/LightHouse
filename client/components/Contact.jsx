import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import HomeLayout from '../components/HomeLayout';

export default function Contact() {
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

  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const ty = "Thank You!"
  const it = "We'll be in touch soon."
  const message = ""

  const sendEmail = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(!submitted);
    }, 100);
    emailjs.sendForm("service_9h4gp0r", "template_8upl6ke", form.current, "GC82y4dW9do18m9NY")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  if (submitted) {
    return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-white">
            {/* <div className="absolute rounded-lg top-40 left-80 right-80 bottom-40 bg-white/30 z-[2]"/> */}
              <div className={`p-5 text-white z-[2] text-center ${ isMobile ? "" : "w-[900px]"}`}>
                <div>
                  <h2 className="text-6xl font-bold">{ty}</h2>
                </div>
              <div>
                <p className="py-5 text-xl">{it}</p>
              </div>
            <button onClick={()=>setSubmitted(!submitted)}>←</button>
          </div>
        </div>
    );
  }  else {

  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-white">
        {/* <div className="absolute rounded-lg top-40 left-80 right-80 bottom-40 z-[2]"/> */}
          <div className={`p-5 text-black z-[2] text-center ${ isMobile ? "" : "w-[900px]"}`}>
            <form
                ref={form} onSubmit={sendEmail}
                className="pb-2"
            >
          <div>
            <h2 className="text-6xl text-black font-bold pb-5">Contact</h2>
          </div>
          <div>
            <p className="py-5 text-xl">{message}</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Your name"
              name="user_name"
              required
              className={`text-black inline-flex ${ isMobile ? "" : "w-[500px]"} h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
              />
          </div>
            <div >
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
                className={`text-black inline-flex ${ isMobile ? "" : "w-[500px]"} h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
                />
            </div>
          <div>
            <textarea
            placeholder="Your message"
            name="message"
            required
            className={`text-black inline-flex ${ isMobile ? "" : "w-[500px]"} h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
            />
          </div>
        <div>
          <button className={`${ isMobile ? "" : "w-[500px]"} bg-black rounded-full text-white text-base font-medium m-2 py-3 px-10 mb-5 mt-5`} ><em className="underline not-italic">Send</em></button>
        </div>
          <p> By submitting your message and personal details you are permitting me to contact you by these means in response to your inquiry. </p>
        </form>
      </div>
    </div>
  )}
}
