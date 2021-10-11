import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
        height: 50px;
    `

    const Wrapper = styled.div `
        
        display: flex;
        aling-items: center;
        justify-content: space-between;
    `

    const Left = styled.div `
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `

    const Logo = styled.h1 `
        font-weight: bold;
        text-decoration: underline green;
    `

    const Menu = styled.ul`
        display: flex; 
        list-style: none;

        @media only screen and (max-widht: 480px){

            display: none;
        }
    `

    const MenuItem = styled.li `
        margin-right: 20px;
        font-size: 20px;
        font-weight: bold;
        color: gray;
    `

    const Button = styled.button `
        border: 2px solid white;
        padding: 10px 15px;
        background-color: green;
        color: white; 
        font-weight: bold;
        border-radius: 50%;
        cursor: pointer;
    `


export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Agency</Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
                <Button>JOIN NOW</Button>
            </Wrapper>
        </Container>
    )
}


