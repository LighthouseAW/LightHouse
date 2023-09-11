import { useState } from 'react';

export default function Timeline() {
  // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState(1);

    // Content for each tab
    const tabContents = [
        'This is content for Tab 1',
        'This is content for Tab 2',
        'This is content for Tab 3',
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
                    activeTab === 1 ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handleTabClick(1)}
                >
                    Tab 1
                </div>
                <div
                    className={`cursor-pointer px-6 py-3 border border-gray-300 text-lg ${
                    activeTab === 2 ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handleTabClick(2)}
                >
                    Tab 2
                </div>
                <div
                    className={`cursor-pointer px-6 py-3 border border-gray-300 rounded-r text-lg ${
                    activeTab === 3 ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handleTabClick(3)}
                >
                    Tab 3
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