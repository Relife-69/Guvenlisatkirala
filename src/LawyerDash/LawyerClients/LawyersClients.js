import React, { useState } from "react";
import LawyerNavbar from "../LawyerNavbar/LawyerNavbar";
import LawyerSidebar from "../LawyerSidebar/LawyerSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MainContainer,
  CardContain,
  CardContainer,
  Humburger,
  Heading,
  SearchHolder,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FilterContainer,
  Filter,
  ArrowIcon,
} from "./StyledLawyerClient";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
const LawyersClients = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <>
      <LawyerNavbar />
      <MainContainer>
        <Humburger onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </Humburger>
        <LawyerSidebar showSideBar={showSideBar} />
        <CardContain>
          <CardContainer>
            <Heading>Bana vekaletname veren üyeler</Heading>
            <SearchHolder>
              <SearchContainer>
                <SearchInput type="search" placeholder="Arama çubuğu...." />
                <SearchIcon>
                  <FaSearch />
                </SearchIcon>
              </SearchContainer>
              <FilterContainer>
                <Filter>
                  <option value="">Tarihe Göre Filtrele</option>
                  {/* Add filter options here */}
                </Filter>
                <ArrowIcon>
                  <FaChevronDown />
                </ArrowIcon>
              </FilterContainer>
              <FilterContainer>
                <Filter>
                  <option value="">Türe göre filtrele</option>
                  {/* Add filter options here */}
                </Filter>
                <ArrowIcon>
                  <FaChevronDown />
                </ArrowIcon>
              </FilterContainer>
            </SearchHolder>
            <SearchHolder>
              <SearchContainer>
                <SearchInput
                  type="search"
                  className="name"
                  placeholder="İsim..."
                />
                <SearchIcon>
                  <FaSearch />
                </SearchIcon>
              </SearchContainer>
              <FilterContainer>
                <Filter>
                  <option value="">Verildiği Tarih</option>
                  {/* Add filter options here */}
                </Filter>
                <ArrowIcon>
                  <FaChevronDown />
                </ArrowIcon>
              </FilterContainer>
              <FilterContainer>
                <Filter>
                  <option value="">Durum</option>
                  {/* Add filter options here */}
                </Filter>
                <ArrowIcon>
                  <FaChevronDown />
                </ArrowIcon>
              </FilterContainer>
            </SearchHolder>
          </CardContainer>
        </CardContain>
      </MainContainer>
    </>
  );
};

export default LawyersClients;
