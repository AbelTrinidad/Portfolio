"use client"
import React from 'react'
import { TextPrimary, TextSecondary } from '../styleds/texts'
import ContainerElement from '../contentInfo/containerElement'



const About = () => {


    return <>
        <ContainerElement name="About">

            <TextPrimary>Lorem ipsum dolor sit amet consectetur adipisicing elit</TextPrimary>
            <TextSecondary>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                ullam ipsum sint atque placeat quia, rem deserunt aut voluptatem
                voluptates laborum officia maiores quis in magni tenetur nisi
                numquam dolorem?
            </TextSecondary>

        </ContainerElement>
    </>
}

export default About


