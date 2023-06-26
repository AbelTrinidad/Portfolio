import React from 'react'
import { styled } from 'styled-components'

const bgColorPrimary = "transparent"

const SPrincipalContainer = styled.main`
    background-color: ${bgColorPrimary};
    display: flex;
    margin-top: 4rem;
    margin-bottom: 3rem;
    column-gap: 4rem;
    height: calc(100vh - 8rem);
`

export { SPrincipalContainer }
