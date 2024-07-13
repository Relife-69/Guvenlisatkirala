import React from "react";
import {
  Component,
  Component1,
  ComponentContainer,
  Container,
  Heading,
  MainContainer,
  Text,
  Text2,
} from "./StyledExtraFrame1";

// Array of properties
const properties = [
  { label: "Konum", value: "Şehir İsmi", componentType: "Component" },
  { label: "Asansör", value: "Evet", componentType: "Component" },
  { label: "Net m2", value: "2 metre", componentType: "Component1" },
  { label: "Otopark", value: "Açık Otopark", componentType: "Component1" },
  { label: "Oda Sayısı", value: "1.5+1", componentType: "Component" },
  { label: "Sitede", value: "Evet", componentType: "Component" },
  { label: "Bina Yaşı", value: "0, 1", componentType: "Component1" },
  { label: "Aidat", value: "Evet", componentType: "Component1" },
  { label: "Binadaki kat sayısı", value: "2 ", componentType: "Component" },
  { label: "Kullanım durumu", value: "Boş", componentType: "Component" },
  {
    label: "Dairenin bulunduğu kat",
    value: "Giriş -3",
    componentType: "Component1",
  },
  { label: "Kredi uygunluğu", value: "HAYIR", componentType: "Component1" },
  { label: "Oda Sayısı", value: "1.5+1", componentType: "Component" },
  { label: "Sitede", value: "Evet", componentType: "Component" },
  { label: "Net m2", value: "2 metre", componentType: "Component1" },
  { label: "Otopark", value: "Açık Otopark", componentType: "Component1" },
  { label: "Oda Sayısı", value: "1.5+1", componentType: "Component" },
  { label: "Sitede", value: "Evet", componentType: "Component" },
  { label: "Net m2", value: "2 metre", componentType: "Component1" },
  { label: "Otopark", value: "Açık Otopark", componentType: "Component1" },
  { label: "Oda Sayısı", value: "1.5+1", componentType: "Component" },
  { label: "Sitede", value: "Evet", componentType: "Component" },
  { label: "Net m2", value: "2 metre", componentType: "Component1" },
  { label: "Otopark", value: "Açık Otopark", componentType: "Component1" },
  { label: "Oda Sayısı", value: "1.5+1", componentType: "Component" },
  { label: "Sitede", value: "Evet", componentType: "Component" },
];

const ExtraFrame1 = () => {
  return (
    <MainContainer>
      <Container>
        <Heading>İlan Bilgileri</Heading>
        <ComponentContainer>
          {properties.map((property, index) => {
            const ComponentType =
              property.componentType === "Component1" ? Component1 : Component;
            return (
              <ComponentType key={index}>
                <Text>{property.label}</Text>
                <Text2>{property.value}</Text2>
              </ComponentType>
            );
          })}
        </ComponentContainer>
      </Container>
    </MainContainer>
  );
};

export default ExtraFrame1;
