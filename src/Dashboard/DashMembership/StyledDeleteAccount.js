import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  select, option {
    width: 280px;
    height: 40px;
    background-color: white;
    color: black;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  background-color: #eef1f9;
  &.blurred {
    filter: blur(5px); /* Adjust the blur level as needed */
    pointer-events: none; /* Optional: prevent interaction with blurred content */
  }
`;
export const CardContain = styled.div`
  padding: 100px 0px 0px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DeleteAccountContainer = styled.div`
  width: 950px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const HeadingContainer = styled.h1`
  width: 100%;
  height: 70px;
  display: flex;
  font-size: 24px;
  font-weight: 600;
  color: white;
  background-color: #7b2cbf;
  align-items: center;
  justify-content: start;
  border: none;
  padding-left: 30px;
  margin: 0%;
`;
export const SubmitContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  font-size: 24px;
  flex-direction: column;
  font-weight: 600;
  background-color: white;
  align-items: start;
  justify-content: start;
  padding: 40px 0px 40px 30px;
  border: none;
  gap: 15px;
`;
export const Heading = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-left: 30px;
`;
export const ReasonContainer = styled.div`
  width: 380px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  border: 2px solid silver;
`;
export const Reason = styled.select`
  width: 380px;
  height: 50px;
  appearance: none;
  background-color: transparent;
  padding-left: 20px;
  border: none;
  &:focus {
    border: none;
  }
  &:active {
    border: none;
  }
`;
export const DragButton = styled.button`
  position: relative;
  width: 55px;
  height: 50px;
  background-color: #7b2cbf;
  color: white;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0px 8px 8px 0px;
`;
export const SubmitButton = styled.button`
  width: 260px;
  height: 50px;
  background-color: #7b2cbf;
  color: white;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 55px;
  margin-top: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
export const Confirm = styled.div`
  width: 600px;
  height: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eef1f9;
  border-radius: 30px;
  border: 2px solid #7b2cbf;
  display: ${({ showDiv }) => (showDiv ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); /* Black shadow */
`;
export const DeletePic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 800;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border-bottom: none;
  background-color: white;
  color: red;
  position: relative;
  top: -70px;
  box-shadow: 0 -8px 10px rgba(0, 0, 0, 0.2);
  z-index: 99;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const DeleteHeading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 34.13px;
  margin: 0%;
`;
export const DeleteDescription = styled.p`
  width: 320px;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.94px;
  text-align: center;
`;
export const DeleteButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const NoButton = styled.button`
  width: 150px;
  height: 54px;
  border-radius: 8px;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 24px;
  font-weight: 600;
`;
export const YesButton = styled.button`
  width: 150px;
  height: 54px;
  border-radius: 8px;
  background-color: red;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  font-weight: 600;
  &:focus {
    outline: none;
  }
`;
