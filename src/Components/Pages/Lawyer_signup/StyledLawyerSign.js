// Styledsignup.js
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: start;
  gap: 12%;
  padding-top: 50px;
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

export const StyledInput = styled.input`
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
  margin: 0;
  @media (max-width: 500px) {
    width: 280px;
    font-size: 32px;
  }
`;

export const Heading2 = styled.h2`
  font-size: 18px;
  margin: 0;
  display: flex;
  position: relative;
  left: 200px;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
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
  gap: 30px;
`;

export const SecondInputC = styled.input`
  border: none;
  box-shadow: 5px 10px 10px 0;
  padding: 5px 10px 5px 60px;
  width: 250px;
  height: 40px;
  font-size: 15px;
  @media (max-width: 500px) {
    width: 150px;
  }
`;

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

export const Label = styled.label`
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;

export const LoginHeading = styled.h1`
  font-size: 32px;
  font-weight: 700px;
  color: #7b2cbf;
  text-align: center;
  margin: 0%;
`;
