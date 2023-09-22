import React, { useRef, useState} from "react";
import styled from "styled-components";
import { Play } from "phosphor-react";
import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({ link }) {
    const playerRef = useRef()


    return (
        <div className="">
        <iframe
            title="vimeo-player"
            src={link}
            width="640"
            height="360"
            allowFullScreen
            // style={STYLES.videoIframe}
            >
            </iframe>
        </div>
    );
}