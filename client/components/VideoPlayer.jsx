import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Play } from "phosphor-react";
import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({ link }) {
    const playerRef = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const userAgent = window.navigator.userAgent;
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    console.log("Link prop:", link); // Add this line for debugging

    try {
        const url = new URL(link);
        const isVimeo = url.hostname.includes("vimeo.com");
        const isYouTube = url.hostname.includes("youtube.com");

        if (isVimeo) {
            return (
                <div>
                <iframe
                    title="vimeo-player"
                    src={link}
                    width={isMobile ? "320" : "640"}
                    height={isMobile ? "180" : "360"}
                    allowFullScreen
                />
                </div>
            );
            } else if (isYouTube) {
            const videoId = url.searchParams.get("v");
            const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

            return (
                <div>
                <iframe
                    title="youtube-player"
                    src={youtubeEmbedUrl}
                    width={isMobile ? "320" : "640"}
                    height={isMobile ? "180" : "360"}
                    allowFullScreen
                />
                </div>
            );
            } else {

            return (
                <div>
                <p>Unsupported video hosting platform</p>
                </div>
            );
            }
        } catch (error) {
            console.error("Invalid URL:", error);
            return (
            <div>
                <p>Invalid URL</p>
            </div>
            );
        }
    }