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

    const donQ1 = "Can I give by mail or connect directly?"
    const donA11= "To give by mail or connect directly, mail to:"
    const donA12 = "Lighthouse Media NA Inc."
    const donA13 = "P.O. Box 1140 Temple City, CA 91780"
    const donA14 = "Write the campaign name on the memo line of yout check so we know how to direct your gift."
    const donA15 = "Also, please call (303) 503-6898 if you have any questions or would like to give over the phone."

    const donQ2 = "How can I donate non-cash assets?"
    const donA2 = "If you would like to give non-cash assets such as investment securities, please contact us at info@lighthouseaw.org"

    const donQ3 = "Can I get a tax receipt if I live in Canada?"
    const donA31 = "If you're in Canada and would like to give to Lighthouse Arab World, mail to: "
    const donA32 = "Salaam Ministries"
    const donA33 = "P.O. Box 99"
    const donA34 = "Edmonton, Alberta T5J 2HJ"
    const donA35 = "Please include a note that this gift is for Lighthouse Arab World and provide your full address so Salaam Ministries can provide a tax receipt."

    const donQ4 = "Required Minimum Distributions from retirement account?"
    const donA4 = "Please consider giving your distribution directly from your account to Lighthouse Arab World."

    const donQ5 = "Can I make a donation from my Donor Advised Fund?"
    const donA5 = "Donor-advised funds provide you with a simple, flexible, and tax-efficient giving opportunity. You receive an immediate tax deduction when you deposit cash or proceeds from appreciated assets into a single charitable giving account. Then, you recommend grants be made to your local church, Lighthouse Arab World, and your other favorite charities at a time that works best for you. If you would like to give to Lighthouse Arab World, please contact us at info@lighthouseaw.org."


    return (
        <div className="w-5/8 bg-white rounded-md p-8 text-black z-20">
            <h3 className="text-3xl" >Other Ways to Give</h3>
            <div className="sentence">
                <p>
                {donQ1}
                <span className="expand-icon text-2xl text-bold cursor-pointer" onClick={() => toggleExpand(1)}>
                    {expand1 ? " ▾" : " ▸"}
                </span>
                </p>
                {expand1 && (
                <div className="expanded-content">
                    <p>{donA11}</p>
                    <p>{donA12}</p>
                    <p>{donA13}</p>
                    <p>{donA14}</p>
                    {/* <p>{donA15}</p> */}
                </div>
                )}
            </div>
            <hr />
            <div className="sentence">
                <p>
                {donQ2}
                <span className="expand-icon text-2xl cursor-pointer" onClick={() => toggleExpand(2)}>
                    {expand2 ? " ▾" : " ▸"}
                </span>
                </p>
                {expand2 && (
                <div className="expanded-content">
                    {donA2}
                </div>
                )}
            </div>
            <hr />
            <div className="sentence">
                <p>
                {donQ3}
                <span className="expand-icon text-2xl cursor-pointer" onClick={() => toggleExpand(3)}>
                    {expand3 ? " ▾" : " ▸"}
                </span>
                </p>
                {expand3 && (
                <div className="expanded-content">
                    <p>{donA31}</p>
                    <p>{donA32}</p>
                    <p>{donA33}</p>
                    <p>{donA34}</p>
                    <p>{donA35}</p>
                </div>
                )}
            </div>
            <hr />
            <div className="sentence">
                <p>
                {donQ4}
                <span className="expand-icon text-2xl cursor-pointer" onClick={() => toggleExpand(4)}>
                    {expand4 ? " ▾" : " ▸"}
                </span>
                </p>
                {expand4 && (
                <div className="expanded-content">
                    {donA4}
                </div>
                )}
            </div>
            <hr />
            <div className="sentence">
                <p>
                {donQ5}
                <span className="expand-icon text-2xl cursor-pointer" onClick={() => toggleExpand(5)}>
                    {expand5 ? " ▾" : " ▸"}
                </span>
                </p>
                {expand5 && (
                <div className="expanded-content">
                    {donA5}
                </div>
                )}
            </div>
            <hr />
            {/* Repeat the above structure for the remaining sentences */}
        </div>
    );
}