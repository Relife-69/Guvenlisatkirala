import React from "react";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  Picture,
  Headingcontainer,
  Heading,
  Description,
  SelectionContainer,
  Input1,
  Input,
  Birthdate,
  Input3,
  Button,
  Label,
  Input4,
  SContainer,
  Option,
  Option1,
} from "./StyledRentAgreement";
import Agree from "../../../Images/Agreement.png";

const RentAgreement = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Headingcontainer>
          <Heading>Gayrimenkul Kiralama</Heading>
          <Description>Lütfen aşağıdaki bilgileri doldurun</Description>
        </Headingcontainer>
        <Label>İsim</Label>
        <Input1 type="name" placeholder="Adınızı giriniz" name="username" />
        <Label>Email</Label>
        <Input1 type="email" placeholder="E-postanızı giriniz" name="email" />
        <Label>Telefon yok</Label>
        <Input1
          type="tel"
          placeholder="Telefon numaranızı girin"
          name="phonenumber"
        />
        <SelectionContainer>
          <Label>Konum:</Label>
          <SContainer>
            <Input4
              type="radio"
              placeholder="Telefon numaranızı girin"
              name="phonenumber"
            />
            <Label>Turkey</Label>
            <Input4
              type="radio"
              placeholder="Telefon numaranızı girin"
              name="phonenumber"
            />
            <Label>Yurt dışı</Label>
          </SContainer>
        </SelectionContainer>
        <Label>Doğum günü</Label>
        <Birthdate>
          <Input>
            <Option1 value="">Date</Option1>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Input>
          <Input>
            <Option1 value="">Month</Option1>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Input>
          <Input>
            <Option1 value="">Year</Option1>
            {Array.from({ length: 80 }, (_, i) => (
              <option key={i + 1960} value={i + 1960}>
                {i + 1960}
              </option>
            ))}
          </Input>
        </Birthdate>
        <Input3 placeholder="Erkek">
          <Option>Senin cinsiyet</Option>
          <Option>Erkek</Option>
          <Option>Dişi</Option>
          <Option>SÖYLEMEMEK DAHA İYİ</Option>
        </Input3>
        <Button>Göndermek</Button>
      </LeftContainer>
      <RightContainer>
        <Picture src={Agree}></Picture>
      </RightContainer>
    </MainContainer>
  );
};

export default RentAgreement;
