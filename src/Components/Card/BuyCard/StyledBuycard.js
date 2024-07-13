import styled from "styled-components";

const MainCard = styled.div`
  width: 280px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 220px;
  }
`;
const Imagecontainer = styled.div`
  width: 280px;
  height: 155px;
  @media (max-width: 500px) {
    width: 220px;
  }
`;
const Image = styled.img`
  width: 280px;
  height: 155px;
  border: none;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 220px;
  }
`;
const Button = styled.button`
  width: 280px;
  height: 40px;
  border: none;
  border-radius: 0px 0px 10px 10px;
  background-color: #7b2cbf;
  color: white;
  font-size: 12px;
  font-weight: 700;
  &:hover {
    background-color: white;
    color: #7b2cbf;
    border: 2px solid #7b2cbf;
  }
  @media (max-width: 500px) {
    width: 220px;
  }
`;
const MiddleContainer = styled.div`
  background-color: white;
  width: 260px;
  height: 65px;
  padding: 10px;
  display: flex;
  align-items: start;
  gap: 8px;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 200px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
  @media (max-width: 500px) {
    width: 200px;
  }
`;
const Heading = styled.h1`
  font-size: 12px;
  font-weight: 300;
  margin: 0%;
  width: 120px;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
`;
const PriceTag = styled.button`
  width: 24px;
  height: 13px;
  color: white;
  background-color: red;
  font-size: 10px;
  font-weight: 600;
  border: none;
  border-radius: 3px;
`;
const Price = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin: 0%;
`;
const Time = styled.p`
  font-size: 6px;
  font-weight: 400;
  margin: 0%;
`;

const Place = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const City = styled.h2`
  font-size: 8px;
  font-weight: 400;
  margin: 0%;
`;
const Components = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const ElementIcon = styled.img`
  width: 8px;
  height: 8px;
`;
const ElementNumber = styled.p`
  font-size: 6px;
  font-weight: 500;
  margin: 0%;
`;

export {
  MainCard,
  Imagecontainer,
  Image,
  Button,
  MiddleContainer,
  TextContainer,
  Heading,
  PriceContainer,
  PriceTag,
  Price,
  Time,
  Place,
  City,
  Components,
  Element,
  ElementIcon,
  ElementNumber,
};
