import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import Plus from '../public/icons/plus.svg'
import Minus from '../public/icons/minus.svg'


export default function CartItemCard({cartItem, handleDeleteData, updateCartItem}){
    const { instrumental } = cartItem
    console.log(cartItem)

    const handleSwitch = (id) =>{
        fetch(`/api/orders/${cartItem.id}`,{
            method: 'PATCH',
            headers:  {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                lease_id: id
            }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            updateCartItem({...cartItem, lease: data})
        })
    }

    const handleDelete = (e) =>{
        fetch(`/api/orders/${cartItem.id}`,{
        method: 'DELETE'
        })
        .then((res) => {
            if (res.ok)
            handleDeleteData(cartItem.id)
        })
    }

    return (
        <div>
            <div className="flex pt-5">
                <div className='ml-5'>
                    <div className='flex justify-between'>
                        <Link href={`/instrumentals/${cartItem.lease.instrumental.id}`}>
                            <p className='font-bold'>{cartItem.lease.instrumental.title}</p>
                        </Link>
                        <p className='text-base pl-48'>$ {cartItem.lease.price}.00</p>
                    </div>
                    <div className='pt-5 pb-5'>
                        <p className='text-neutral-500'>{cartItem.lease.contract_info}</p>
                    </div>
                    <div className="flex">
                    <div className="relative inline-block w-48">
                        <select className="w-full py-2 pl-3 pr-8 text-base border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500" onChange={(e) => handleSwitch(e.target.value)}>
                            {cartItem.instrumental.audio_files.map((audio_file, i) => {
                                return audio_file.lease ? (
                                    <option value={audio_file.lease.id} key={i} selected={audio_file.lease.id === cartItem.lease.id}>
                                        {audio_file.lease.contract_info} - ${audio_file.lease.price}
                                    </option>
                                ) : null
                            })}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-2.293 2.293 2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <button className="text-sm font-medium underline ml-2" onClick={handleDelete}>Delete</button>
                </div>
                </div>
            </div>
        </div>
    )
}