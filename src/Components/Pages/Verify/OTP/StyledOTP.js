import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 10%;
  gap: 50px;
`;
export const OTPContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-direction: column;
`;
export const Heading = styled.h2`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 36.57px;
  margin: 0%;
  color: #7b2cbf;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Text1 = styled.p`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 600;
  line-height: 26.82px;
  margin: 0%;
  span {
    color: #7b2cbf;
  }
`;
export const Text2 = styled.p`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 26.82px;
  margin: 0%;
`;
export const OTPInput = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  width: 40px;
  height: 55px;
  padding-left: 20px;
  border-radius: 8px;
  opacity: 0px;
  background-color: #f2f4f4;
  color: #7b2cbf;
  font-family: Montserrat;
  font-size: 50px;
  font-weight: 800;
  line-height: 60.95px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  width: 359px;
  height: 68px;
  border-radius: 8px;
  opacity: 0px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
  background-color: #7b2cbf;
  color: white;
  @media (max-width: 500px) {
    width: 300px;
  }
`;
export const Picture = styled.img`
  width: 874px;
  height: 751px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
