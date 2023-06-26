import React from 'react'
import { styled } from 'styled-components'
import ContainerElement from '../contentInfo/containerElement'


const STextIntroductionPrimary = styled.h1`
    font-size: 10vh;
    font-weight: bolder;
    margin-top: 0px;
    letter-spacing: 3px;
`
const STextIntroductionDescription = styled.span`
    font-size: 3vh;
    color: #aaa;
`

const Introduction = () => {
    return <>
        <ContainerElement name="Introduction">
            <STextIntroductionPrimary>
                Say Hi to Abel Trinidad, software developer fullstack
            </STextIntroductionPrimary>
            <STextIntroductionDescription>
                {`Hello, my name is Abel Trinidad. Nice to meet you! I'm a 
                fullstack developer, and I welcome you to my personal portfolio 
                where you can see all the projects I have completed.`}
            </STextIntroductionDescription>
        </ContainerElement>
    </>
}

export default Introduction
