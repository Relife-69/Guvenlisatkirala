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
} from "./StyledExtraFrame3";

const ExtraFrame3 = () => {
  const properties = [
    { label: "Ön:", value: "Kuzey", componentType: "Component" },
    {
      label: "Dahili Özellikler:",
      value: "ADSLinternet",
      componentType: "Component",
    },
    {
      label: "Harici Özellikler:",
      value: "Araç Şarj İstasyonu",
      componentType: "Component1",
    },
    {
      label: "Etrafında neler var:",
      value: "Alışveriş Merkezi",
      componentType: "Component1",
    },
    {
      label: "Ulaşım Tesisi:",
      value: "Anayol",
      componentType: "Component",
    },
    {
      label: "Daire Görünümü:",
      value: "Boğaz",
      componentType: "Component",
    },
  ];

  return (
    <MainContainer>
      <Container>
        <Heading>Genel Özellikler:</Heading>
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

export default ExtraFrame3;
