import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
  padding: 50px 0px;
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 80%;
  gap: 15px;
`;
export const MainHeading = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0%;
`;
export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #7b2cbf;
  margin: 0%;
  span {
    color: #7b2cbf;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding-left: 10px;
  margin: 0%;
  span {
    color: #7b2cbf;
  }
`;
