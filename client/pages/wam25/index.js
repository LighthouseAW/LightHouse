import UserContext from '../../context/UserContext';
import React, { useState, useEffect, useContext } from 'react';
import HomeLayout from '../../components/Index/HomeLayout';
import Link from "next/link";
import wamHeadText from '../../public/wamstuff/wamHeadText.png';
import wamButton from '../../public/wamstuff/wamButton.png';
import wamCrowd from '../../public/wamstuff/wamCrowd.jpeg';
import wamMidTextBoxLow from "../../public/wamstuff/wamMidTextBoxLow.png"
import wamMidHeadText from '../../public/wamstuff/wamMidHeadText.png';
import yancey from '../../public/wamstuff/yancey.png';
import yassir from '../../public/wamstuff/yassir.jpeg';
import jantz from '../../public/wamstuff/jantz.png';
import AOH from '../../public/wamstuff/AOH.png';
import WAMLoGO from '../../public/wamstuff/WAMLoGO.png';
import LHLOGO from '../../public/wamstuff/LHLOGO.png';
import crown from '../../public/wamstuff/crown.jpeg'
import LocationInfo from '../../public/wamstuff/LocationInfo.png';
import LocationPhoto from '../../public/wamstuff/LocationPhoto.png';
import ComeAndSee from '../../public/wamstuff/ComeAndSee.png';
import speerDream from '../../public/wamstuff/speerDream.png';
import LhGroups from '../../public/wamstuff/LhGroups.png';
import { IoIosCalendar } from "react-icons/io";
import Image from "next/image";

