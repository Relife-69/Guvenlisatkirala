import React, { useEffect, useState } from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import axios from "axios";
import {
  MainContaniner,
  Image,
  ImageContainer,
  Image2,
  HeadingContainer,
  IconContainer,
  Icon,
  Head,
  IconText,
  Price,
  PriceContainer,
  IconImage,
  ExtraContainer,
  Pricetag,
  ComponentContain,
  SingleComponent,
  ComponentIcon,
  ComponentText,
  Main,
  Time,
  AreaContainer,
  AreaHeading,
  AreaText,
  DefText,
  DefinationContainer,
  DefHeading,
  MapContainer,
  MapIframe,
  Search,
  ButtonContainer,
  Button,
  ButtonIcon,
  ButtonText,
} from "./StyledSingleProperty";
import LikeButton from "../../LikeButton/LikeButton";
import { RxHamburgerMenu } from "react-icons/rx";
import ExtraFrame3 from "../../Frames/ExtraFrame/ExtraFrame3";
import { BsHospital } from "react-icons/bs";
import { FaSchool } from "react-icons/fa6";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import {
  Component,
  Component1,
  ComponentContainer,
  Container,
  Heading,
  Text,
  Text2,
} from "../../Frames/ExtraFrame/StyledExtraFrame1";
import { useParams } from "react-router-dom";

import P4 from "../../Images/Share.png";
import P5 from "../../Images/Call.png";
import P6 from "../../Images/Bed1.png";
import P7 from "../../Images/Wash1.png";
import P8 from "../../Images/Area1.png";

