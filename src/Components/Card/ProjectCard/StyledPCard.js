import styled from "styled-components";

const CardContainer = styled.a`
  max-width: 100%;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: center;
  background-color: white;
  gap: 30px;
  border-radius: 15px;
  flex-wrap: wrap;
  padding: 20px;
  border: 1px solid silver;
  @media (max-width: 1200px) {
    gap: 15px;
    border-radius: 7px;
  }
`;
const LeftContainer = styled.div`
  width: 450px;
  height: 300px;

  @media (max-width: 1200px) {
    width: 350px;
    height: 280px;
  }
  @media (max-width: 1050px) {
    width: 320px;
    height: 280px;
  }
  @media (max-width: 800px) {
    height: 210px;
  }
  @media (max-width: 500px) {
    width: 310px;
    height: 210px;
  }
  @media (max-width: 400px) {
    width: 280px;
    height: 210px;
  }
`;
const Pic = styled.img`
  width: 450px;
  height: 300px;

  @media (max-width: 1200px) {
    width: 350px;
    height: 280px;
  }
  @media (max-width: 1050px) {
    width: 320px;
    height: 280px;
  }
  @media (max-width: 800px) {
    height: 210px;
  }
  @media (max-width: 500px) {
    width: 340px;
    height: 210px;
  }
  @media (max-width: 400px) {
    width: 280px;
    height: 210px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1070px;
  height: 60px;
  @media (max-width: 1200px) {
    width: 350px;
  }
  @media (max-width: 1050px) {
    width: 320px;
  }
  @media (max-width: 400px) {
    width: 280px;
  }
`;
const PersonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PersonImg = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50px;
`;

const PersonInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PersonName = styled.h3`
  margin: 0%;
  font-size: 18px;
  font-weight: 600;
  color: #7b2cbf;
`;
const PersonLocation = styled.p`
  margin: 0%;
  font-size: 12px;
  font-weight: 500;
`;
const ProperityPrice = styled.h1`
  margin: 0%;
  font-size: 28px;
  font-weight: 600;
  span {
    color: #7b2cbf;
    padding: 10px;
  }
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
const ProperityDescription = styled.div`
  max-width: 770px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ProperityText = styled.p`
  margin: 0%;
  font-size: 16px;
  font-weight: 500;
  width: 770px;
  @media (max-width: 1200px) {
    max-width: 700px;
  }
  @media (max-width: 1050px) {
    max-width: 600px;
  }
  @media (max-width: 900px) {
    max-width: 400px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const ProperityArea = styled.div`
  display: flex;
  gap: 5px;
`;
const ProperityAreaIcon = styled.img``;
const ProperityAreaText = styled.p`
  margin: 0%;
  font-size: 12px;
  font-weight: 500;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  gap: 20px;
`;
const Button1 = styled.button`
  width: 110px;
  height: 45px;
  border: 2px solid black;
  color: black;
  background-color: white;
  border-radius: 8px;
`;
const Button2 = styled.button`
  width: 110px;
  height: 45px;
  border: 2px solid #7b2cbf;
  color: White;
  background-color: #7b2cbf;
  border-radius: 8px;
`;
const ButtonLink = styled.a``;
const ButtonIcon = styled.img``;

export {
  CardContainer,
  LeftContainer,
  RightContainer,
  Pic,
  PersonContainer,
  PersonImg,
  PersonInformation,
  PersonLocation,
  PersonName,
  UpperContainer,
  ProperityArea,
  ProperityAreaIcon,
  ProperityAreaText,
  ProperityDescription,
  ProperityPrice,
  ProperityText,
  ButtonContainer,
  Button1,
  Button2,
  ButtonLink,
  ButtonIcon,
};
