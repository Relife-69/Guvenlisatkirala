import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 10%;
  gap: 50px;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 60px;
  flex-direction: column;
`;

export const Heading = styled.h2`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 36.57px;
  margin: 0%;
  text-align: left;
  span {
    color: #7b2cbf;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 600;
  line-height: 26.82px;
  text-align: left;
  width: 475px;
  margin: 0%;
  span {
    color: #7b2cbf;
  }
  @media (max-width: 500px) {
    width: 450px;
    text-align: center;
  }
  @media (max-width: 450px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 350px;
  }
  @media (max-width: 350px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  width: 449px;
  height: 68px;
  gap: 0px;
  border-radius: 8px;
  opacity: 0px;
  color: white;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
  background-color: #7b2cbf;
  border: none;
  @media (max-width: 500px) {
    width: 450px;
  }
  @media (max-width: 450px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 350px;
  }
  @media (max-width: 350px) {
    width: 300px;
  }
`;

export const Picture = styled.img`
  width: 786px;
  height: 566px;
  gap: 0px;
  opacity: 0px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.div`
  width: 370px;
  padding: 15px;
  margin: 5px 0;
  font-size: 14px;
  background-color: #f34646;
  color: white;
  border-radius: 5px;
  text-align: center;
`;
export const SuccessMessage = styled.div`
  width: 370px;
  padding: 15px;
  margin: 5px 0;
  font-size: 14px;
  background-color: #5cdd5c;
  color: white;
  border-radius: 5px;
  text-align: center;
`;
