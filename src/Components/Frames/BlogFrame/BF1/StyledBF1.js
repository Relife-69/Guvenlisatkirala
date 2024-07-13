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

const Image = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover; 
`;

const TextContainer =styled.div`
display: flex;
flex-direction: column;
position: absolute;
align-items: center;
justify-content: center;
`

const Text = styled.h1`
font-style: Montserrat;
font-weight: 600;
font-size: 40px;
width: 470px;
height: 50px;
color: white;
margin: 0%;

`;

const Description = styled.p`
font-style: Montserrat;
font-weight: 500;
font-size: 28px;
width: 800px;
height: 34px;
color: white;
margin: 0%;
`;



export { MainContainer , Image , Text, Description , TextContainer}