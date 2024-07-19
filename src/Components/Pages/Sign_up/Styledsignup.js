// Styledsignup.js
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: 12%;
  padding: 50px 0px;
`;

export const FormContainer = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 25px;
  @media (max-width: 500px) {
    width: 300px;
    align-items: center;
    justify-content: center;
  }
`;

export const Picture = styled.img`
  width: 500px;
  height: 900px;
`;

export const Picture2 = styled.img`
  width: 110px;
  height: 110px;
`;

export const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputContain = styled.input`
  padding: 10px;
  border-radius: 10px;
  color: black;
  font-size: 18px;
  width: 410px;
  height: 50px;
  @media (max-width: 500px) {
    width: 280px;
    font-size: 14px;
  }
`;

export const Heading = styled.h1`
  font-size: 43px;
  width: 450px;
  margin: 0%;
  @media (max-width: 500px) {
    width: 280px;
    font-size: 32px;
  }
`;
export const Heading2 = styled.h2`
  font-size: 18px;
  width: 450px;
  margin: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 280px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 450px;
  @media (max-width: 500px) {
    align-items: center;
    justify-content: center;
  }
`;
export const ButtonContainer2 = styled.div`
  display: flex;
  padding-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const SecondInputCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 30px;
`;

export const SecondInputC = styled.input`
  border: none;
  box-shadow: 5px 10px 10px 0px;
  padding: 5px 10px 5px 60px;
  width: 250px;
  height: 40px;
  font-size: 15px;
  @media (max-width: 500px) {
    width: 150px;
  }
`;

export const Logo = styled.img``;

export const LastContainer = styled.div`
  position: relative;
  top: 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const CheckBoxContainer2 = styled.div`
  display: flex;
  gap: 8px;
  align-items: start;
  padding: 20px 0px;
`;
export const Label = styled.label`
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
  a {
    text-decoration: none;
  }
`;
export const Label1 = styled.a`
  a {
    font-size: 14px;
    color: blue;
  }
`;
export const CheckBox = styled.input`
  width: 30px;
  height: 20px;
  margin: 0%;
`;

export const LoginHeading = styled.h1`
  font-size: 32px;
  font-weight: 700px;
  color: #7b2cbf;
  text-align: center;
  margin: 0%;
`;
export const MsgContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 5px;
  flex-direction: column;
`;

export const InputHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
`;
export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100px;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 20px;
  cursor: pointer;
`;

export const SLabel = styled.span`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  z-index: 1;
  font-size: 18px;
`;

export const ToggleSlider = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ isSelected }) => (isSelected ? "2px" : "calc(50% + 2px)")};
  width: 46px;
  height: 36px;
  background-color: ${({ isSelected }) => (isSelected ? "#f44336" : "#4caf50")};
  border-radius: 18px;
  transition: left 0.3s;
  color: white;
`;
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 420px;
  height: 70px;
  border: 2px solid black;
  padding-left: 10px;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Select = styled.select`
  padding: 10px;
  width: 360px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 14.63px;
  margin: 0%;
  appearance: none;
  gap: 10px;
  border-radius: 6px;
  border: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Option = styled.option`
  display: flex;
  /* height: 24px; */
  padding: 10px;
  align-items: center;
  justify-content: center;
  height: 44px;
`;
export const SearchIcon = styled.div`
  width: 60px;
  height: 70px;
  background-color: #7b2cbf;
  border: none;
  border-radius: 0px 7px 7px 0px;
  color: white;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
