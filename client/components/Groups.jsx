
import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

export default function Groups({ groups }) {

    return (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 p-6 z-20">
                    {groups?.length > 0 && groups?.map((group) => (
                        <div key={group.population} className="bg-blue-300 text-black rounded-lg">
                            <div className="p-4">{group.Ctry}</div>
                            <div className="px-4" key={group.population}>Primary religion: {group.ReligionPrimary}</div>
                            <Image src={group.JPScaleImageURL} alt={group.PhotoAddress} width="200" height="200"></Image>
                        </div>
                    ))}
                </div>
    )
}