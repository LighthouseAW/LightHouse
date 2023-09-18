import { useState } from 'react';

export default function Timeline() {
  // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState(1);

    // Content for each tab
    const tabContents = [
        'Talk show format program distributed by other Christian satellite TV channels Production of St Augustine Son of Her Tears, full length feature film about the early life of the North African theologian St Augustine',
        'Lighthouse Arab World holds the first Why Art Matters conference, an event focused on inspiring a movement of using art to share the gospel and encourage Christians in a difficult region. Why Art Matters has been held yearly since then, growing to over 300 attendees in 2022.',
        'Launch of Belight Community, a social media channel dedicated to evangelistic and discipleship oriented content, reaching Arabs across the Middle East and North Africa',
        'Lighthouse responds to the humanitarian crisis caused by the Beirut explosion through BeHelp, an arm of Lighthouse dedicated to caring for those in need in the region as the Lord guides them.',
        'Launch of Belight FM, the only evangelical FM radio station in Lebanon, and one of the few legal FM stations in all of the Arab World. Belight FM broadcasts 24x7 on both FM in Lebanon and on Belight.FM and dedicated mobile applications on Android and iOS.',
        'Lighthouse conducts their first full scale training program for media, art and mission called Lighthouse School of Creative Arts. Through the years this school has trained and deployed over 50 media missionaries in the region.',
    ];

    // Function to handle tab click
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="flex justify-center items-center mt-40">
            <div className="w-5/6">
                {/* Tabs */}
                <div className="flex">
                <div
                    className={`cursor-pointer px-6 py-3 border border-gray-300 rounded-l text-lg ${
                    activeTab === 1 ? 'bg-blue-100 text-black' : ''
                    }`}
                    onClick={() => handleTabClick(1)}
                >
                    2013 - 2019
                </div>
                <div
                    className={`cursor-pointer px-6 py-3 border border-gray-300 text-lg ${
                    activeTab === 2 ? 'bg-blue-100 text-black' : ''
                    }`}
                    onClick={() => handleTabClick(2)}
                >
                    June 2019
                </div>
                <div
                    className={`cursor-pointer px-6 py-3 border border-gray-300 rounded-r text-lg ${
                    activeTab === 3 ? 'bg-blue-100 text-black' : ''
                    }`}
                    onClick={() => handleTabClick(3)}
                >
                    December 2019
                </div>
                <div
                    className={`cursor-pointer px-6 py-3 border border-gray-300 rounded-r text-lg ${
                    activeTab === 4 ? 'bg-blue-100 text-black' : ''
                    }`}
                    onClick={() => handleTabClick(4)}
                >
                    August 2020
                </div>
                <div
                    className={`cursor-pointer px-6 py-4 border border-gray-300 rounded-r text-lg ${
                    activeTab === 5 ? 'bg-blue-100 text-black' : ''
                    }`}
                    onClick={() => handleTabClick(5)}
                >
                    November 2020
                </div>
                <div
                    className={`cursor-pointer px-6 py-4 border border-gray-300 rounded-r text-lg ${
                    activeTab === 6 ? 'bg-blue-100 text-black' : ''
                    }`}
                    onClick={() => handleTabClick(6)}
                >
                    June 2021
                </div>
                </div>

                {/* Content */}
                <div className="mt-6 p-6 border border-gray-300 rounded text-lg">
                {tabContents[activeTab - 1]}
                </div>
            </div>
    </div>
    );
}