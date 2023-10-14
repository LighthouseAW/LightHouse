import React, { useState, useEffect } from "react";

export default function DonatingSection() {
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);
    const [expand4, setExpand4] = useState(false);
    const [expand5, setExpand5] = useState(false);
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

    const toggleExpand = (index) => {
        switch (index) {
        case 1:
            setExpand1(!expand1);
            break;
        case 2:
            setExpand2(!expand2);
            break;
        case 3:
            setExpand3(!expand3);
            break;
        case 4:
            setExpand4(!expand4);
            break;
        case 5:
            setExpand5(!expand5);
            break;
        default:
            break;
        }
    };

    const donQ1 = "• Reaching people with the Gospel in the Middle East and North Africa where they rarely know anyone else Christian and are desperately in need of the hope and love of Jesus"

    const donQ2 = "• Training of Christian Arabs in media and in mission"

    const donQ3 = "• Show God’s love to those in need in the midst of crisis, whether economic, social or disaster"

    const donQ4 = "• Equipping the small Christian church in the region to persevere in the midst of difficulty and oppression"

    const donQ5 = "• Equipping Arab Christians with the skills and training to disciple seekers and new believers in the region"


    return (
        <div className={`${isMobile ? "px-2" : " w-5/8 mr-12 "} bg-white/50 rounded-lg p-8 text-black z-20`}>
            <h3 className="text-3xl pb-4" >Your Gift makes the following possible:</h3>
            <div className="sentence py-4">
                <p>
                {donQ1}
                </p>
            </div>
            <hr />
            <div className="sentence py-4">
                <p>
                {donQ2}
                </p>
            </div>
            <hr />
            <div className="sentence py-4">
                <p>
                {donQ3}
                </p>
            </div>
            <hr />
            <div className="sentence py-4">
                <p>
                {donQ4}
                </p>
            </div>
            <hr />
            <div className="sentence py-4">
                <p>
                {donQ5}
                </p>
            </div>
            <hr />
            {/* Repeat the above structure for the remaining sentences */}
        </div>
    );
}