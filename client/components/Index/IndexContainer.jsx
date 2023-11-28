import Link from 'next/link'

export default function IndexContainer() {

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#d4d4d4] to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/80 w-1/2 "></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/80 w-1/2 transform translate-x-full"></div>
            <div className="pb-12 px-12">
            <div className="relative flex flex-wrap items-center justify-center mb-4 bg-slate-100 rounded-lg z-20">
                {/* First row with 2 by 2 layout */}
                <div className="w-1/2 p-8">
                    <Link href="/about"  className="text-center flex flex-col items-center">
                        <img width="400" height="400" src="/images/about.jpeg" alt="Image 1" className=" cursor-pointer rounded-lg" />
                        About us →
                    </Link>
                </div>
                <div className="w-1/2 p-8">
                <Link href="/mission"  className="text-center flex flex-col items-center">
                    <img  width="400" height="400" src="/images/beaLight.jpeg" alt="Image 2" className="cursor-pointer rounded-lg" />
                    Our Mission  →
                </Link>
                </div>
                {/* ... (repeat similar structure for other images) */}
                <div className="w-1/2 p-8">
                    <Link href="/impact"  className="text-center flex flex-col items-center">
                    <img width="400" height="400" src="/images/howReach2.jpeg" alt="Image 1" className=" cursor-pointer rounded-lg" />
                        Our Impact →
                    </Link>
                </div>
                <div className="w-1/2 p-8">
                <Link href="/projects" className="text-center flex flex-col items-center">
                    <img  width="400" height="400" src="/images/Men Cooking.png" alt="Image 2" className="cursor-pointer rounded-lg" />
                    Learn about how we reach people →
                </Link>
                </div>
                <div className="flex items-center justify-center mb-4">
                <div className="w-1/3 p-8">
                    <Link href="/projects/1"  className="text-center flex flex-col items-center">
                        <img width="300" height="300" src="/images/indexContainer/Belight.png" alt="Image 1" className=" cursor-pointer rounded-lg" />
                            BeLight community →
                    </Link>
                </div>
                <div className="w-1/3 p-8">
                    <Link href="/projects/2" className="text-center flex flex-col items-center">
                        <img  width="300" height="300" src="/images/indexContainer/BeLightFM.jpg" alt="Image 2" className="cursor-pointer rounded-lg" />
                        BeLight FM →
                    </Link>
                </div>
                <div className="w-1/3 p-8">
                    <Link href="/projects/3" className="text-center flex flex-col items-center">
                        <img  width="300" height="300" src="/images/indexContainer/LighthouseCreativeSchoolOfArts.jpeg" alt="Image 2" className="cursor-pointer rounded-lg" />
                            Lighthouse School of Arts →
                    </Link>
                </div>
                {/* ... (repeat similar structure for smaller images) */}
            </div>

            {/* Third row with a big image and text */}
            <div className="flex mb-4 px-36">
                {/* Big Image */}
                <div className="w-2/3 p-2">
                <Link href="#">
                    <img src="/images/2019.jpeg" width="450" height="450" alt="Big Image" className="cursor-pointer" />
                </Link>
                </div>
                {/* Text */}
                <div className="w-1/3 p-2">
                <div className="p-4">
                    <p>{text}</p>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}