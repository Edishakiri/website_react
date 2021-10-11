import React from 'react'
import styled from 'styled-components'
import Search from "../img/search.png"

const Container = styled.div `
    width: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: -1px -4px 30px 4px rgba(0,0,0,0.67); 
    box-shadow: -1px -4px 30px 4px rgba(0,0,0,0.67);

    @media only screen and (max-widht: 480px){
        widht: 50px;
    }
`

const Image = styled.img `
    width: 20px;
    
`


const Text = styled.span `
    margin-top: 10px;
    text-align: center;

    @media only screen and (max-widht: 480px){
        sont-size: 14px;
    }
`

export default function MiniCart() {
    return (
        <Container>
            <Image src={Search}/>
            <Text>Lorem ipsum dolor </Text>
        </Container>
    )
}
