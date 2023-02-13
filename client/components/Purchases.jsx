import React from "react"
import DownloadButton from "./DownloadButton"

export default function Purchases({user}) {

        return (
            <>
            <div>
                <h1 className="font-bold text-4xl pb-2">
                    Purchases
                </h1>
                <div>{user.purchased.length > 0 ? (user.purchased.map((purchase)=> {
                        return (
                            <div key={purchase.id}>
                                <li>{purchase.instrumental}</li>
                                    <ul>{purchase.contract_info}</ul>
                                <DownloadButton blobUrl={`/api/${purchase.file}`} />
                            </div>
                        );
                    })) : null
                    }</div>
                    <div className='py-5 mr-10'>
                </div>
            </div></>
        )
    }