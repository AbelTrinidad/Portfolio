"use client"
import React from 'react'
import {SPrincipalContainer} from '../styleds/containers'

const Container = ({children}) => {
    return (
        <SPrincipalContainer>
            {children}
        </SPrincipalContainer>
    )
}

export default Container
