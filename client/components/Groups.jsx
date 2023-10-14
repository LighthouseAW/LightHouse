
import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

export default function Groups({ groups }) {

    function convertToPercentage(decimalValue) {
        const percentage = (decimalValue).toFixed(2);
        return percentage + "%";
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-6 z-20">
            {groups?.length > 0 && groups?.map((group) => (
                <div key={group.population} className=" bg-slate-300 text-black rounded-lg text-center items-center flex flex-col">
                    <div className="p-4">{group.Ctry}</div>
                        <div className="pb-2">
                            <Image className="" src={`/flags/${group.Ctry}.png`} alt={group.PhotoAddress} width="100" height="100"></Image>
                        </div>
                        <div className="px-4" key={group.population}>Religion: {group.ReligionPrimary}</div>
                            {/* <div className="px-4" key={group.population}>Population: {group.Population}</div> */}
                        <div className="px-4 pb-2" key={group.population}>Evangelical: {convertToPercentage(group.PercentEvangelical)}</div>
                </div>
            ))}
        </div>
    )
}