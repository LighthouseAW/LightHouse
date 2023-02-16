import React, { useState, useEffect, useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import CartContext from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Instrumentals () {
    const [instrumentals, setInstrumentals] = useState([]);
    const [cart, setCart] = useContext(CartContext);
    const [user, _setUser] = useContext(UserContext);
    const router = useRouter()
    const [selectedInstrumental, setSelectedInstrumental] = useState(null);


    useEffect(() => {
        fetch(`/api/instrumentals`)
            .then(res => res.json())
            .then(instrumentals => setInstrumentals(instrumentals))
    }, []);

    const handleClick = (id) => {
        fetch(`/api/carts/${user.cart_id}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                lease_id: id,
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCart(items => [...(items || []), data])
                setSelectedInstrumental(id);
                setTimeout(() => {
                    setSelectedInstrumental(null);
                }, 2000);
            })
        }

        return (
            <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-home">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
                <div className="p-5 text-white z-[2] text-center w-[900px] flex flex-col"  style={{ height: "800px" }} >
                    <h2 className="text-6xl font-bold pt-40">All Beats</h2>
                    {/* <p className="py-5 text-xl">search</p> */}
                    <div className="scroll-container z-[2] flex-grow overflow-y-auto">
                    {instrumentals && instrumentals.map(instrumental => {
                        const audioUrl = `https://jonnynice.onrender.com${instrumental.audio_files[0].file}`;
                        return (
                        <div key={instrumental.id} className="p-4">
                            <div className="border-2 border-slate-800 rounded-lg p-2">
                            <Link href={`/instrumentals/${instrumental.id}`}>
                                <p className='font-bold'>{instrumental.title}</p>
                            </Link>
                            <h3>Genre: {instrumental.genre.name}</h3>
                            <button onClick={() => {
                                handleClick(instrumental.audio_files[0].lease?.id)
                            }}>{selectedInstrumental === instrumental.audio_files[0].lease?.id ? `${instrumental.title} added to cart!` : "Add to Cart" }</button>
                            <AudioPlayer
                                src={audioUrl}
                                onPlay={e => console.log("onPlay")}
                                style={{
                                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                                borderRadius: '10px',
                                padding: '10px',
                                textColor: 'white',
                                }}
                            />
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}