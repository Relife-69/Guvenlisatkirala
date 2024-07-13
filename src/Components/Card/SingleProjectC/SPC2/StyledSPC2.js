import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 45px 0px;
`;
const MapContainer = styled.div`
  width: 650px;
  height: 400px;
  overflow: hidden;
`;
const MapIframe = styled.iframe`
  width: 650px;
  height: 400px;
  border: none;
`;

const TextContainer = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
`;
const Heading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0%;
  color: #9d4edd;
`;
const PartnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;
const Partner = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Number = styled.button`
  width: 34px;
  height: 34px;
  color: white;
  background-color: #9d4edd;
  border: none;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0%;
`;
const Arrange = styled.button`
  width: 175px;
  height: 45px;
  color: white;
  background-color: #9d4edd;
  border: none;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
`;

export {
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
};
