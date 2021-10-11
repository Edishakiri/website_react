import React from 'react'
import styled from 'styled-components'


const Container = styled.div `
    margin-right: 50px;
    padding: 20px;
    -webkit-box-shadow: -1px -4px 30px 4px rgba(0,0,0,0.67); 
    box-shadow: -1px -4px 30px 4px rgba(0,0,0,0.67);
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PriceContainer = styled.div `
    display: flex;
    align-items: center;
`

const Price = styled.span `
    font-weight: bold;
    font-size: 50px;
`

const Type = styled.button `
    padding: 10px;
    margin: 10px 0;
    border: 1.5px solid green;
    color: darkgreen;
    background-color: white;
    border-radius: 20px;
    cursor: pointer;
`
const List = styled.ul `
    list-style: none;

`
const ListItem = styled.li `
    margin: 30px 0;


`
const Button = styled.button `
    border: none;
    background-color: darkgreen;
    color: white;
    font-size: 16px;
    font-weight: bold; 
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
`



export const PriceCard = ({price, type}) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
            </PriceContainer>
            <Type>{type} Plan</Type>
            <List>
                <ListItem>200 Hand-Crafted Templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuilt Websites</ListItem>
                <ListItem>Premium Plugins</ListItem>{" "}
            </List>
            <Button>Join NOW!</Button>
            
        </Container>
    )
}
