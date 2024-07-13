import styled from "styled-components";

const MainContainer = styled.div`
background-color: #EEF1F9;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
gap: 20px;
padding: 20px 0px;
`

const HeadingContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Heading = styled.h1`
min-width:82px;
height:17px;
font-style: Montserrat;
font-weight: 600;
font-size: 22px;


`

const Description =  styled.p`
width:349px;
height:17px;
font-style: Montserrat;
font-weight: 400;
font-size: 14px;

`

const CardContainer =styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-wrap:wrap;
gap: 50px;
`

const Button = styled.button`
width:273px;
height:38px;
background-color: #7B2CBF;
color: white;
font-style:Montserrat;
font-weight: 700;
font-size: 12px;
border-radius: 8px;
border: none ;

`

export{MainContainer, HeadingContainer, Heading, Description,CardContainer, Button}