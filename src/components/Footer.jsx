import React from 'react'
import styled from 'styled-components'


const Container = styled.div `
    height: 10%;
    background-color: darkgreen;
    color: lightgrey;
`

const Wrapper = styled.div `
    padding: 20px;
    display: flex;
    justify-content: space-between;
    
`

const List = styled.ul `
    padding: 0;
    margin: 0;
    font-size: 23px;
    list-style: none;
    display: flex;
    
`

const ListItem = styled.li `
    margin-right: 20px;
`

const Copywrite = styled.span `
    
`


export default function Footer() {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>Guide</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>API</ListItem>
                    <ListItem>Community</ListItem>
                </List>
                <Copywrite>Edishakiri ⓒ</Copywrite>
            </Wrapper>
        </Container>
    )
}
