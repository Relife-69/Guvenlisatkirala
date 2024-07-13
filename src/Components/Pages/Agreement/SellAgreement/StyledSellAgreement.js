import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
  padding-top: 60px;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
`;
const RightContainer = styled.div`
  max-width: 830px;
  height: 610px;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
const Picture = styled.img`
  max-width: 830px;
  height: 610px;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
const Headingcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #7b2cbf;
  margin: 0%;
`;
const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0%;
`;
const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  @media (max-width: 400px) {
    gap: 40px;
  }
`;
const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Input1 = styled.input`
  width: 360px;
  height: 40px;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 15px;
  border: 1px solid black;
  font-weight: 400;
  @media (max-width: 400px) {
    width: 290px;
  }
`;
const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin: 0%;
`;
const Input = styled.select`
  padding: 5px;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  @media (max-width: 400px) {
    width: 100px;
  }
`;
const Birthdate = styled.div`
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: flex;
  flex-direction: row;
`;
const Input3 = styled.select`
  width: 380px;
  height: 50px;
  padding: 10px 10px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 400;
  @media (max-width: 400px) {
    width: 310px;
  }
`;
const Option = styled.option`
  width: 380px;
  height: 50px;
  padding: 10px 10px;
  font-size: 15px;
  font-weight: 400;
`;
const Option1 = styled.option`
  padding: 5px;
  width: 120px;
  height: 40px;
`;
const Input4 = styled.input``;

const Button = styled.button`
  width: 380px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  background-color: #7b2cbf;
  border-radius: 8px;
  border: none;
  color: white;
  @media (max-width: 400px) {
    width: 310px;
  }
`;

export {
  MainContainer,
  LeftContainer,
  RightContainer,
  Picture,
  Headingcontainer,
  Heading,
  Description,
  SelectionContainer,
  Input1,
  Input,
  Birthdate,
  Input3,
  Button,
  Label,
  Input4,
  SContainer,
  Option,
  Option1,
};
