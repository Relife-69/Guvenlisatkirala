import styled from "styled-components";

const MainContaniner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef1f9;
  flex-direction: column;
  gap: 30px;
`;
const Main = styled.div`
  max-width: 920px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  padding-top: 5%;
`;
const Image = styled.img`
  border: none;
  border-radius: 8px;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Image2 = styled.img`
  width: 300px;
  height: 270px;
  border: none;
  border-radius: 8px;
`;
const HeadingContainer = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  gap: 12%;
`;
const ExtraContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;
const Icon = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Heading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0%;
`;
const IconImage = styled.img``;
const Price = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin: 0%;
`;
const IconText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
`;
const Pricetag = styled.button`
  width: 46px;
  height: 30px;
  border-radius: 2px;
  background-color: red;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0%;
`;
const ComponentContainer = styled.div`
  width: 920px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 30px;
`;
const SingleComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const ComponentIcon = styled.img`
  width: 23px;
  height: 20px;
`;
const ComponentText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.07px;
`;
const Time = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.94px;
  margin: 0%;
`;
const AreaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 25px;
`;
const AreaHeading = styled.h1`
  width: 94px;
  height: 30px;
  border-radius: 4px;
  background-color: #7b2cbf;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0%;
`;
const AreaText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0%;
  line-height: 19.5px;
`;
const DefinationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 25px;
`;
const DefHeading = styled.h1`
  width: 86px;
  height: 30px;
  border-radius: 4px;
  background-color: black;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0%;
`;
const DefText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin: 0%;
  max-width: 540px;
  line-height: 19.5px;
`;
const MapContainer = styled.div`
  width: 550px;
  height: 240px;
  overflow: hidden;
`;
const MapIframe = styled.iframe`
  width: 550px;
  height: 240px;
  border: none;
`;
const Search = styled.p`
  width: 920px;
  font-size: 22px;
  font-weight: 600;
  margin: 0%;
  font-family: "Montserrat", sans-serif;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 20px;
  padding: 30px 0px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
  color: black;
  gap: 5px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: #7b2cbf;
    border: 2px solid #7b2cbf;
    color: white;
  }
  &:focus {
    background-color: #7b2cbf;
    border: 2px solid #7b2cbf;
    color: white;
  }
  &:active {
    background-color: #7b2cbf;
    border: 2px solid #7b2cbf;
    color: white;
  }
`;
const ButtonIcon = styled.p`
  font-size: 18px;
  margin: 0%;
`;
const ButtonText = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  margin: 0%;
`;

export {
  ExtraContainer,
  ButtonContainer,
  Button,
  ButtonIcon,
  ButtonText,
  DefText,
  Search,
  MapIframe,
  MapContainer,
  DefinationContainer,
  DefHeading,
  PriceContainer,
  MainContaniner,
  Image,
  ImageContainer,
  Image2,
  HeadingContainer,
  IconContainer,
  Icon,
  Heading,
  IconText,
  Price,
  IconImage,
  Pricetag,
  ComponentContainer,
  SingleComponent,
  ComponentIcon,
  ComponentText,
  Main,
  Time,
  AreaContainer,
  AreaHeading,
  AreaText,
};
