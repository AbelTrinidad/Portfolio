"use client"
import React from 'react'
import { styled } from 'styled-components'
import { LiaHomeSolid } from "react-icons/lia"
import { GoBook, GoPerson, GoProjectRoadmap } from "react-icons/go"
import { GiSkills } from "react-icons/gi"
import Link from 'next/link'
import { useGeneralContext } from '@/context/GeneralContext'

const SNavBarContainer = styled.div`
    position: fixed;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    width: fit-content;
    border: 2px solid gray;
    border-radius: 3rem;
    display: flex;
    row-gap: 0.5rem;
    flex-direction: column;
    margin-right: 2rem;
`
const SItemNavBar = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    

    &:hover {
        background-color: gray;
        cursor: pointer;
    }
`

const SIcon = styled.div`
    color: #fff;
    text-decoration: none;
`

const NavBar = () => {
    const { SetCurrentSection } = useGeneralContext();

    const handleSelect = (name) => {
        SetCurrentSection(name);
    }

    return <>
        <SNavBarContainer>
            <Link onClick={() => handleSelect("introduction")} href={"#Introduction"}>
                <SItemNavBar >
                    <SIcon>
                        <LiaHomeSolid />
                    </SIcon>
                </SItemNavBar>
            </Link>

            <Link onClick={() => handleSelect("about")} href={"#About"}>
                <SItemNavBar >
                    <SIcon>
                        <GoPerson />
                    </SIcon>
                </SItemNavBar>
            </Link>
            <SItemNavBar>
                <GoBook />
            </SItemNavBar>
            <SItemNavBar>
                <GoProjectRoadmap />
            </SItemNavBar>
            <SItemNavBar>
                <GiSkills />
            </SItemNavBar>
        </SNavBarContainer>
    </>
}

export default NavBar
