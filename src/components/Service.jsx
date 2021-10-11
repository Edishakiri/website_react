import React, { useState } from 'react'
import styled from 'styled-components'
import How from "../img/how.png"
import MiniCart from './MiniCart'
import Play from "../img/play.png"


const Container = styled.div `
    display: flex;

    @media only screen and (max-widht: 480px){
        flex-direction: column;
    }
`


const Left = styled.div `
    width: 50%;
    position: relative;

    @media only screen and (max-widht: 480px){
        display: none;
    }
`

const Image = styled.img `
    display: ${(props) => props.open && "none"};
    height: 100%;
    margin-top: 150px;
`

const Video = styled.video `
    display: ${(props )=> !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`


const Right = styled.div `
    width: 50%;

    @media only screen and (max-widht: 480px){
        widht: 100%;
    }
`

const Wrapper = styled.div `
    padding: 50px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-widht: 480px){
        padding: 20px;
    }
`


const Title = styled.h1 `

`

const Desc = styled.p `
    font-size: 30px;
    color: #555;
`

const CardContainer = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const Button = styled.button `
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkgreen;
    color: white;
    font-size: 20px;
    padding: 10px;
    margin-top: 30px;
    cursor: pointer;
    display: flex;
    aling-items: center;
`


const Icon = styled.img `
    width: 20px;
    margin-right: 10px;
`

export default function Service() {

    const [open, setOpen] = useState(false)
    return (
        <Container>
            <Left>
                <Image open={open} src={How} />
                <Video 
                    src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                    open={open}
                    autoPlay
                    loop
                    controls
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>
                        We provide digital experience services to startups and small
                        businesses to looking for a partner of their digital media, design and
                        development, lead generation and communications requirents. We work
                        with you, not for you. Although we have a great resources.
                    </Desc>
                    <CardContainer>
                        <MiniCart/>
                        <MiniCart/>
                        <MiniCart/>
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={Play}/>How it works?
                    </Button>
                </Wrapper>
            </Right>
        </Container>
    )
}
