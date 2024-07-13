import styled from "styled-components";


const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:50px;
background-color: #EEF1F9;
padding: 50px 0px;
`


const Head = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;


`

const Heading = styled.h1`
font-weight: 600;
font-size: 28px;
color: #7B2CBF;

`

const Button = styled.button`
width: 155px;
height: 52px;
background-color: #7B2CBF;
border: none;
border-radius: 8px;
color: white;
font-size: 22px;
font-weight: 600;


`

const CardHolder = styled.div`

`

export{MainContainer, Head, Heading, Button, CardHolder}