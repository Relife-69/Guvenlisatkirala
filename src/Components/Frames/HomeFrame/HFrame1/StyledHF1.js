import styled from "styled-components";

const MainFrame = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background-color: #EEF1F9;
flex-wrap: wrap;
gap:20px;
padding: 15px 0px;
`

const Card = styled.div`
max-width: 490px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:15px;
`

const PicContainer = styled.div`
width:235px;
height: 235px;


`
const Pic = styled.img`
width:235px;
height: 235px;
`

const Heading = styled.h1`
font-size: 28px;
font-weight: 800;
margin: 0%;

`

const Decription = styled.p`
max-width: 490px;
text-align: center;
font-size: 14px;
margin: 0%;

`
const Decription2 = styled.p`
max-width: 400px;
text-align: center;
font-size: 14px;
margin: 0%;

`
const Button = styled.button`
background-color: #7B2CBF;
max-width: 200px;
height: 41px;
padding: 10px;
border-radius: 10px;
font-size: 14px;
color: white;
border: none;
`
export {MainFrame , Card , PicContainer , Heading , Decription, Decription2 , Pic, Button}