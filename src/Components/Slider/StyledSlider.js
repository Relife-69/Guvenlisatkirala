import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #eef1f9;
  padding: 30px 0px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const SliderContainer = styled.div`
  overflow: hidden;
  padding: 20px;
  display: flex;
  gap: 30px;
  max-width: 1400px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1400px) {
    max-width: 1000px;
    padding: 10px;
  }
  @media (max-width: 1000px) {
    max-width: 700px;
  }
  @media (max-width: 700px) {
    max-width: 500px;
  }
  @media (max-width: 500px) {
    width: 400px;
    gap: 0%;
  }
  @media (max-width: 400px) {
    width: 300px;
    gap: 0%;
  }
`;

const Lbutton = styled.button`
  border: none;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  box-shadow: 0px 0px 10px 1px black;
`;

const Rbutton = styled.button`
  border: none;
  box-shadow: 0px 0px 10px 1px black;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
`;

const ButtonText = styled.p`
  font-size: 20px;
  width: 20px;
  cursor: pointer;
`;

const SSlider = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  display: flex;
  gap: 30px;
  @media (max-width: 800px) {
    gap: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%;
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-weight: 600;
  padding-left: 85px;
  font-size: 22px;
  margin: 0%;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%;
    text-align: center;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 85px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%;
    text-align: center;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: white;
  color: black;
  &:hover {
    background-color: #7b2cbf;
    color: white;
    border: #7b2cbf;
  }
`;
export {
  MainContainer,
  CardContainer,
  SSlider,
  SliderContainer,
  Lbutton,
  Rbutton,
  ButtonText,
  TextContainer,
  Heading,
  ButtonContainer,
  Button,
};
