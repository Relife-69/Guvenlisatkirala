import React from "react";
import {
  MainContainer,
  MapContainer,
  TextContainer,
  Heading,
  Partner,
  Number,
  Text,
  Arrange,
  PartnerContainer,
  MapIframe,
} from "./StyledSPC2";

const SPC2 = () => {
  return (
    <MainContainer>
      <TextContainer>
        <Heading>Konum</Heading>
        <PartnerContainer>
          <Partner>
            <Number>01</Number>
            <Text>10 dakika PWD</Text>
          </Partner>
          <Partner>
            <Number>02</Number>
            <Text>10 dakika Meezan Bankası</Text>
          </Partner>
          <Partner>
            <Number>03</Number>
            <Text>2 dakika Demiryolu Hattı Gözlem Noktası</Text>
          </Partner>
          <Partner>
            <Number>04</Number>
            <Text>2 dakika Arap Parkı</Text>
          </Partner>
          <Partner>
            <Number>05</Number>
            <Text>15 mins Naval Anchorage Club</Text>
          </Partner>
          <Partner>
            <Number>06</Number>
            <Text>3 dakika Cinnah Tıp Kompleksi</Text>
          </Partner>
        </PartnerContainer>
        <Arrange>ZİYARET PLANLAYIN</Arrange>
      </TextContainer>
      <MapContainer>
        <MapIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12422.904120464987!2d35.24441127147063!3d38.88450960062937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1e6055a09571%3A0x2ddd8337a07a4010!2sYemliha%2C%2038090%20Kocasinan%2FKayseri%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2s!4v1717087062323!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </MapContainer>
    </MainContainer>
  );
};

export default SPC2;