export default function Projects() {
    const [user, setUser] = useContext(UserContext);
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState([]);
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

    useEffect(() => {
        fetch(`/api/projects`)
            .then(res => res.json())
            .then(projects => setProjects(projects))
    }, []);

    const title1 = 'Featured Speakers'
    const Sched = 'Schedule'
    const Deets = "Details upon Registration"

    const sponsors = "Our Sponsors"
    const sponsGreat = 'We are grateful to these organizations for making this event possible.'

    const sponsInt = 'Become a Partner'
    const sponsInt2 = 'Interested in supporting this meaningful event? Contact us to learn more about our partnership opportunities.'
    const sponsButton = "I want to be a partner"


    const invite = "invites you to join us"
    const inviteDate = "on September 5-7 for WAM25"

    const inviteText = "Secure your spot at this transformative event exploring the intersection of faith, art, and cultural impact."


    const LAA = 'Lifetime Acheivement'
    const LAA2 = 'Award'

    const location = 'Location'
    const locationText = 'Join us at the beautiful Vinoy Resort Golf Club in St. Petersburg, Florida for this special gathering.'

    const yanceyName = 'Phillip Yancey'
    const yanceyText = 'Author'

    const jantzName = 'Stan Jantz'
    const jantzText1 = 'Global Ambassador of'
    const jantzText2 = 'Come & See'


    const yassirName = 'Bishop Dr. Yassir Eric'
    const yassirText1 = 'Bishop of the Anglican'
    const yassirText2 = 'Diocese of Ekkios'
    const yassirText3 = 'The MBB Ecclesia'


    const title2 = 'Why Art Matters for the Kingdom'
    const title3 = 'WAM is an annual conference sponsored by Lighthouse Arab World for artists from North Africa and the Middle East from Muslim backgrounds and open to all Christians whatever their backgrounds, with the purpose of affirming, inspiring and encouraging the heart, mind and activity of Christian artists.'
    const title4 = 'As a Christian media company operating in the Arab World, a majorly Muslim environment, we have seen first-hand how art can open doors for the gospel and for the advancement of the Kingdom of God, doors to human hearts that are often closed and resistant to traditional methods of ministry. Sadly, like so many of God’s good gifts, art has been twisted and used as a tool for the kingdom of darkness rather that the kingdom of light. Christian artists are often misunderstood, labeled as worldly, and ostracized from their Christian brothers and sisters. Our task at Lighthouse is to turn this around, helping artists to transform souls and to glorify God using our Art.'

    const textLAA = 'In recognition of outstanding contributions and lasting impact in ministry for serving the Lord Jesus Christ, Lighthouse Arab World and partners will present at WAM 25 the Life Achievement Award, celebrating God’s gift of the arts in building His Kingdom. Recipients are individuals who have dedicated their lives to creating art that glorifies God and effectively communicates the Gospel message to diverse audiences across the world.'

    const Verse1 = '1'
    const Verse2 = 'Corinthians'
    const Verse3 = '9:24'

    const break1 = 'We believe that art and media can communicate truth on a deep level'
    const break2 = "Films like 'Son of her Tears' have been shown in Arab World theaters and film festivals"
    const break3 = 'Learn about our Outreach Projects ↓'

    const break21 = "Your gifts help make the gospel available to the Arab World"
    const break22 = "We are thankful for your partnership"

    const schedule = [
        {
            label: "Day 1",
            date: " - September 5",
            text: [
            "Registration - Half Day",
            "All morning open registration",
            "Welcome",
            "Opening sessions afternoon",
            "Discussion panels",
            "Activities",
            "Evening screening of “Light of the World”",
            "Discussion panel",
            ],
        },
        {
            label: "Day 2",
            date: " - September 6",
            text: [
            "Full Day",
            "Worship",
            "Different sessions",
            "Discussion panels",
            "Activities",
            "Afternoon screening of “The Last Exodus”",
            "Discussion panel",
            ],
        },
        {
            label: "Day 3",
            date: " - September 7",
            text: [
            "From 9 am to 4 pm",
            "Worship",
            "Special speaker",
            "Award presentation",
            "Activities",
            "Evening screening of “The Last Supper”",
            "Discussion panel",
            ],
        },
        ];

    const [activeDay, setActiveDay] = useState(0);

    return (
        <HomeLayout>
         <div className="relative min-h-screen bg-wam25table bg-cover bg-no-repeat flex items-center justify-center">
              {/* Gradient overlays */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#024249] to-transparent"></div>
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#024249]"></div>
                
                  {/* Main content */}
                    <div className={`flex flex-col ${isMobile ? '' : 'p-36'} items-center space-y-6 justify-center w-full z-20`}>
                    <Image src={wamHeadText} width="800" height="800" className="pt-52" />
                    <Link href="https://www.eventbrite.com/e/wam25-why-art-matters-conference-tickets-1404034086749" passHref>
                        <button>
                            <Image src={wamButton} width={350} height={350} alt="WAM Button" />
                        </button>
                    </Link>
                  </div>
                </div>

                <div className='flex items-center justify-center  bg-[#024249] '>
                    <div className="flex items-center justify-center z-20">
                        <div className=" z-20 flex items-center justify-center space-x-24  ">
                        <div className="flex items-center space-x-6 justify-center pt-24 w-5/6 relative z-20">
                        {isMobile ? <></>:<div className="w-1/2 relative z-20 flex items-center justify-center pt-20 pb-20">
                               <div>
                               <div className="relative space-y-24 flex flex-col justify-center items-center mt-6">
                                   <Image alt="picture" src={wamCrowd} width="450" height="400" className="relative z-20 rounded-3xl" />
                                   <Image alt="picture" src={wamMidTextBoxLow} width="600" height="400" className="relative z-20 rounded-3xl" />
                               </div>
                               </div>
                           {/* <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-color h-[750px] w-[800px]"></div> */}
                           </div>}
                           <div className={`${isMobile ? "" : "w-1/2 "}  relative z-20  mb-12`}>
                                   <Image alt="picture" src={wamMidHeadText} width="500" height="500" className="relative z-20" />
                                <p className={`z-20 text-[#dca936] text-4xl font-bold`}>{title2}</p>
                                <div className="w-3/4">
                                <p  className={`z-20 text-white pt-5 text-xl`}>{title3}</p>
                                <p  className={`z-20 text-white pb-5 text-xl`}>{title4}</p>
                                </div>
                                {/* <Image alt="picture" src={wamAOH} width="600" height="400" className="relative z-20 rounded-3xl" /> */}
                            {isMobile ? <><Image alt="picture" src={wamMidTextBoxLow} width="600" height="400" className="relative z-20 rounded-3xl" />
                            </>:<></>}
                        <Image className="mt-12" src={AOH} width={800} height={800} alt="aohpic" />
                        </div>                           
                       </div>
                    </div>
                </div>
            </div>

            {isMobile ? 
                <div className="bg-[#07545c] ">
                    <div className="flex items-center justify-center z-20">
                            <div className=" z-20 flex flex-col items-center justify-center  ">
                                <p className={`italic z-20 text-white text-4xl font-bold mt-24`}>{title1}</p>
                                    <div className="h-[6px] w-64 bg-[#dca936] mt-4"></div>
                                        <div className="overflow-x-hidden">
                        <div className="flex flex-col justify-center items-center pt-24 relative z-20">
                        {[ 
                            { src: yancey, name: yanceyName, text: [yanceyText] },
                            { src: jantz, name: jantzName, text: [jantzText1, jantzText2] },
                            { src: yassir, name: yassirName, text: [yassirText1, yassirText2, yassirText3] },
                        ].map(({ src, name, text }, index) => (
                            <div key={index} className="flex flex-col justify-center items-center flex-shrink-0 pt-20 pb-20">
                            <div className="relative w-[400px] h-[400px]">
                                <Image
                                alt={`picture-${index}`}
                                src={src}
                                fill
                                className="object-cover rounded-3xl z-20"
                                />
                            </div>
                            <p className="z-20 text-white text-3xl font-bold mt-24 mb-6">{name}</p>
                            {text.map((t, i) => (
                                <p key={i} className="z-20 text-white text-l">{t}</p>
                            ))}
                            </div>
                        ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div className="bg-[#07545c] ">
                <div className="flex items-center justify-center z-20">
                        <div className=" z-20 flex flex-col items-center justify-center  ">
                                            <p className={`italic z-20 text-white text-8xl font-bold mt-24`}>{title1}</p>
                                            <div className="h-[6px] w-64 bg-[#dca936] mt-4"></div>
                                            <div className="overflow-x-hidden">
                        <div className="flex flex-row justify-center items-start space-x-12 pt-24 relative z-20">
                        {[ 
                            { src: yancey, name: yanceyName, text: [yanceyText] },
                            { src: jantz, name: jantzName, text: [jantzText1, jantzText2] },
                            { src: yassir, name: yassirName, text: [yassirText1, yassirText2, yassirText3] },
                        ].map(({ src, name, text }, index) => (
                            <div key={index} className="flex flex-col justify-center items-center flex-shrink-0 pt-20 pb-20">
                            <div className="relative w-[400px] h-[400px]">
                                <Image
                                alt={`picture-${index}`}
                                src={src}
                                fill
                                className="object-cover rounded-3xl z-20"
                                />
                            </div>
                            <p className="z-20 text-white text-3xl font-bold mt-24 mb-6">{name}</p>
                            {text.map((t, i) => (
                                <p key={i} className="z-20 text-white text-l">{t}</p>
                            ))}
                            </div>
                        ))}
                        </div></div>

                    </div>
                </div>
            </div>}
                            
            <div className='   bg-[#024249] '>
                   {isMobile ? 
                  <div className=" z-20">
                        <div className=" z-20 flex  justify-center space-x-24  ">
                        <div className={`${isMobile ? "flex items-center space-x-6 py-24 w-5/6 relative z-20" : "flex items-center space-x-6 py-24 w-5/6 relative z-20"}`}>
                        {isMobile ? <></>:<div className="w-1/2 relative z-20 flex items-center justify-center pb-20">
                               <div>
                                <Image alt="picture" src={LHLOGO} width="300" height="300" className="relative z-20" />

                               <div className="relative space-y-12 flex flex-col justify-center items-center">
                                    <div className="absolute w-[450px] h-[450px] bg-[#dca936] rounded-2xl z-10 translate-x-4 translate-y-10" />

                                   <Image alt="picture" src={crown} width="450" height="450" className="relative z-20 rounded-2xl" />
                               </div>
                               </div>
                            </div>}
                            <div className={`${isMobile ? "w-3/4" : "w-1/2 "} flex flex-col justify-start  relative z-20`}>
                            <div className="flex flex-col items-center justify-start">
                                   <Image alt="picture" src={WAMLoGO} width={300} height={300} className="relative z-20" />
                            </div>       
                                   <div>
                               <p className={`${isMobile ? "z-20 italic text-white pt-5 text-5xl font-bold" : "z-20 italic text-white pt-5 text-6xl font-bold"}`}>{LAA}</p>
                               <p  className={`${isMobile ? "z-20 italic text-[#dca936] pb-5 font-bold text-5xl" : "z-20 italic text-[#dca936] pb-5 font-bold text-6xl"}`}>{LAA2}</p>
                               </div>
                               <div className="">
                                <p  className={`${isMobile ? "z-20 text-white py-10 mb-5 text-xl" : "z-20 text-white py-10 mb-5 text-xl"}`}>{textLAA}</p>
                                </div>
                                <p className={`${isMobile ? "z-20 italic text-white text-4xl font-bold" : "z-20 italic text-white text-6xl font-bold"}`}><line className="text-[#dca936] pr-4">{Verse1}</line><line className="text-white pr-4">{Verse2}</line><line className="text-[#dca936]">{Verse3}</line></p>                                              
                            </div> 
                       </div>
                    </div>
                </div> :  <div className=" z-20">
                        <div className=" z-20 flex  justify-center space-x-24  ">
                        <div className="flex items-center space-x-6 py-24 w-5/6 relative z-20">
                        {isMobile ? <></>:<div className="w-1/2 relative z-20 flex items-center justify-center pb-20">
                               <div>
                                <Image alt="picture" src={LHLOGO} width="300" height="300" className="relative z-20" />

                               <div className="relative space-y-12 flex flex-col justify-center items-center">
                                    <div className="absolute w-[450px] h-[450px] bg-[#dca936] rounded-2xl z-10 translate-x-4 translate-y-10" />

                                   <Image alt="picture" src={crown} width="450" height="450" className="relative z-20 rounded-2xl" />
                               </div>
                               </div>
                            </div>}
                            <div className={`${isMobile ? "" : "w-1/2 "} flex flex-col justify-start  relative z-20`}>
                            <div className="flex flex-col items-center justify-start">
                                   <Image alt="picture" src={WAMLoGO} width={300} height={300} className="relative z-20" />
                            </div>       
                                   <div>
                               <p className={`z-20 italic text-white pt-5 text-6xl font-bold`}>{LAA}</p>
                               <p  className={`z-20 italic text-[#dca936] pb-5 font-bold text-6xl`}>{LAA2}</p>
                               </div>
                               <div className="">
                                <p  className={`z-20 text-white py-10 mb-5 text-xl`}>{textLAA}</p>
                                </div>
                                <p className={`z-20 italic text-white text-6xl font-bold`}><line className="text-[#dca936] pr-4">{Verse1}</line><line className="text-white pr-4">{Verse2}</line><line className="text-[#dca936]">{Verse3}</line></p>                                              
                            </div> 
                       </div>
                    </div>
                </div>}
                            
                    <div className="bg-[#07545c] ">
               {isMobile ? <div className="flex items-center justify-center z-20">
                        <div className=" z-20 flex flex-col items-center justify-center  ">
                                <Image alt="picture" src={WAMLoGO} width={300} height={300} className="relative z-20 mt-24" />
                                            <p className={`italic z-20 text-white text-6xl  `}>{Sched}</p>
                                            <div className="h-[6px] w-96 bg-[#dca936] mt-4"></div>
                                            <p className={` z-20 text-white pt-4  `} >{Deets}</p>
                                            <div className="overflow-x-hidden">
                        <div className="flex flex-col justify-center items-start  pt-24 pb-16 mb-16 relative z-20">
                            {schedule.map(({ label, date, text }, index) => (
                                <div
                                key={index}
                                className={`flex flex-col items-center p-6 rounded-xl w-[400px] transition-all duration-300 ${
                                    activeDay === index
                                    ? "bg-[#dca936]/20 border-2 border-[#dca936]"
                                    : "bg-transparent"
                                }`}
                                >
                                <button
                                    onClick={() => setActiveDay(index)}
                                    className={`flex  items-center justify-center gap-1 text-2xl font-semibold px-8 py-2 mb-8 rounded-md transition text-center ${
                                    activeDay === index
                                        ? "text-white bg-gradient-to-br from-[#610817] to-[#d65a6e]"
                                        : "bg-[#095f68] text-white"
                                    }`}
                                >
                                    <line className="font-bold flex items-center gap-2">
                                    <IoIosCalendar size={24} />
                                    {label}
                                    </line>
                                    <line className="font-normal text-lg">{date}</line>
                                </button>

                                <ul className="text-white text-sm space-y-1  ">
                                    {text.map((line, i) => {
                                    const highlight = line.toLowerCase().includes("activities") || i === 0;
                                    return (
                                        <li
                                        key={i}
                                        className={`${highlight ? "text-[#dca936] text-xl font-bold" : ""}`}
                                        >
                                        {line}
                                        </li>
                                    );
                                    })}
                                </ul>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    
                </div>    
                :
                <div className="flex items-center justify-center z-20">
                        <div className=" z-20 flex flex-col items-center justify-center  ">
                                <Image alt="picture" src={WAMLoGO} width={300} height={300} className="relative z-20 mt-24" />
                                            <p className={`italic z-20 text-white text-8xl  `}>{Sched}</p>
                                            <div className="h-[6px] w-96 bg-[#dca936] mt-4"></div>
                                            <p className={` z-20 text-white pt-4  `} >{Deets}</p>
                                            <div className="overflow-x-hidden">
                        <div className="flex flex-row justify-center items-start space-x-12 pt-24 pb-16 mb-16 relative z-20">
                            {schedule.map(({ label, date, text }, index) => (
                                <div
                                key={index}
                                className={`flex flex-col items-center p-6 rounded-xl w-[400px] transition-all duration-300 ${
                                    activeDay === index
                                    ? "bg-[#dca936]/20 border-2 border-[#dca936]"
                                    : "bg-transparent"
                                }`}
                                >
                                <button
                                    onClick={() => setActiveDay(index)}
                                    className={`flex  items-center justify-center gap-1 text-2xl font-semibold px-8 py-2 mb-8 rounded-md transition text-center ${
                                    activeDay === index
                                        ? "text-white bg-gradient-to-br from-[#610817] to-[#d65a6e]"
                                        : "bg-[#095f68] text-white"
                                    }`}
                                >
                                    <line className="font-bold flex items-center gap-2">
                                    <IoIosCalendar size={24} />
                                    {label}
                                    </line>
                                    <line className="font-normal text-lg">{date}</line>
                                </button>

                                <ul className="text-white text-sm space-y-1  ">
                                    {text.map((line, i) => {
                                    const highlight = line.toLowerCase().includes("activities") || i === 0;
                                    return (
                                        <li
                                        key={i}
                                        className={`${highlight ? "text-[#dca936] text-xl font-bold" : ""}`}
                                        >
                                        {line}
                                        </li>
                                    );
                                    })}
                                </ul>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    
                </div>    }


                {isMobile ? <div className="bg-[#024249] flex flex-row items-start justify-center w-full relative">
                    {/* <div className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10">
                        <Image
                        className=" -rotate-90"
                        src={AOH}
                        width={600}
                        height={600}
                        alt="aohpic"
                        />
                    </div> */}

                    <div className="flex flex-col items-center justify-center" >
                    <Image alt="picture" src={LHLOGO} width="350" height="350" className="relative z-20 mt-12" />

                <div className="flex items-center justify-center z-20">
                        <div className=" z-20 flex flex-col items-center justify-center   ">
                                            <p className={`italic z-20 text-white text-4xl font-bold mt-12`}>{invite}</p>
                                            <div className="h-[6px] w-64 bg-[#dca936] mt-4"></div>
                                            <p className={` z-20 text-white text-xl mt-4`}>{inviteDate}</p>
                                    <div className="">
                        <div className="flex flex-col justify-center items-center space-y-12 py-24 relative z-20">
                            <p className={` z-20 text-white text-xl text-center  mt-12 w-2/3`}>{inviteText}</p>
                            <Link href="https://www.eventbrite.com/e/wam25-why-art-matters-conference-tickets-1404034086749" passHref>
                                <button>
                                    <Image src={wamButton} width={350} height={350} alt="WAM Button" />
                                </button>
                            </Link>
                        </div></div>

                    </div>
                </div></div>
        </div> 
                :
                <div className="bg-[#024249] flex flex-row items-start justify-center w-full relative">
                    <div className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10">
                        <Image
                        className=" -rotate-90"
                        src={AOH}
                        width={600}
                        height={600}
                        alt="aohpic"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center" >
                    <Image alt="picture" src={LHLOGO} width="500" height="500" className="relative z-20 mt-12" />

                <div className="flex items-center justify-center z-20">
                        <div className=" z-20 flex flex-col items-center justify-center   ">
                                            <p className={`italic z-20 text-white text-5xl font-bold mt-12`}>{invite}</p>
                                            <div className="h-[6px] w-64 bg-[#dca936] mt-4"></div>
                                            <p className={` z-20 text-white text-xl mt-4`}>{inviteDate}</p>
                                    <div className="">
                        <div className="flex flex-col justify-center items-center space-y-12 py-24 relative z-20">
                            <p className={` z-20 text-white text-xl text-center  mt-12 w-2/3`}>{inviteText}</p>
                            <Link href="https://www.eventbrite.com/e/why-art-matters-tickets-1383824780169" passHref>
                                <button>
                                    <Image src={wamButton} width={350} height={350} alt="WAM Button" />
                                </button>
                            </Link>
                        </div></div>

                    </div>
                </div></div>
        </div>  }

        {isMobile ? <div className="bg-[#07545c] ">
                <div className="flex items-center justify-center z-20">
                        <div className=" z-20 flex flex-col items-center justify-center  ">
                                            <p className={`italic z-20 text-white text-7xl font-bold mt-24  `}>{location}</p>
                                            <div className="h-[6px] w-72 bg-[#dca936] mt-4"></div>
                                            <p className={` z-20 text-white text-xl mt-4 w-3/4 text-center`}>{locationText}</p>

                                            <div className="">
                        <div className=" z-20 flex items-center justify-center space-y-12  ">
                        <div className="flex flex-col items-center space-y-12  justify-center py-24 relative z-20">

                                   <Image alt="picture" src={LocationPhoto} width="400" height="400" className="relative z-20 rounded-3xl" />
                                   <Image alt="picture" src={LocationInfo} width="415" height="400" className="relative z-20 rounded-3xl" />

                    </div>
                    </div>
                    </div>
                    </div>
                </div>
        </div> : <div className="bg-[#07545c] ">
                <div className="flex items-center justify-center z-20">
                        <div className=" z-20 flex flex-col items-center justify-center  ">
                                            <p className={`italic z-20 text-white text-7xl font-bold mt-24  `}>{location}</p>
                                            <div className="h-[6px] w-72 bg-[#dca936] mt-4"></div>
                                            <p className={` z-20 text-white text-xl mt-4 w-3/4 text-center`}>{locationText}</p>

                                            <div className="">
                        <div className=" z-20 flex items-center justify-center space-x-24  ">
                        <div className="flex items-center justify-center py-24 relative z-20">

                                   <Image alt="picture" src={LocationPhoto} width="500" height="400" className="relative z-20 rounded-3xl" />
                                   <Image alt="picture" src={LocationInfo} width="415" height="400" className="relative z-20 rounded-3xl" />

                    </div>
                    </div>
                    </div>
                    </div>
                </div>
        </div>  }


        { isMobile ? <div className="bg-[#024249] flex flex-row items-start justify-center w-full relative">

                    {/* <div className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10">
                        <Image
                        className=" rotate-90"
                        src={AOH}
                        width={600}
                        height={600}
                        alt="aohpic"
                        />
                    </div> */}

                <div className="flex items-center justify-center z-20">
                        <div className=" z-20 flex flex-col items-center justify-center  ">
                                            <p className={`italic z-20 text-white text-6xl font-bold mt-24  `}>{sponsors}</p>
                                            <div className="h-[6px] w-72 bg-[#dca936] mt-4"></div>
                                            <p className={` z-20 text-white text-lg mt-4 text-center`}>{sponsGreat}</p>

                                            <div className="flex flex-col items-center justify-center">
                        <div className=" z-20 flex items-center justify-center space-x-24  ">
                        <div className="flex flex-col items-center space-y-12 justify-center py-24 relative z-20">

                                   <Image alt="picture" src={speerDream} width="300" height="300" className="relative z-20 " />
                                   <Image alt="picture" src={ComeAndSee} width="300" height="300" className="relative z-20 " />

                    </div>
                    
                    </div>
                        <Image alt="picture" src={LHLOGO} width="300" height="300" className="relative z-20 pb-12" />
                        <Image alt="picture" src={LhGroups} width="500" height="500" className="relative z-20 pb-12" />

                            <div className="bg-[#07545c] rounded-3xl w-3/4 flex flex-col items-center justify-center my-12 p-4">
                                <p className={` z-20 text-white text-xl py-4 text-center`}>{sponsInt}</p>
                                <p className={` z-20 text-white text-xl py-6 text-center`}>{sponsInt2}</p>
                                <Link href="/contact" ><button className="bg-[#dca936] rounded-2xl py-4 px-8">{sponsButton}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  :  <div className="bg-[#024249] flex flex-row items-start justify-center w-full relative">

                    <div className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10">
                        <Image
                        className=" rotate-90"
                        src={AOH}
                        width={600}
                        height={600}
                        alt="aohpic"
                        />
                    </div>

                <div className="flex items-center justify-center z-20">
                        <div className=" z-20 flex flex-col items-center justify-center  ">
                                            <p className={`italic z-20 text-white text-7xl font-bold mt-24  `}>{sponsors}</p>
                                            <div className="h-[6px] w-72 bg-[#dca936] mt-4"></div>
                                            <p className={` z-20 text-white text-xl mt-4 text-center`}>{sponsGreat}</p>

                                            <div className="flex flex-col items-center justify-center">
                        <div className=" z-20 flex items-center justify-center space-x-24  ">
                        <div className="flex items-center space-x-36 justify-center py-24 relative z-20">

                                   <Image alt="picture" src={speerDream} width="300" height="300" className="relative z-20 " />
                                   <Image alt="picture" src={ComeAndSee} width="300" height="300" className="relative z-20 " />

                    </div>
                    
                    </div>
                        <Image alt="picture" src={LHLOGO} width="300" height="300" className="relative z-20 pb-12" />
                        <Image alt="picture" src={LhGroups} width="700" height="700" className="relative z-20 pb-12" />

                            <div className="bg-[#07545c] rounded-3xl w-1/2 flex flex-col items-center justify-center my-12 p-4">
                                <p className={` z-20 text-white text-xl py-4 text-center`}>{sponsInt}</p>
                                <p className={` z-20 text-white text-xl py-6 text-center`}>{sponsInt2}</p>
                                <Link href="/contact" ><button className="bg-[#dca936] rounded-2xl py-4 px-8">{sponsButton}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  }

            </div>               
        </div>
    </HomeLayout>
    )
}
