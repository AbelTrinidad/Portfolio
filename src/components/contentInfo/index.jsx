"use client"
import React from 'react'
import Introduction from '../pagesbar/introduction'
import About from '../pagesbar/about'
import { styled } from 'styled-components'
import Education from '../pagesbar/education'

const SContainerInfo = styled.div`
    
`

const ContentInfo = () => {

    return <SContainerInfo>
        <Introduction />
        <About />
        <Education />
    </SContainerInfo>


}

export default ContentInfo
