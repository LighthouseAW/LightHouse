import React, { useState } from "react";

export default function DonatingSection() {
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);
    const [expand4, setExpand4] = useState(false);
    const [expand5, setExpand5] = useState(false);

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

    const donQ5 = "• Equipping Arab Christians with the skills and training to disciple seekers and new believers in the regionan I make a donation from my Donor Advised Fund?"


    return (
        <div className="w-5/8 p-8 text-black z-20">
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