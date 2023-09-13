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

    return (
        <div className="w-1/2 p-8 text-black z-20">
            <div className="sentence">
                <p>
                Sentence 1
                <span className="expand-icon text-xl cursor-pointer" onClick={() => toggleExpand(1)}>
                    {expand1 ? " ▾" : " ▸"}
                </span>
                </p>
                {expand1 && (
                <div className="expanded-content">
                    More text for Sentence 1 goes here.
                </div>
                )}
            </div>
            <hr />
            <div className="sentence">
                <p>
                Sentence 2
                <span className="expand-icon text-xl cursor-pointer" onClick={() => toggleExpand(2)}>
                    {expand2 ? " ▾" : " ▸"}
                </span>
                </p>
                {expand2 && (
                <div className="expanded-content">
                    More text for Sentence 2 goes here.
                </div>
                )}
            </div>
            <hr />
            {/* Repeat the above structure for the remaining sentences */}
        </div>
    );
}