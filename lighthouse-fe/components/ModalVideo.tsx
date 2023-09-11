'use client'
import React, { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import YouTube from 'react-youtube';
interface ModalVideoProps {
    thumb: StaticImageData
    thumbWidth: number
    thumbHeight: number
    thumbAlt: string
    video: string
    videoWidth: number
    videoHeight: number
    }
    export default function ModalVideo({
    thumb,
    thumbWidth,
    thumbHeight,
    thumbAlt,
    video,
    videoWidth,
    videoHeight,
    }: ModalVideoProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    return (
        <div>
            {/* Video thumbnail */}
            <button
                className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                onClick={() => { setModalOpen(true) }}
                aria-label="Watch the video"
            >
                <div className="flex justify-center items-center p-10 ">
                <svg className="pointer-events-none group-hover:scale-110  transition-transform duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
                <circle className="stroke-black fill-transparent stroke-[4px] " cx="36" cy="36" r="34" fillOpacity=".8" />
                <path className="fill-black drop-shadow-2xl " d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
                </svg></div>
            </button>
            {/* End: Video thumbnail */}
            <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
                <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
                {/* Modal backdrop */}
                <Transition.Child
                    className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-out duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    aria-hidden="true"
                />
                {/* End: Modal backdrop */}
                {/* Modal dialog */}
                <Transition.Child
                    className="fixed inset-0 z-10 flex p-6"
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 scale-75"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-out duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-75"
                >
                    <div className="max-w-5xl mx-auto h-full flex items-center relative">
                    <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                    <button
                    className="absolute top-24 left-2 text-white hover:text-gray-300"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                    <YouTube
                        videoId={video} // Replace with your YouTube video ID
                        opts={{
                            width: videoWidth,
                            height: videoHeight,
                            playerVars: {
                            // Add any YouTube player options you need
                            autoplay: 1, // For example, autoplay
                            },
                        }}
                        />
                    </Dialog.Panel>
                    </div>
                </Transition.Child>
                {/* End: Modal dialog */}
                </Dialog>
            </Transition>
        </div>
    )
}