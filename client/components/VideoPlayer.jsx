import React, { useRef, useState} from "react";
import styled from "styled-components";
import { Play } from "phosphor-react";
import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({ link }) {
    const playerRef = useRef()

    const STYLES = { videoIframeContainer: { padding: '56.25% 0 0 0', position: 'relative', }, videoIframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' } }

    return (
        <div style={STYLES.videoIframeContainer}>
        <iframe
            title="vimeo-player"
            src={link}
            width="640"
            height="360"
            allowFullScreen
            style={STYLES.videoIframe}
            >
            </iframe>
        </div>
    );
}