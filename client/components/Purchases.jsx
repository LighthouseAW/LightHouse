import React, { useEffect, useState } from "react"
import DownloadButton from "./DownloadButton"

export default function Purchases({user, setUser}) {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        fetch("/api/me").then((r) => {
            if (r.ok) {r.json().then((data) => {
            setUser(data)});
            }});
        }, [setUser]);

        useEffect(() => {
            setPurchases(user.purchased);
        }, [user]);

        return (
            <>
            <div>
                <h1 className="font-bold text-4xl pb-2">
                    Purchases
                </h1>
                <div>{purchases.length > 0 ? (purchases.map((purchase)=> {
                        return (
                            <div key={purchase.id}>
                                <li>{purchase.instrumental}</li>
                                    <ul>{purchase.contract_info}</ul>
                                <DownloadButton name={purchase.instrumental} blobUrl={`/api/${purchase.file}`} />
                            </div>
                        );
                    })) : null
                    }</div>
                    <div className='py-5 mr-10'>
                </div>
            </div></>
        )
    }