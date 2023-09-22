import React, { createContext, useContext, useState } from "react";

const ActiveLinkContext = createContext();

export const ActiveLinkProvider = ({ children }) => {
    const [selectedLink, setSelectedLink] = useState("");
    const [selectedSubLink, setSelectedSubLink] = useState("");


    return (
        <ActiveLinkContext.Provider
            value={{ selectedLink, setSelectedLink, selectedSubLink, setSelectedSubLink }}
        >
            {children}
        </ActiveLinkContext.Provider>
    );
};

export const useActiveLink = () => {
    return useContext(ActiveLinkContext);
};