"use client"
import Breadcrumb from "@/components/breadcrumb";
//import Image from 'next/image'
//import styles from './page.module.css'

import Container from "@/components/container";
import ContentInfo from "@/components/contentInfo";
import NavBar from "@/components/navbar/navBar";
import Profile from "@/components/profile";
import { GeneralProvider } from "@/context/GeneralContext";
import { styled } from "styled-components";


const SContainerScrollable = styled.div`
        overflow-y: auto;
        display: flex;
        column-gap: 4rem;
        padding-right: 4rem;

        &::-webkit-scrollbar {
            width: 10px;
          }
          
          &::-webkit-scrollbar-thumb {
            background: rgb(180, 180, 180); 
            border-radius: 10px;
        }
    `

export default function Home() {
  return <>
    <GeneralProvider>
      <Container>
        <Breadcrumb />
        <SContainerScrollable>
          <Profile />
          <ContentInfo />
        </SContainerScrollable>
        <NavBar />
      </Container>
    </GeneralProvider>
  </>
}
