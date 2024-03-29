import React from 'react'
import styled from 'styled-components'
import Woman from "../img/woman.png"
import AnimatedShapes from './AnimatedShapes'



const Container = styled.div `
    margin-top: 10px;
    height: calc( 100vh - 50px);
    display: flex;
    
    @media only screen and (max-widht: 480px){
            flex-direction: column;
        }
`

const Left = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-widht: 480px){
            width: 100%;
            height: 100%;
    }
`

const Title = styled.h1 `
    width: 60%;
    font-size: 60px;
    @media only screen and (max-widht: 480px){
            widht: 100%;
            font-size: 50px;
    }
`

const Desc = styled.p `
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    @media only screen and (max-widht: 480px){
            widht: 100%;
    }
`

const Info = styled.div `
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-widht: 480px){
            widht: 100%;
            flex-direction: column;
    }
`

const Button = styled.button `
    padding: 15px;
    background-color: darkgreen;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    
    @media only screen and (max-widht: 480px){
        margin-bottom: 20px;
    }
`

const Contact = styled.div `
    display: flex;
    flex-direction: column;
`

const Right = styled.div `
    width: 40%;
    @media only screen and (max-widht: 480px){
            display: none;
    }
`

const Phone = styled.span `
    color: green; 
    font-weight: bold;
`

const ContactText = styled.span `
    color: #gray; 
    margin-top: 5px;
`

const Image = styled.img`
    width: 150%;
    margin-top: 400px;
`



export default function Intro() {
    return (
        <Container>
            <Left>
                <Title>Adventures in creative age</Title>
                <Desc>We belive that designing products and services in close 
                    partnership with our clients is the only way to have a real
                    impacton their business.
                </Desc>
                <Info>
                    <Button>START A PROJECT</Button>
                    <Contact>
                        <Phone>Call Us (012) 345 - 6789</Phone>
                        <ContactText>For any questions or concern</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={Woman}/>
            </Right>
            <AnimatedShapes/>
        </Container>
        
    )
}
