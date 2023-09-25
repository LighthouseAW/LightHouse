import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mjvqaeqb");
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

  if (state.succeeded) {
      return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover ">
          <h2 className="text-6xl text-black font-bold pb-5">We'll be in Touch!!</h2>
        </div>
      );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover ">
      <div className={`p-5 text-black z-[2] text-center ${ isMobile ? "" : "w-[900px]"}`}>
        <form onSubmit={handleSubmit}>
          <div>
            <h2 className="text-6xl text-black font-bold pb-5">Contact Us</h2>
          </div>
          <div>
            <input
              id="name"
              type="name"
              placeholder="Your name"
              name="name"
              className={`text-black inline-flex ${ isMobile ? "" : "w-[500px]"} h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
              />

            <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
              className={`text-black inline-flex ${ isMobile ? "" : "w-[500px]"} h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
              />

            <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          {/* <label htmlFor="message">Message</label> */}
          <div>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className={`text-black inline-flex ${ isMobile ? "" : "w-[500px]"} h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
          />

          <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <div className="flex justify-center space-x-2 text-center">
            <input
              id="subscribe"
              type="checkbox"
              name="subscribe"
              value="true"
              className="px-4"
            />
            <p>Subscribe to our Newsletter</p>
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className={`${ isMobile ? "" : "w-[500px]"} bg-black rounded-full text-white text-base font-medium m-2 py-3 px-10 mb-5 mt-5`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}