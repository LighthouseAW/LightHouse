import React, { useContext, useState, useEffect } from "react";
import HomeLayout from '../components/HomeLayout';
import UserContext from "../context/UserContext";
import SignIn from "../components/SignIn";


export default function Login() {
    const [user, setUser] = useContext(UserContext)

    useEffect(() => {
        fetch("/api/me").then((r) => {
            if (r.ok) {r.json().then((data) => {
            setUser(data)});
            }});
        }, [setUser]);

    return (
        <HomeLayout>
            <div className='grid mb-20 items-center justify-center'>
                <SignIn />
            </div>
        </HomeLayout>
    )
}