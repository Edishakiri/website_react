import React from 'react'
import styled from 'styled-components'
import { PriceCard } from './PriceCard'

const Container = styled.div `
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default function Price() {
    return (
        <Container>
            <PriceCard price="10" type="Basic"/>
            <PriceCard price="20" type="Advanced"/>
            <PriceCard price="40" type="Premium"/>
        </Container>
    )
}
