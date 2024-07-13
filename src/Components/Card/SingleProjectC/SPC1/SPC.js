import React from "react";
import {
  MainContainer,
  Pic,
  TextContainer,
  Heading,
  Text,
  Button,
} from "./StyledSPC1";
import Prom from "../../../Images/Pan.png";
const SPC = () => {
  return (
    <MainContainer>
      <TextContainer>
        <Heading>Daha fazlasını bul</Heading>
        <Text>
          Kusursuz tasarlanmış kat planlarından lüks olanaklara kadar, Her
          ayrıntı mükemmelliğe olan bağlılığı sergiliyor. Daldırma Geniş alanı
          keşfederken kendinizi zenginlik dünyasında yerleşim planları, zarif iç
          mekanlar ve son teknoloji ürünü özellikler gelişimimiz ayrı. Başlamak
          için broşürü hemen indirin Her zaman hayalini kurduğunuz geleceği
          ortaya çıkaran görsel bir yolculuğa çıkın.
        </Text>
        <Button>BROŞÜRÜ İNDİR</Button>
      </TextContainer>
      <Pic src={Prom}></Pic>
    </MainContainer>
  );
};

export default SPC;
