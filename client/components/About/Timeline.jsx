import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Timeline() {
    const [activeTab, setActiveTab] = useState(1);
    const [selectedTabs, setSelectedTabs] = useState([]);
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

    const tabContents = [
        'Lighthouse Arab World began in 2001 focused on North Africa, providing media and evangelism training, radio programs and streaming internet audio.',
        'In 2013, Lighthouse Arab World reformed and restarted in Beirut and Cairo, initially focusing on a talk show format program distributed by other Christian satellite TV channels, quickly growing to millions of viewers per year. In addition, Lighthouse produced St Augustine Son of Her Tears, a full-length feature film about the early life of the North African theologian St Augustine.',
        'Lighthouse Arab World held the first Why Art Matters conference, an event focused on inspiring a movement of using art to share the gospel and encourage Christians in a difficult region. Why Art Matters has been held yearly since then, growing to over 300 attendees in 2022.',
        'Launch of Belight Community, a social media channel dedicated to evangelistic and discipleship oriented content, reaching Arabs across the Middle East and North Africa.',
        'Lighthouse responds to the humanitarian crisis caused by the Beirut explosion through BeHelp, an arm of Lighthouse dedicated to caring for those in need in the region as the Lord guides them.',
        'Launch of Belight FM, the only evangelical FM radio station in Lebanon, and one of the few legal FM stations in all of the Arab World. Belight FM broadcasts 24x7 on both FM in Lebanon and on Belight.FM along with dedicated mobile applications on Android and iOS.',
        'Lighthouse conducts their first full-scale training program for media, art and mission called Lighthouse School of Creative Arts. Through the years this school has trained and deployed over 50 media missionaries in the region.',
        'Lighthouse leads 3rd annual Lighthouse School of Creative Arts in partnership with Operation Mobilization MENA focusing on media, storytelling, and mission. ',
        'Lighthouse response to Morocco Earthquake primarily in the mountainous area villages with food, shelter and spiritual encouragement.',
    ];

    const tabImages = [
        '/images/LH airplane.jpeg',
        '/images/20132.jpeg',
        '/images/2019.jpeg',
        '/images/20192.jpeg',
        '/images/20201.jpeg',
        '/images/20202.jpeg',
        '/images/2021.jpeg',
        '/images/LSCA 2023.jpeg',
        '/images/Moroccan woman.jpeg',
    ];

    const tabLabels = [
        '2001 - 2012',
        '2013 - 2019',
        'Jun 2019',
        'Dec 2019',
        'Aug 2020',
        'Nov 2020',
        'Jun 2021',
        'Jul 2023',
        'Sep 2023'
    ];

    const tabMonths = [
        '2001 - 2012',
        '2013 - 2019',
        'June 2019',
        'December 2019',
        'August 2020',
        'November 2020',
        'June 2021',
        'July 2023',
        'September 2023'
    ];

    const handleTabClick = (tabIndex) => {
        setSelectedTabs([...Array(tabIndex).keys()].map((i) => i + 1));
        setActiveTab(tabIndex);
    };

    useEffect(() => {
        handleTabClick(1);
    }, [])

    return (
        <div className={`flex justify-center items-center mt-40`}>
        <div className={` ${isMobile ? "" : "w-5/6"}`}>
            {/* Tabs */}
            <div className={`${isMobile ? "grid grid-cols-3" : "flex"} items-center justify-center`}>
            {tabLabels.map((label, index) => (
                <div
                key={index}
                className={`cursor-pointer ${isMobile ? "text-md" : "text-lg py-2"} px-4 border-b-2 ${
                    selectedTabs.includes(index + 1) ? 'bg-orange-200 text-black' : ''
                }`}
                onClick={() => handleTabClick(index + 1)}
                >
                {label}
                </div>
            ))}
            </div>

            {/* Content */}
            <div className={`mt-6 p-6 border border-gray-300 rounded text-lg ${isMobile ? "flex-col" : ""} flex items-center justify-between`}>
            <div className={`${isMobile ? "" : "w-1/2"} `}>
                <p className="text-xl font-bold">{tabMonths[activeTab-1]}</p>
                <p>{tabContents[activeTab - 1]}</p>
            </div>
            <Image
                src={tabImages[activeTab - 1]}
                alt={`Image for Year ${activeTab + 2012}`}
                width={250}
                height={250}
                className="rounded-md"
            />
            </div>
        </div>
        </div>
    );
}