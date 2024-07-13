import styled from 'styled-components'



const MainContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 25px;
background-color: #EEF1F9;
padding: 20px 0px;


`

const TextContainer = styled.div`
max-width: 650px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Heading = styled.h1`
max-width: 650px;
font-size: 22px;
font-weight: 600;
margin: 0%;

`

const Description = styled.p`
max-width: 650px;
font-size: 14px;
font-weight: 400;
margin: 0%;
`

const Card = styled.div`
width: 220px;
justify-content: center;
align-items: center;
flex-direction: column;
display: flex;
gap: 25px;


`

const CardHeading = styled.h1`
font-size: 18px;
font-weight: 600;

`

const MenuContainer = styled.div`
width: 220px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
border-radius: 5px;

`

const Menu = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
list-style: none;
padding: 0%;
`

const List = styled.li``

const CLink =styled.a`
font-size: 12px;
font-weight: 400;
text-decoration: none;
color: black;
&:hover{
color: red;

}
`
const CardHolder = styled.div`
justify-content: space-around;
align-items: center;
display: flex;
flex-wrap: wrap;
gap: 30px;

`


export{ MainContainer, TextContainer, Heading, Description, Card, CardHeading, MenuContainer, Menu, List, CLink, CardHolder}