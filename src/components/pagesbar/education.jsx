"use client"
import React from 'react'
import ContainerElement from '../contentInfo/containerElement'
import { TextPrimary } from '../styleds/texts'
import { styled } from 'styled-components'

const STitleEdu = styled.h3`
    font-size: 2.5rem;
    font-weight: 500;
    margin: 0px;
`
const SDescriptionEdu = styled.p`
    font-size: 1.5rem;
    color: #aaa;
    font-weight: 400;
`

const SEduContainer = styled.ul`
    list-style-type: none; 
`

const SEduItem = styled.li`

`

const Education = () => {
    return <>
        <ContainerElement name="education">
            <TextPrimary>
                Education & Experience
            </TextPrimary>
            <SEduContainer>
                <SEduItem>
                    <STitleEdu>Curso de React Avanzado</STitleEdu>
                    <SDescriptionEdu>Udemy - 2023</SDescriptionEdu>
                </SEduItem>
                <SEduItem>
                    <STitleEdu>Curso de React Avanzado</STitleEdu>
                    <SDescriptionEdu>Udemy - 2023</SDescriptionEdu>
                </SEduItem>
                <SEduItem>
                    <STitleEdu>Curso de React Avanzado</STitleEdu>
                    <SDescriptionEdu>Udemy - 2023</SDescriptionEdu>
                </SEduItem>
                <SEduItem>
                    <STitleEdu>Curso de React Avanzado</STitleEdu>
                    <SDescriptionEdu>Udemy - 2023</SDescriptionEdu>
                </SEduItem>
                <SEduItem>
                    <STitleEdu>Curso de React Avanzado</STitleEdu>
                    <SDescriptionEdu>Udemy - 2023</SDescriptionEdu>
                </SEduItem>
                <SEduItem>
                    <STitleEdu>Curso de React Avanzado</STitleEdu>
                    <SDescriptionEdu>Udemy - 2023</SDescriptionEdu>
                </SEduItem>
                <SEduItem>
                    <STitleEdu>Curso de React Avanzado</STitleEdu>
                    <SDescriptionEdu>Udemy - 2023</SDescriptionEdu>
                </SEduItem>
            </SEduContainer>
        </ContainerElement>

    </>
}

export default Education