const SingleProperty = () => {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState(null);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const togglePhoneNumber = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  useEffect(() => {
    async function fetchProperty() {
      try {
        const response = await axios.get(
          `https://api.guvenlisatkirala.com/api/advertisements/${id}`
        );
        console.log("Property API Response:", response.data);

        if (response.headers["content-type"].includes("application/json")) {
          const property = response.data;
          console.log("Property Data:", property);

          // Set property data to state
          setPropertyData(property);
        } else {
          console.error("Expected JSON, but received HTML:", response.data);
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    }

    fetchProperty();
  }, [id]);

  if (!propertyData) {
    return <div>Loading...</div>; // Add loading state if necessary
  }
  const handleShare = async (title) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Paylaş: " + title,
          text: "Güvenli satılık kiralık ilanı",
          url: window.location.href,
        });
      } else {
        // Fallback if navigator.share is not supported
        console.log("Web share not supported, using fallback");
        // You can implement a custom share dialog or any fallback logic here
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  return (
    <>
      <Navbar />
      <MainContaniner>
        <Main>
          {/* Display main image and additional images */}
          <Image src={propertyData.images[0]?.image_url} />
          <ImageContainer>
            {propertyData.images.slice(1, 4).map((image, index) => (
              <Image2 key={index} src={image.image_url} />
            ))}
          </ImageContainer>
          {/* Display property title and price */}
          <HeadingContainer>
            <Head>{propertyData.dynamic_attributes.title}</Head>
          </HeadingContainer>
          <ExtraContainer>
            <PriceContainer>
              <Pricetag>₺</Pricetag>
              <Price>{propertyData.dynamic_attributes.price}</Price>
            </PriceContainer>
            <IconContainer>
              <Icon
                onClick={() =>
                  handleShare(propertyData.dynamic_attributes.title)
                }
              >
                <IconImage src={P4}></IconImage>
                <IconText>Paylaş</IconText>
              </Icon>
              <Icon onClick={togglePhoneNumber}>
                <IconImage src={P5}></IconImage>
                <IconText>
                  {showPhoneNumber
                    ? propertyData.dynamic_attributes.phone_number
                    : "İlan sahibini ara"}
                </IconText>
              </Icon>

              <Icon>
                <LikeButton />
                <IconText>Favorilere ekle</IconText>
              </Icon>
              <Icon>
                <RxHamburgerMenu />
                <IconText>İlanı karşılaştırma listesine ekle</IconText>
              </Icon>
            </IconContainer>
          </ExtraContainer>
          <ComponentContain>
            {/* Display property components like rooms, bathrooms, area */}
            <SingleComponent>
              <ComponentIcon src={P6}></ComponentIcon>
              <ComponentText>
                {propertyData.dynamic_attributes.rooms}
              </ComponentText>
            </SingleComponent>
            <SingleComponent>
              <ComponentIcon src={P7}></ComponentIcon>
              <ComponentText>
                {propertyData.dynamic_attributes.bathrooms}
              </ComponentText>
            </SingleComponent>
            <SingleComponent>
              <ComponentIcon src={P8}></ComponentIcon>
              <ComponentText>
                {propertyData.dynamic_attributes.area_sqft} m²
              </ComponentText>
            </SingleComponent>
          </ComponentContain>
          <Time>{new Date(propertyData.created_at).toLocaleString()}</Time>
          {/* Display property area status */}
          <AreaContainer>
            <AreaHeading>Durum</AreaHeading>
            <AreaText>{propertyData.dynamic_attributes.using_status}</AreaText>
          </AreaContainer>
          {/* Display property description */}
          <DefinationContainer>
            <DefHeading>Tanım</DefHeading>
            <DefText>{propertyData.dynamic_attributes.description}</DefText>
          </DefinationContainer>
        </Main>
        {propertyData.property_type === "Daire" && (
          <Container>
            <Heading>İlan Bilgileri</Heading>
            <ComponentContainer>
              <Component>
                <Text>Konum</Text>
                <Text2>{propertyData.location}</Text2>
              </Component>
              <Component>
                <Text>Mahalle adı:</Text>
                <Text2>{propertyData.dynamic_attributes.neighborhood}</Text2>
              </Component>
              <Component1>
                <Text>Asansör</Text>
                <Text2>{propertyData.dynamic_attributes.lift}</Text2>
              </Component1>
              <Component1>
                <Text>Sitede</Text>
                <Text2>{propertyData.dynamic_attributes.on_site}</Text2>
              </Component1>
              <Component>
                <Text>Net m2</Text>
                <Text2>{propertyData.dynamic_attributes.area_sqft}</Text2>
              </Component>
              <Component>
                <Text>Otopark</Text>
                <Text2>{propertyData.dynamic_attributes.car_park}</Text2>
              </Component>
              <Component1>
                <Text>Oda Sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.rooms}</Text2>
              </Component1>
              <Component1>
                <Text>Bina Yaşı</Text>
                <Text2>{propertyData.dynamic_attributes.building_age}</Text2>
              </Component1>
              <Component>
                <Text>Aidat</Text>
                <Text2>{propertyData.dynamic_attributes.dues}</Text2>
              </Component>
              <Component>
                <Text>Binadaki kat sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.floors}</Text2>
              </Component>
              <Component1>
                <Text>Kullanım durumu</Text>
                <Text2>{propertyData.dynamic_attributes.using_status}</Text2>
              </Component1>
              <Component1>
                <Text>Dairenin bulunduğu kat</Text>
                <Text2>{propertyData.dynamic_attributes.floor_number}</Text2>
              </Component1>
              <Component>
                <Text>Kredi uygunluğu</Text>
                <Text2>
                  {propertyData.dynamic_attributes.credit_eligibility}
                </Text2>
              </Component>
              <Component>
                <Text>Isıtma sistemi</Text>
                <Text2>{propertyData.dynamic_attributes.heating_system}</Text2>
              </Component>
              <Component1>
                <Text>Tapu durumu</Text>
                <Text2>{propertyData.dynamic_attributes.title_deed}</Text2>
              </Component1>
              <Component1>
                <Text>Banyo sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.bathrooms}</Text2>
              </Component1>
              <Component>
                <Text>Takas</Text>
                <Text2>{propertyData.dynamic_attributes.swap}</Text2>
              </Component>
              <Component>
                <Text>Balkon</Text>
                <Text2>{propertyData.dynamic_attributes.balcony}</Text2>
              </Component>
              <Component1>
                <Text>
                  Elektrik tesisatında, prizlerde, butonlarda sorun mu var?
                </Text>
                <Text2>{propertyData.dynamic_attributes.wiring_problem}</Text2>
              </Component1>
              <Component1>
                <Text>
                  Sıhhi tesisat, musluklar, su giderlerinde sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.pipe_line_problem}
                </Text2>
              </Component1>
              <Component>
                <Text>
                  Doğalgaz kesisatında, kombide veya fırında sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.natural_gas_problem}
                </Text2>
              </Component>
              <Component>
                <Text>Mutfak mobilyası, mutfak lavabosunda sorun mu Var?</Text>
                <Text2>{propertyData.dynamic_attributes.kitchen_problem}</Text2>
              </Component>
              <Component1>
                <Text>
                  Duvarlarda veya zeminlerde çatlak veya hasar var mı?
                </Text>
                <Text2>{propertyData.dynamic_attributes.crack_walls}</Text2>
              </Component1>
              <Component1>
                <Text>Ev boyalı mı?</Text>
                <Text2>{propertyData.dynamic_attributes.painted}</Text2>
              </Component1>
              <Component>
                <Text>İç Kapı ve pencerelerde sorun mu var?</Text>
                <Text2>{propertyData.dynamic_attributes.damage_doors}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Mustakil ev" && (
          <Container>
            <Heading>İlan Bilgileri</Heading>
            <ComponentContainer>
              <Component>
                <Text>Konum</Text>
                <Text2>{propertyData.location}</Text2>
              </Component>
              <Component>
                <Text>Mahalle adı:</Text>
                <Text2>{propertyData.dynamic_attributes.neighborhood}</Text2>
              </Component>
              <Component1>
                <Text>Net m2</Text>
                <Text2>{propertyData.dynamic_attributes.area_sqft}</Text2>
              </Component1>
              <Component1>
                <Text>Oda Sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.rooms}</Text2>
              </Component1>
              <Component>
                <Text>Bina Yaşı</Text>
                <Text2>{propertyData.dynamic_attributes.building_age}</Text2>
              </Component>
              <Component>
                <Text>Binadaki kat sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.floors}</Text2>
              </Component>
              <Component1>
                <Text>Isıtma sistemi</Text>
                <Text2>{propertyData.dynamic_attributes.heating_system}</Text2>
              </Component1>
              <Component1>
                <Text>Banyo sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.bathrooms}</Text2>
              </Component1>
              <Component>
                <Text>Balkon</Text>
                <Text2>{propertyData.dynamic_attributes.balcony}</Text2>
              </Component>
              <Component>
                <Text>Asansör</Text>
                <Text2>{propertyData.dynamic_attributes.lift}</Text2>
              </Component>
              <Component1>
                <Text>Otopark</Text>
                <Text2>{propertyData.dynamic_attributes.car_park}</Text2>
              </Component1>
              <Component1>
                <Text>Sitede</Text>
                <Text2>{propertyData.dynamic_attributes.on_site}</Text2>
              </Component1>
              <Component>
                <Text>Aidat</Text>
                <Text2>{propertyData.dynamic_attributes.dues}</Text2>
              </Component>
              <Component>
                <Text>Kullanım durumu</Text>
                <Text2>{propertyData.dynamic_attributes.using_status}</Text2>
              </Component>
              <Component1>
                <Text>Kredi uygunluğu</Text>
                <Text2>
                  {propertyData.dynamic_attributes.credit_eligibility}
                </Text2>
              </Component1>
              <Component1>
                <Text>Takas</Text>
                <Text2>{propertyData.dynamic_attributes.swap}</Text2>
              </Component1>
              <Component>
                <Text>
                  Elektrik tesisatında, prizlerde, butonlarda sorun mu var?
                </Text>
                <Text2>{propertyData.dynamic_attributes.wiring_problem}</Text2>
              </Component>
              <Component>
                <Text>
                  Sıhhi tesisat, musluklar, su giderlerinde sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.pipe_line_problem}
                </Text2>
              </Component>
              <Component1>
                <Text>
                  Doğalgaz kesisatında, kombide veya fırında sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.natural_gas_problem}
                </Text2>
              </Component1>
              <Component1>
                <Text>Mutfak mobilyası, mutfak lavabosunda sorun mu Var?</Text>
                <Text2>{propertyData.dynamic_attributes.kitchen_problem}</Text2>
              </Component1>
              <Component>
                <Text>
                  Duvarlarda veya zeminlerde çatlak veya hasar var mı?
                </Text>
                <Text2>{propertyData.dynamic_attributes.crack_walls}</Text2>
              </Component>
              <Component>
                <Text>Ev boyalı mı?</Text>
                <Text2>{propertyData.dynamic_attributes.painted}</Text2>
              </Component>
              <Component1>
                <Text>İç Kapı ve pencerelerde sorun mu var?</Text>
                <Text2>{propertyData.dynamic_attributes.damage_doors}</Text2>
              </Component1>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Arsa" && (
          <Container>
            <Heading>İlan Bilgileri</Heading>
            <ComponentContainer>
              <Component>
                <Text>Konum</Text>
                <Text2>{propertyData.location}</Text2>
              </Component>
              <Component>
                <Text>Mahalle adı:</Text>
                <Text2>{propertyData.dynamic_attributes.neighborhood}</Text2>
              </Component>
              <Component1>
                <Text>İmar durumu:</Text>
                <Text2>{propertyData.dynamic_attributes.zoning}</Text2>
              </Component1>
              <Component>
                <Text>Net m2</Text>
                <Text2>{propertyData.dynamic_attributes.area_sqft}</Text2>
              </Component>
              <Component>
                <Text>Metrekare fiyatı:</Text>
                <Text2>{propertyData.dynamic_attributes.area_sqft_price}</Text2>
              </Component>
              <Component>
                <Text>Ada numarası:</Text>
                <Text2>{propertyData.dynamic_attributes.island_number}</Text2>
              </Component>
              <Component>
                <Text>Parsel numarası:</Text>
                <Text2>{propertyData.dynamic_attributes.parcel_number}</Text2>
              </Component>
              <Component1>
                <Text>Kask (Emsal):</Text>
                <Text2>{propertyData.dynamic_attributes.kaks}</Text2>
              </Component1>
              <Component1>
                <Text>Ölçer:</Text>
                <Text2>{propertyData.dynamic_attributes.gauge}</Text2>
              </Component1>
              <Component>
                <Text>Tapu durumu:</Text>
                <Text2>{propertyData.dynamic_attributes.deed_status}</Text2>
              </Component>
              <Component1>
                <Text>Altyapı durumu:</Text>
                <Text2>{propertyData.dynamic_attributes.infra_status}</Text2>
              </Component1>
              <Component1>
                <Text>Manzara:</Text>
                <Text2>{propertyData.dynamic_attributes.view}</Text2>
              </Component1>
              <Component1>
                <Text>Kredi Uygunluğu:</Text>
                <Text2>
                  {propertyData.dynamic_attributes.credit_eligibility}
                </Text2>
              </Component1>
              <Component>
                <Text>Takas:</Text>
                <Text2>{propertyData.dynamic_attributes.swap}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Yazilk" && (
          <Container>
            <Heading>İlan Bilgileri</Heading>
            <ComponentContainer>
              <Component>
                <Text>Konum</Text>
                <Text2>{propertyData.location}</Text2>
              </Component>
              <Component>
                <Text>Mahalle adı:</Text>
                <Text2>{propertyData.dynamic_attributes.neighborhood}</Text2>
              </Component>
              <Component>
                <Text>Net m2</Text>
                <Text2>{propertyData.dynamic_attributes.area_sqft}</Text2>
              </Component>
              <Component1>
                <Text>Oda Sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.rooms}</Text2>
              </Component1>
              <Component1>
                <Text>Bina Yaşı</Text>
                <Text2>{propertyData.dynamic_attributes.building_age}</Text2>
              </Component1>
              <Component>
                <Text>Binadaki kat sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.floors}</Text2>
              </Component>
              <Component>
                <Text>Isıtma sistemi</Text>
                <Text2>{propertyData.dynamic_attributes.heating_system}</Text2>
              </Component>
              <Component1>
                <Text>Banyo sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.bathrooms}</Text2>
              </Component1>
              <Component>
                <Text>Balkon</Text>
                <Text2>{propertyData.dynamic_attributes.balcony}</Text2>
              </Component>
              <Component1>
                <Text>Asansör</Text>
                <Text2>{propertyData.dynamic_attributes.lift}</Text2>
              </Component1>
              <Component>
                <Text>Otopark</Text>
                <Text2>{propertyData.dynamic_attributes.car_park}</Text2>
              </Component>
              <Component1>
                <Text>Sitede</Text>
                <Text2>{propertyData.dynamic_attributes.on_site}</Text2>
              </Component1>
              <Component>
                <Text>Aidat</Text>
                <Text2>{propertyData.dynamic_attributes.dues}</Text2>
              </Component>
              <Component1>
                <Text>Kullanım durumu</Text>
                <Text2>{propertyData.dynamic_attributes.using_status}</Text2>
              </Component1>
              <Component>
                <Text>Kredi uygunluğu</Text>
                <Text2>
                  {propertyData.dynamic_attributes.credit_eligibility}
                </Text2>
              </Component>
              <Component>
                <Text>Takas</Text>
                <Text2>{propertyData.dynamic_attributes.swap}</Text2>
              </Component>
              <Component1>
                <Text>
                  Elektrik tesisatında, prizlerde, butonlarda sorun mu var?
                </Text>
                <Text2>{propertyData.dynamic_attributes.wiring_problem}</Text2>
              </Component1>
              <Component1>
                <Text>
                  Sıhhi tesisat, musluklar, su giderlerinde sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.pipe_line_problem}
                </Text2>
              </Component1>
              <Component>
                <Text>
                  Doğalgaz kesisatında, kombide veya fırında sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.natural_gas_problem}
                </Text2>
              </Component>
              <Component>
                <Text>Mutfak mobilyası, mutfak lavabosunda sorun mu Var?</Text>
                <Text2>{propertyData.dynamic_attributes.kitchen_problem}</Text2>
              </Component>
              <Component1>
                <Text>
                  Duvarlarda veya zeminlerde çatlak veya hasar var mı?
                </Text>
                <Text2>{propertyData.dynamic_attributes.crack_walls}</Text2>
              </Component1>
              <Component1>
                <Text>Ev boyalı mı?</Text>
                <Text2>{propertyData.dynamic_attributes.painted}</Text2>
              </Component1>
              <Component>
                <Text>İç Kapı ve pencerelerde sorun mu var?</Text>
                <Text2>{propertyData.dynamic_attributes.damage_doors}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Bina" && (
          <Container>
            <Heading>İlan Bilgileri</Heading>
            <ComponentContainer>
              <Component>
                <Text>Konum</Text>
                <Text2>{propertyData.location}</Text2>
              </Component>
              <Component>
                <Text>Mahalle adı:</Text>
                <Text2>{propertyData.dynamic_attributes.neighborhood}</Text2>
              </Component>
              <Component>
                <Text>Net m2</Text>
                <Text2>{propertyData.dynamic_attributes.area_sqft}</Text2>
              </Component>
              <Component>
                <Text>Binadaki kat sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.floors}</Text2>
              </Component>
              <Component>
                <Text>Kat Başına Daire Sayısı:</Text>
                <Text2>{propertyData.dynamic_attributes.flate_per_floor}</Text2>
              </Component>
              <Component>
                <Text>Isıtma sistemi</Text>
                <Text2>{propertyData.dynamic_attributes.heating_system}</Text2>
              </Component>
              <Component1>
                <Text>Bina Yaşı</Text>
                <Text2>{propertyData.dynamic_attributes.building_age}</Text2>
              </Component1>
              <Component1>
                <Text>Asansör</Text>
                <Text2>{propertyData.dynamic_attributes.lift}</Text2>
              </Component1>
              <Component>
                <Text>Balkon</Text>
                <Text2>{propertyData.dynamic_attributes.balcony}</Text2>
              </Component>
              <Component>
                <Text>Otopark</Text>
                <Text2>{propertyData.dynamic_attributes.car_park}</Text2>
              </Component>
              <Component>
                <Text>Kredi uygunluğu</Text>
                <Text2>
                  {propertyData.dynamic_attributes.credit_eligibility}
                </Text2>
              </Component>
              <Component>
                <Text>Takas</Text>
                <Text2>{propertyData.dynamic_attributes.swap}</Text2>
              </Component>

              <Component1>
                <Text>
                  Elektrik tesisatında, prizlerde, butonlarda sorun mu var?
                </Text>
                <Text2>{propertyData.dynamic_attributes.wiring_problem}</Text2>
              </Component1>
              <Component1>
                <Text>
                  Sıhhi tesisat, musluklar, su giderlerinde sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.pipe_line_problem}
                </Text2>
              </Component1>
              <Component>
                <Text>
                  Doğalgaz kesisatında, kombide veya fırında sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.natural_gas_problem}
                </Text2>
              </Component>
              <Component>
                <Text>Mutfak mobilyası, mutfak lavabosunda sorun mu Var?</Text>
                <Text2>{propertyData.dynamic_attributes.kitchen_problem}</Text2>
              </Component>
              <Component1>
                <Text>
                  Duvarlarda veya zeminlerde çatlak veya hasar var mı?
                </Text>
                <Text2>{propertyData.dynamic_attributes.crack_walls}</Text2>
              </Component1>
              <Component>
                <Text>İç Kapı ve pencerelerde sorun mu var?</Text>
                <Text2>{propertyData.dynamic_attributes.damage_doors}</Text2>
              </Component>
              <Component1>
                <Text>Sitede</Text>
                <Text2>{propertyData.dynamic_attributes.on_site}</Text2>
              </Component1>
              <Component1>
                <Text>Yangın çıkışı:</Text>
                <Text2>{propertyData.dynamic_attributes.fire_exit}</Text2>
              </Component1>
              <Component>
                <Text>Güvenlik:</Text>
                <Text2>{propertyData.dynamic_attributes.security}</Text2>
              </Component>
              <Component>
                <Text>Bina yetkilisi:</Text>
                <Text2>
                  {propertyData.dynamic_attributes.building_offical}
                </Text2>
              </Component>
              <Component>
                <Text>Hidrofor:</Text>
                <Text2>{propertyData.dynamic_attributes.hydro}</Text2>
              </Component>
              <Component>
                <Text>Jeneratör:</Text>
                <Text2>{propertyData.dynamic_attributes.generator}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Residans" && (
          <Container>
            <Heading>İlan Bilgileri</Heading>
            <ComponentContainer>
              <Component>
                <Text>Konum</Text>
                <Text2>{propertyData.location}</Text2>
              </Component>
              <Component>
                <Text>Mahalle adı:</Text>
                <Text2>{propertyData.dynamic_attributes.neighborhood}</Text2>
              </Component>
              <Component>
                <Text>Net m2</Text>
                <Text2>{propertyData.dynamic_attributes.area_sqft}</Text2>
              </Component>
              <Component1>
                <Text>Oda Sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.rooms}</Text2>
              </Component1>
              <Component1>
                <Text>Bina Yaşı</Text>
                <Text2>{propertyData.dynamic_attributes.building_age}</Text2>
              </Component1>
              <Component>
                <Text>Binadaki kat sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.floors}</Text2>
              </Component>
              <Component1>
                <Text>Dairenin bulunduğu kat</Text>
                <Text2>{propertyData.dynamic_attributes.floor_number}</Text2>
              </Component1>
              <Component>
                <Text>Isıtma sistemi</Text>
                <Text2>{propertyData.dynamic_attributes.heating_system}</Text2>
              </Component>
              <Component1>
                <Text>Banyo sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.bathrooms}</Text2>
              </Component1>
              <Component>
                <Text>Balkon</Text>
                <Text2>{propertyData.dynamic_attributes.balcony}</Text2>
              </Component>
              <Component1>
                <Text>Asansör</Text>
                <Text2>{propertyData.dynamic_attributes.lift}</Text2>
              </Component1>
              <Component>
                <Text>Otopark</Text>
                <Text2>{propertyData.dynamic_attributes.car_park}</Text2>
              </Component>
              <Component1>
                <Text>Sitede</Text>
                <Text2>{propertyData.dynamic_attributes.on_site}</Text2>
              </Component1>
              <Component>
                <Text>Aidat</Text>
                <Text2>{propertyData.dynamic_attributes.dues}</Text2>
              </Component>
              <Component1>
                <Text>Kullanım durumu</Text>
                <Text2>{propertyData.dynamic_attributes.using_status}</Text2>
              </Component1>
              <Component>
                <Text>Kredi uygunluğu</Text>
                <Text2>
                  {propertyData.dynamic_attributes.credit_eligibility}
                </Text2>
              </Component>
              <Component1>
                <Text>Tapu durumu</Text>
                <Text2>{propertyData.dynamic_attributes.title_deed}</Text2>
              </Component1>
              <Component>
                <Text>Takas</Text>
                <Text2>{propertyData.dynamic_attributes.swap}</Text2>
              </Component>
              <Component1>
                <Text>
                  Elektrik tesisatında, prizlerde, butonlarda sorun mu var?
                </Text>
                <Text2>{propertyData.dynamic_attributes.wiring_problem}</Text2>
              </Component1>
              <Component1>
                <Text>
                  Sıhhi tesisat, musluklar, su giderlerinde sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.pipe_line_problem}
                </Text2>
              </Component1>
              <Component>
                <Text>
                  Doğalgaz kesisatında, kombide veya fırında sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.natural_gas_problem}
                </Text2>
              </Component>
              <Component>
                <Text>Mutfak mobilyası, mutfak lavabosunda sorun mu Var?</Text>
                <Text2>{propertyData.dynamic_attributes.kitchen_problem}</Text2>
              </Component>
              <Component1>
                <Text>
                  Duvarlarda veya zeminlerde çatlak veya hasar var mı?
                </Text>
                <Text2>{propertyData.dynamic_attributes.crack_walls}</Text2>
              </Component1>
              <Component1>
                <Text>Ev boyalı mı?</Text>
                <Text2>{propertyData.dynamic_attributes.painted}</Text2>
              </Component1>
              <Component>
                <Text>İç Kapı ve pencerelerde sorun mu var?</Text>
                <Text2>{propertyData.dynamic_attributes.damage_doors}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "işyerleri" && (
          <Container>
            <Heading>İlan Bilgileri</Heading>
            <ComponentContainer>
              <Component>
                <Text>Konum</Text>
                <Text2>{propertyData.location}</Text2>
              </Component>
              <Component>
                <Text>Mahalle adı:</Text>
                <Text2>{propertyData.dynamic_attributes.neighborhood}</Text2>
              </Component>
              <Component>
                <Text>Net m2</Text>
                <Text2>{propertyData.dynamic_attributes.area_sqft}</Text2>
              </Component>
              <Component1>
                <Text>Oda Sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.rooms}</Text2>
              </Component1>
              <Component1>
                <Text>Tip:</Text>
                <Text2>{propertyData.dynamic_attributes.med}</Text2>
              </Component1>
              <Component>
                <Text>Otopark</Text>
                <Text2>{propertyData.dynamic_attributes.car_park}</Text2>
              </Component>
              <Component>
                <Text>Aidatlar (TL):</Text>
                <Text2>{propertyData.dynamic_attributes.dues_TL}</Text2>
              </Component>
              <Component1>
                <Text>Mobilyalı:</Text>
                <Text2>{propertyData.dynamic_attributes.furnished}</Text2>
              </Component1>
              <Component1>
                <Text>Kullanım durumu</Text>
                <Text2>{propertyData.dynamic_attributes.using_status}</Text2>
              </Component1>
              <Component1>
                <Text>Bina Yaşı</Text>
                <Text2>{propertyData.dynamic_attributes.building_age}</Text2>
              </Component1>
              <Component1>
                <Text>
                  Elektrik tesisatında, prizlerde, butonlarda sorun mu var?
                </Text>
                <Text2>{propertyData.dynamic_attributes.wiring_problem}</Text2>
              </Component1>
              <Component1>
                <Text>
                  Sıhhi tesisat, musluklar, su giderlerinde sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.pipe_line_problem}
                </Text2>
              </Component1>
              <Component1>
                <Text>
                  Duvarlarda veya zeminlerde çatlak veya hasar var mı?
                </Text>
                <Text2>{propertyData.dynamic_attributes.crack_walls}</Text2>
              </Component1>
              <Component>
                <Text>Kredi uygunluğu</Text>
                <Text2>
                  {propertyData.dynamic_attributes.credit_eligibility}
                </Text2>
              </Component>
              <Component>
                <Text>Takas</Text>
                <Text2>{propertyData.dynamic_attributes.swap}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Villa" && (
          <Container>
            <Heading>İlan Bilgileri</Heading>
            <ComponentContainer>
              <Component>
                <Text>Konum</Text>
                <Text2>{propertyData.location}</Text2>
              </Component>
              <Component>
                <Text>Mahalle adı:</Text>
                <Text2>{propertyData.dynamic_attributes.neighborhood}</Text2>
              </Component>
              <Component>
                <Text>Net m2</Text>
                <Text2>{propertyData.dynamic_attributes.area_sqft}</Text2>
              </Component>
              <Component1>
                <Text>Oda Sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.rooms}</Text2>
              </Component1>
              <Component1>
                <Text>Bina Yaşı</Text>
                <Text2>{propertyData.dynamic_attributes.building_age}</Text2>
              </Component1>
              <Component>
                <Text>Binadaki kat sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.floors}</Text2>
              </Component>
              <Component>
                <Text>Isıtma sistemi</Text>
                <Text2>{propertyData.dynamic_attributes.heating_system}</Text2>
              </Component>
              <Component1>
                <Text>Banyo sayısı</Text>
                <Text2>{propertyData.dynamic_attributes.bathrooms}</Text2>
              </Component1>
              <Component>
                <Text>Balkon</Text>
                <Text2>{propertyData.dynamic_attributes.balcony}</Text2>
              </Component>
              <Component1>
                <Text>Asansör</Text>
                <Text2>{propertyData.dynamic_attributes.lift}</Text2>
              </Component1>
              <Component>
                <Text>Otopark</Text>
                <Text2>{propertyData.dynamic_attributes.car_park}</Text2>
              </Component>
              <Component1>
                <Text>Sitede</Text>
                <Text2>{propertyData.dynamic_attributes.on_site}</Text2>
              </Component1>
              <Component>
                <Text>Aidat</Text>
                <Text2>{propertyData.dynamic_attributes.dues}</Text2>
              </Component>
              <Component1>
                <Text>Kullanım durumu</Text>
                <Text2>{propertyData.dynamic_attributes.using_status}</Text2>
              </Component1>
              <Component>
                <Text>Kredi uygunluğu</Text>
                <Text2>
                  {propertyData.dynamic_attributes.credit_eligibility}
                </Text2>
              </Component>
              <Component>
                <Text>Takas</Text>
                <Text2>{propertyData.dynamic_attributes.swap}</Text2>
              </Component>
              <Component1>
                <Text>
                  Elektrik tesisatında, prizlerde, butonlarda sorun mu var?
                </Text>
                <Text2>{propertyData.dynamic_attributes.wiring_problem}</Text2>
              </Component1>
              <Component1>
                <Text>
                  Sıhhi tesisat, musluklar, su giderlerinde sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.pipe_line_problem}
                </Text2>
              </Component1>
              <Component>
                <Text>
                  Doğalgaz kesisatında, kombide veya fırında sorun mu var?
                </Text>
                <Text2>
                  {propertyData.dynamic_attributes.natural_gas_problem}
                </Text2>
              </Component>
              <Component>
                <Text>Mutfak mobilyası, mutfak lavabosunda sorun mu Var?</Text>
                <Text2>{propertyData.dynamic_attributes.kitchen_problem}</Text2>
              </Component>
              <Component1>
                <Text>
                  Duvarlarda veya zeminlerde çatlak veya hasar var mı?
                </Text>
                <Text2>{propertyData.dynamic_attributes.crack_walls}</Text2>
              </Component1>
              <Component1>
                <Text>Ev boyalı mı?</Text>
                <Text2>{propertyData.dynamic_attributes.painted}</Text2>
              </Component1>
              <Component>
                <Text>İç Kapı ve pencerelerde sorun mu var?</Text>
                <Text2>{propertyData.dynamic_attributes.damage_doors}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Daire" && (
          <Container>
            <Heading>Genel Özellikler:</Heading>
            <ComponentContainer>
              <Component>
                <Text>Ön:</Text>
                <Text2>{propertyData.dynamic_attributes.first_general}</Text2>
              </Component>
              <Component>
                <Text>Dahili Özellikler:</Text>
                <Text2>{propertyData.dynamic_attributes.second_general}</Text2>
              </Component>
              <Component>
                <Text>Harici Özellikler:</Text>
                <Text2>{propertyData.dynamic_attributes.third_general}</Text2>
              </Component>
              <Component1>
                <Text>Etrafında neler var:</Text>
                <Text2>{propertyData.dynamic_attributes.forth_general}</Text2>
              </Component1>
              <Component1>
                <Text>Ulaşım Tesisi:</Text>
                <Text2>{propertyData.dynamic_attributes.fifth_general}</Text2>
              </Component1>
              <Component>
                <Text>Daire Görünümü:</Text>
                <Text2>{propertyData.dynamic_attributes.sixth_general}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Villa" && (
          <Container>
            <Heading>Genel Özellikler:</Heading>
            <ComponentContainer>
              <Component>
                <Text>Ön:</Text>
                <Text2>{propertyData.dynamic_attributes.first_general}</Text2>
              </Component>
              <Component>
                <Text>Dahili Özellikler:</Text>
                <Text2>{propertyData.dynamic_attributes.second_general}</Text2>
              </Component>
              <Component>
                <Text>Harici Özellikler:</Text>
                <Text2>{propertyData.dynamic_attributes.third_general}</Text2>
              </Component>
              <Component1>
                <Text>Etrafında neler var:</Text>
                <Text2>{propertyData.dynamic_attributes.forth_general}</Text2>
              </Component1>
              <Component1>
                <Text>Ulaşım Tesisi:</Text>
                <Text2>{propertyData.dynamic_attributes.fifth_general}</Text2>
              </Component1>
              <Component>
                <Text>Daire Görünümü:</Text>
                <Text2>{propertyData.dynamic_attributes.sixth_general}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Yazilk" && (
          <Container>
            <Heading>Genel Özellikler:</Heading>
            <ComponentContainer>
              <Component>
                <Text>Ön:</Text>
                <Text2>{propertyData.dynamic_attributes.first_general}</Text2>
              </Component>
              <Component>
                <Text>Dahili Özellikler:</Text>
                <Text2>{propertyData.dynamic_attributes.second_general}</Text2>
              </Component>
              <Component>
                <Text>Harici Özellikler:</Text>
                <Text2>{propertyData.dynamic_attributes.third_general}</Text2>
              </Component>
              <Component1>
                <Text>Etrafında neler var:</Text>
                <Text2>{propertyData.dynamic_attributes.forth_general}</Text2>
              </Component1>
              <Component1>
                <Text>Ulaşım Tesisi:</Text>
                <Text2>{propertyData.dynamic_attributes.fifth_general}</Text2>
              </Component1>
              <Component>
                <Text>Daire Görünümü:</Text>
                <Text2>{propertyData.dynamic_attributes.sixth_general}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Mustakil ev" && (
          <Container>
            <Heading>Genel Özellikler:</Heading>
            <ComponentContainer>
              <Component>
                <Text>Ön:</Text>
                <Text2>{propertyData.dynamic_attributes.first_general}</Text2>
              </Component>
              <Component>
                <Text>Dahili Özellikler:</Text>
                <Text2>{propertyData.dynamic_attributes.second_general}</Text2>
              </Component>
              <Component>
                <Text>Harici Özellikler:</Text>
                <Text2>{propertyData.dynamic_attributes.third_general}</Text2>
              </Component>
              <Component1>
                <Text>Etrafında neler var:</Text>
                <Text2>{propertyData.dynamic_attributes.forth_general}</Text2>
              </Component1>
              <Component1>
                <Text>Ulaşım Tesisi:</Text>
                <Text2>{propertyData.dynamic_attributes.fifth_general}</Text2>
              </Component1>
              <Component>
                <Text>Daire Görünümü:</Text>
                <Text2>{propertyData.dynamic_attributes.sixth_general}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        {propertyData.property_type === "Residans" && (
          <Container>
            <Heading>Genel Özellikler:</Heading>
            <ComponentContainer>
              <Component>
                <Text>Ön:</Text>
                <Text2>{propertyData.dynamic_attributes.first_general}</Text2>
              </Component>
              <Component>
                <Text>Dahili Özellikler:</Text>
                <Text2>{propertyData.dynamic_attributes.second_general}</Text2>
              </Component>
              <Component>
                <Text>Harici Özellikler:</Text>
                <Text2>{propertyData.dynamic_attributes.third_general}</Text2>
              </Component>
              <Component1>
                <Text>Etrafında neler var:</Text>
                <Text2>{propertyData.dynamic_attributes.forth_general}</Text2>
              </Component1>
              <Component1>
                <Text>Ulaşım Tesisi:</Text>
                <Text2>{propertyData.dynamic_attributes.fifth_general}</Text2>
              </Component1>
              <Component>
                <Text>Daire Görünümü:</Text>
                <Text2>{propertyData.dynamic_attributes.sixth_general}</Text2>
              </Component>
            </ComponentContainer>
          </Container>
        )}
        <Main>
          <Search>Konum ve yakındaki tesisler</Search>
          <ButtonContainer>
            <Button>
              <ButtonIcon>
                <FaBuilding />
              </ButtonIcon>
              <ButtonText>TÜM</ButtonText>
            </Button>
            <Button>
              <ButtonIcon>
                <FaSchool />
              </ButtonIcon>
              <ButtonText>Okullar</ButtonText>
            </Button>
            <Button>
              <ButtonIcon>
                <BsHospital />
              </ButtonIcon>
              <ButtonText>Hastaneler</ButtonText>
            </Button>
            <Button>
              <ButtonIcon>
                <IoRestaurantOutline />
              </ButtonIcon>
              <ButtonText>Restoranlar</ButtonText>
            </Button>
          </ButtonContainer>
          {/* Add Google Maps iframe or other location details */}
          <MapContainer>
            <MapIframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12422.904120464987!2d35.24441127147063!3d38.88450960062937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1e6055a09571%3A0x2ddd8337a07a4010!2sYemliha%2C%2038090%20Kocasinan%2FKayseri%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2s!4v1717087062323!5m2!1sen!2s`}
              allowFullScreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </MapContainer>
        </Main>
      </MainContaniner>
      <Footer />
    </>
  );
};

export default SingleProperty;
