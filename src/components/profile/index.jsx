"use client"
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg"

const SContainerProfile = styled.div`
    border: 2px solid gray;
    border-radius: 20px;
    padding: 2rem;
    max-width: 20rem;
    height: 40rem;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
`

const SHeaderProfile = styled.header`
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: end;
`

const SNameProfile = styled.span`
    font-size: 2rem;
    font-weight: bolder;
    max-width: 50%;
`
const SOcupationProfile = styled.span`
    font-size: 1rem;
    font-weight: bold;
    max-width: 50%;
    line-height: 1.7;
`

const SContainerImage = styled.div`
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    height: 20rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    & > *{
        position: relative;
        bottom: 50px;
    }
`


const STextLocation = styled.span`
    font-size: 1.5rem;
`

const SFooterProfile = styled.div`
    text-align: center;
`
const SContainerConnect = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 1rem;
`

const SContainerConnectIcon = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid #fff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.7rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    &:hover{
        cursor: pointer;
    }
`

const Profile = () => {
    return <>
        <SContainerProfile>
            <SHeaderProfile>
                <SNameProfile>Abel Trinidad</SNameProfile>
                <SOcupationProfile>Fullstack Developer</SOcupationProfile>
            </SHeaderProfile>
            <SContainerImage>

                <Image
                    src={"/profile.jpg"}
                    width={20 * 16}
                    height={30 * 16}
                    alt="Profile Photo"
                    priority
                />
            </SContainerImage>

            <SFooterProfile>
                <STextLocation>
                    Encarnación, Paraguay
                </STextLocation>
                <SContainerConnect>
                    <SContainerConnectIcon>
                        <AiOutlineLinkedin />
                    </SContainerConnectIcon>

                    <SContainerConnectIcon>
                        <AiOutlineGithub />
                    </SContainerConnectIcon>

                    <SContainerConnectIcon>
                        <CgFileDocument />
                    </SContainerConnectIcon>

                </SContainerConnect>
            </SFooterProfile>

        </SContainerProfile>
    </>
}

export default Profile
