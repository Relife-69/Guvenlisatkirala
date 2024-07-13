import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import {
  MainContainer,
  CardContainer,
  SSlider,
  SliderContainer,
  Lbutton,
  Rbutton,
  ButtonText,
} from "./StyledSlider2";
// import CardPic from "../Images/Buy.png";
// import CardPic1 from "../Images/CardImage.png";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Buycard from "../Card/BuyCard/Buycard";

const Slider2 = () => {
  const [cardsData, setCardsData] = useState([]);
  const productContainerRef = useRef(null);

  useEffect(() => {
    async function fetchAdvertisements() {
      try {
        const response = await axios.get(
          "https://api.guvenlisatkirala.com/api/advertisements/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("API Response:", response.data);

        if (response.headers["content-type"].includes("application/json")) {
          const advertisements = response.data;
          console.log("Advertisements:", advertisements);

          // Transforming the data to match the required structure for the cards
          const transformedData = advertisements.map((ad) => ({
            Pic: ad.images[0]?.image.url,
            Pic1: ad.images[1]?.image.url,
            Name: ad.dynamic_attributes.title,
            PPrice: ad.dynamic_attributes.price,
            Beds: ad.dynamic_attributes.rooms,
            Washs: ad.dynamic_attributes.bathrooms,
            SqArea: ad.dynamic_attributes.area_sqft,
            PArea: ad.dynamic_attributes.neighborhood,
            PCity: ad.location,
            UpTime: ad.created_at,
          }));

          setCardsData(transformedData);
        } else {
          console.error("Expected JSON, but received HTML:", response.data);
        }
      } catch (error) {
        // if (error.response) {
        //   console.error("Error Response Data:", error.response.data);
        //   console.error("Error Response Status:", error.response.status);
        //   console.error("Error Response Headers:", error.response.headers);
        // } else {
        //   console.error("Error Message:", error.message);
        // }
      }
    }

    fetchAdvertisements();
  }, []);

  const btnpressprev = () => {
    const width = productContainerRef.current?.clientWidth || 0;
    if (productContainerRef.current) {
      productContainerRef.current.scrollLeft -= width;
    }
  };

  const btnpressnext = () => {
    const width = productContainerRef.current?.clientWidth || 0;
    if (productContainerRef.current) {
      productContainerRef.current.scrollLeft += width;
    }
  };

  return (
    <MainContainer>
      <SliderContainer>
        <Lbutton onClick={btnpressprev}>
          <ButtonText>
            <BiLeftArrowAlt />
          </ButtonText>
        </Lbutton>
        <SSlider ref={productContainerRef}>
          {cardsData.map((card, index) => (
            <CardContainer key={index}>
              <Buycard
                Pic={card.Pic}
                Pic1={card.Pic1}
                Name={card.Name}
                PPrice={card.PPrice}
                SqArea={card.SqArea}
                Beds={card.Beds}
                Washs={card.Washs}
                PArea={card.PArea}
                PCity={card.PCity}
                UpTime={new Date(card.UpTime).toLocaleString()}
              />
            </CardContainer>
          ))}
        </SSlider>
        <Rbutton onClick={btnpressnext}>
          <ButtonText>
            <BiRightArrowAlt />
          </ButtonText>
        </Rbutton>
      </SliderContainer>
    </MainContainer>
  );
};

export default Slider2;
