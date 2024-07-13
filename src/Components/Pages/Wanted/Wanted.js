import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  TextContainer,
  Heading,
  Text,
  Image,
  Input,
  Input1,
  CheckBox,
  Check,
  Label,
  FormHeading,
  SelectionContainer,
  ButtonText,
  ButtonPic,
  ButtonOptipn,
} from "./StyledWanted";
import Want from "../../Images/Wanted.png";
import Button from "../../Button/Button";
import Pic from "../../Images/house.png";
import Pic2 from "../../Images/key.png";

const Wanted = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <LeftContainer>
          <FormHeading>Ne yapmak istiyorsun?</FormHeading>
          <SelectionContainer>
            <ButtonOptipn>
              <ButtonPic src={Pic2}></ButtonPic>
              <ButtonText>Satmak</ButtonText>
            </ButtonOptipn>
            <ButtonOptipn>
              <ButtonPic src={Pic}></ButtonPic>
              <ButtonText>Kira</ButtonText>
            </ButtonOptipn>
          </SelectionContainer>
          <FormHeading>Formu doldurarak ayrıntıları sağlayın</FormHeading>
          <Input
            type="text"
            placeholder="Emlak Tipi"
            id="property"
            name="type"
          />
          <Input
            type="text"
            placeholder="İlgilenilen Şehir"
            id="City Name"
            name="City"
          />
          <Input
            type="text"
            placeholder="İlgi alanı"
            id="Area Name"
            name="Area"
          />
          <Input type="text" placeholder="İsim" id="name" name="Username" />
          <Input
            type="Number"
            placeholder="+ 90    -----------*"
            id="phone"
            name="Phone Number"
          />
          <Input1
            type="text"
            placeholder="ek detaylar(İsteğe bağlı)"
            id="detail"
            name="Detail"
          />
          <CheckBox>
            <Check type="checkbox" id="checkbox" name="checkbox" />
            <Label>
              Guvenlisatkirala Hizmet Şartları'nı okudum ve kabul ediyorum
            </Label>
          </CheckBox>
          <Button btntype="Main" eb text="GÖNDERMEK" />
        </LeftContainer>
        <RightContainer>
          <TextContainer>
            <Heading>ARANAN</Heading>
            <Text>
              Türkiye'de ilk defa uzman bir ekibi sadece 3 tıkla harekete
              geçirin İhtiyacınız olan mülkleri tamamen güvenli ve şeffaf bir
              şekilde bulun işlemler
            </Text>
          </TextContainer>
          <Image src={Want}></Image>
        </RightContainer>
      </MainContainer>
    </>
  );
};

export default Wanted;
