import React, { useState } from "react";
import {
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
} from "./StyledPCard";
import LikeButton from "../../LikeButton/LikeButton";
import Area from "../../Images/Area.png";

const PCard = ({
  Card,
  Card1,
  Card2,
  Logo,
  SquareArea,
  Price,
  Person,
  City,
  Description,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Card, Card1, Card2];
  let intervalId;

  const startImageChange = () => {
    intervalId = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds
  };

  const stopImageChange = () => {
    clearInterval(intervalId);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <CardContainer>
      <LeftContainer>
        <Pic
          src={images[currentImageIndex]}
          onMouseOver={startImageChange} // Start changing images on mouse over
          onMouseOut={stopImageChange} // Stop changing images on mouse out
          style={{ cursor: "pointer" }} // Change cursor to indicate it's clickable
        />
      </LeftContainer>
      <RightContainer>
        <UpperContainer>
          <PersonContainer>
            <PersonImg src={Logo} />
            <PersonInformation>
              <PersonName>{Person}</PersonName>
              <PersonLocation>{City}</PersonLocation>
            </PersonInformation>
          </PersonContainer>
          <LikeButton />
        </UpperContainer>
        <ProperityPrice>
          LIRA
          <span>{Price}</span>
        </ProperityPrice>
        <ProperityDescription>
          <ProperityText>{Description}</ProperityText>
          <ProperityArea>
            <ProperityAreaIcon src={Area} />
            <ProperityAreaText>{SquareArea}</ProperityAreaText>
          </ProperityArea>
        </ProperityDescription>
        <ButtonContainer>
          <Button1>
            <ButtonIcon />
            <ButtonLink>ARAMA</ButtonLink>
          </Button1>
          <Button2>
            <ButtonIcon />
            <ButtonLink>SORMAK</ButtonLink>
          </Button2>
        </ButtonContainer>
      </RightContainer>
    </CardContainer>
  );
};

export default PCard;
