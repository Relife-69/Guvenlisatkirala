import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  background-color: #7b2cbf;
  justify-content: space-around;
  align-items: center;
  display: flex;
  padding: 40px 0px;
`;
const Pic = styled.img`
  max-width: 620px;
  height: 370px;
`;
const TextContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 25px;
`;
const Heading = styled.h1`
  font-size: 28px;
  font-weight: 600px;
  color: white;
  margin: 0%;
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: 400px;
  color: white;
  margin: 0%;
`;
const Button = styled.button`
  max-width: 600px;
  font-size: 18px;
  font-weight: 600;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #7b2cbf;
  border: none;
  border-radius: 8px;
`;

export { MainContainer, Pic, TextContainer, Heading, Text, Button };
