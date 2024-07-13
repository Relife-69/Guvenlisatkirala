import styled from "styled-components";

export const Maincontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
export const Picture = styled.img`
  width: 918px;
  height: 789px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
export const TextContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Heading = styled.h2`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 36.57px;
  margin: 0%;
  color: #7b2cbf;
`;
export const Text = styled.p`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 26.82px;
  margin: 0%;
`;
export const Button = styled.button`
  width: 449px;
  height: 68px;
  border-radius: 8px;
  border: none;
  background-color: #7b2cbf;
  color: white;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
  @media (max-width: 500px) {
    width: 300px;
  }
`;
