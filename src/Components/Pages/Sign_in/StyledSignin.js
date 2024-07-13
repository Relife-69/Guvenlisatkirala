// Styledsignup.js
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12%;
`;

export const FormContainer = styled.div`
  padding: 50px 0px;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 45px;
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
  width: 500px;
  height: 1000px;
  background-image: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 320px;
  }
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
  padding: 20px 0px;
`;
export const Label = styled.label`
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
export const Label1 = styled.a`
  a {
    font-size: 14px;
    text-decoration: none;
    font-weight: 500;
  }
`;
export const CheckBox = styled.input`
  width: 30px;
  height: 20px;
  margin: 0%;
`;
