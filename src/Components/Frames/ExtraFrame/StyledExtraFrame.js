import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 70vh; 
  background-image: ${({ background }) => background};
  background-size: cover;
  background-position: center; 
  display: flex;
  justify-content: center; 
  align-items: center;

`;

const Upper = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  `;

const Heading = styled.h1`
max-width: 900px;
font-size: 40px;
font-weight: 600;
color: white;
margin:0%;

`
const Text =styled.p`
max-width: 900px;
font-size: 28px;
font-weight: 400;
color: white;
margin:0%;

`
export{MainContainer, Upper, Text, Heading}