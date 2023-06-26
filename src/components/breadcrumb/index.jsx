"use client"
import { useGeneralContext } from '@/context/GeneralContext'
import React from 'react'
import { LiaHomeSolid } from 'react-icons/lia'
import { styled } from 'styled-components'

const SContainerBreadcrumb = styled.div`
    position: fixed;
    right: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
`

const SBreadCrumbItem = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    border: 1px solid #fff;
    border-radius: 2rem;
    padding: 0.8rem;
    font-size: 1rem;
`

const Breadcrumb = () => {
    const {currentSection} = useGeneralContext();
    return <>
        <SContainerBreadcrumb>
            <SBreadCrumbItem>
                {currentSection}
            </SBreadCrumbItem>
        </SContainerBreadcrumb>
    </>
}

export default Breadcrumb
