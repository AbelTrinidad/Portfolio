import React, { useContext, useState } from "react";
import { createContext } from "react";
import { GoPerson } from "react-icons/go";
import { LiaHomeSolid } from "react-icons/lia";


const GeneralContext = createContext();

export const useGeneralContext = () => {
    return useContext(GeneralContext)
}

export const GeneralProvider = ({ children }) => {
    const [currentSection, setCurrentSection] = useState(<></>);

    const SetCurrentSection = (nameSection = "introduction") => {
        switch (nameSection.toLowerCase()) {
            case "introduction":
                setCurrentSection(<>
                    <LiaHomeSolid />
                    Introduction
                </>);
                break;
            case "about":
                setCurrentSection(<>
                    <GoPerson />
                    About
                </>);
                break;
            default:
                setCurrentSection(<>
                    <LiaHomeSolid />
                    Introduction
                </>
                );
                break;

        }
    }

    const values = {
        currentSection,
        SetCurrentSection
    }


    return <>
        <GeneralContext.Provider value={values}>
            {children}
        </GeneralContext.Provider>
    </>
}