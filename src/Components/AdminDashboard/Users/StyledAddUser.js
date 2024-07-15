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
