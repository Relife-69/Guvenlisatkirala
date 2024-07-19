import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: start;
  flex-wrap: wrap;
  margin-top: 50px;
`;
const RightContainer = styled.div`
  width: 770px;
  height: 770px;
`;
const Pic = styled.img`
  width: 770px;
  height: 770px;
`;
const LeftContainer = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 80px;
`;
const TextContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
const Heading = styled.h1`
  max-width: 400px;
  font-size: 40px;
  font-weight: 600;
  margin: 0%;
`;
const Text = styled.p`
  max-width: 400px;
  font-size: 18px;
  font-weight: 400;
  margin: 0%;
`;
const InputContainer = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const Input = styled.input`
  width: 425px;
  border: 2px solid silver;
  padding: 0px 0px 0px 25px;
  border-radius: 8px;
  height: 65px;
  font-size: 18px;
  font-weight: 400;
`;
const Return = styled.div`
  max-width: 240px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 3px;
`;
const ReturnText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const ReturnLink = styled.a`
  font-size: 18px;
  /* font-weight: 500; */
`;

export {
  MainContainer,
  RightContainer,
  Pic,
  LeftContainer,
  TextContainer,
  Heading,
  Text,
  InputContainer,
  Input,
  Return,
  ReturnText,
  ReturnLink,
};
