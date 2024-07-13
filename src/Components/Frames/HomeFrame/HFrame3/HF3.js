import React from "react";
import {
  PicContainer,
  Pic,
  TextContainer,
  Heading,
  Para,
  SearchContainer,
  SearchIcon,
  Input,
  MainContainer,
} from "./StyledHF3";
import Google from "../../../Images/G1.png";
import { FaSearch } from "react-icons/fa";

const HF3 = () => {
  return (
    <MainContainer>
      <TextContainer>
        <Heading>Alan Kılavuzları</Heading>
        <Para>
          Okulları, sağlık hizmetlerini, parkları, güvenliği görüntüleyin
          herhangi bir alanın indeksi ve diğer ayrıntıları
        </Para>
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <Input type="search" placeholder="Arama Alanı" name="SearchEngine" />
        </SearchContainer>
      </TextContainer>
      <PicContainer>
        <Pic src={Google}></Pic>
      </PicContainer>
    </MainContainer>
  );
};

export default HF3;
