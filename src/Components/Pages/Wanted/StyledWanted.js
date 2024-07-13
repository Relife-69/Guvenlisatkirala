import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 15px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0%;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  max-width: 550px;
  text-align: center;
  margin: 0%;
`;

const Image = styled.img``;

const Input = styled.input`
  width: 350px;
  height: 50px;
  padding: 0px 15px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500px;
  font-style: Montserrat;
  border: 2px solid silver;
`;
const Input1 = styled.textarea`
  width: 330px;
  min-height: 60px;
  padding: 25px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500px;
  border: 2px solid silver;
`;
const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const Check = styled.input`
  width: 23px;
  height: 23px;
`;

const Label = styled.label`
  width: 350px;
  font-size: 12px;
`;
const FormHeading = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

const SelectionContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 30px;
`;

const ButtonOptipn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  gap: 5px;
  width: 120px;
  height: 41px;
  background-color: white;
  color: black;
  border: 1px solid silvers;
  border-radius: 10px;

  &:hover {
    background-color: silver;
    color: white;
  }
  &:active {
    border: red;
    background-color: #7b2cbf;
  }
`;

const ButtonPic = styled.img`
  color: black;
  width: 37px;
  height: 25px;
`;

const ButtonText = styled.p``;

export {
  MainContainer,
  LeftContainer,
  RightContainer,
  TextContainer,
  Heading,
  Text,
  Image,
  Input,
  Input1,
  CheckBox,
  Check,
  Label,
  FormHeading,
  SelectionContainer,
  ButtonText,
  ButtonPic,
  ButtonOptipn,
};
