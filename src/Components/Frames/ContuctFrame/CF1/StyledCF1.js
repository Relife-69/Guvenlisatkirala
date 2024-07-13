import styled from 'styled-components';

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

const Text = styled.p`
position: absolute;
font-style: Montserrat;
font-weight: 600;
font-size: 40px;
width: 265px;
height: 50px;
color: white;
`;


export { MainContainer , Image , Text}