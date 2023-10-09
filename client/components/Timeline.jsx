import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Timeline() {
    const [activeTab, setActiveTab] = useState(1);
    const [selectedTabs, setSelectedTabs] = useState([]);

    const tabContents = [
        'Talk show format program distributed by other Christian satellite TV channels Production of St Augustine Son of Her Tears, full length feature film about the early life of the North African theologian St Augustine',
        'Lighthouse Arab World holds the first Why Art Matters conference, an event focused on inspiring a movement of using art to share the gospel and encourage Christians in a difficult region. Why Art Matters has been held yearly since then, growing to over 300 attendees in 2022.',
        'Launch of Belight Community, a social media channel dedicated to evangelistic and discipleship oriented content, reaching Arabs across the Middle East and North Africa',
        'Lighthouse responds to the humanitarian crisis caused by the Beirut explosion through BeHelp, an arm of Lighthouse dedicated to caring for those in need in the region as the Lord guides them.',
        'Launch of Belight FM, the only evangelical FM radio station in Lebanon, and one of the few legal FM stations in all of the Arab World. Belight FM broadcasts 24x7 on both FM in Lebanon and on Belight.FM and dedicated mobile applications on Android and iOS.',
        'Lighthouse conducts their first full scale training program for media, art and mission called Lighthouse School of Creative Arts. Through the years this school has trained and deployed over 50 media missionaries in the region.',
    ];

    const tabImages = [
        '/images/20132.jpeg',
        '/images/2019.jpeg',
        '/images/20192.jpeg',
        '/images/20201.jpeg',
        '/images/20202.jpeg',
        '/images/2021.jpeg',
    ];

    const tabLabels = [
        '2013 - 2019',
        'June 2019',
        'December 2019',
        'August 2020',
        'November 2020',
        'June 2021',
    ];

    const handleTabClick = (tabIndex) => {
        setSelectedTabs([...Array(tabIndex).keys()].map((i) => i + 1));
        setActiveTab(tabIndex);
    };

    useEffect(() => {
        handleTabClick(1);
    }, [])

    return (
        <div className="flex justify-center items-center mt-40">
        <div className="w-5/6">
            {/* Tabs */}
            <div className="flex items-center justify-center">
            {tabLabels.map((label, index) => (
                <div
                key={index}
                className={`cursor-pointer px-4 py-2 text-lg border-b-2 ${
                    selectedTabs.includes(index + 1) ? 'bg-orange-200 text-black' : ''
                }`}
                onClick={() => handleTabClick(index + 1)}
                >
                {label}
                </div>
            ))}
            </div>

            {/* Content */}
            <div className="mt-6 p-6 border border-gray-300 rounded text-lg flex items-center justify-between">
            <div className="w-1/2">
                <p className="text-xl font-bold">{tabLabels[activeTab-1]}</p>
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