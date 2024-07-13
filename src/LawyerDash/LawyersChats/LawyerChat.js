import React, { useState } from "react";
import {
  MainContainer,
  CardContain,
  Heading,
  Humburger,
} from "./StyledLawyerChat";
import LawyerNavbar from "../LawyerNavbar/LawyerNavbar";
import LawyerSidebar from "../LawyerSidebar/LawyerSidebar";
import { GiHamburgerMenu } from "react-icons/gi";

const LawyerChat = () => {
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
          <Heading>Tüm mesajlar</Heading>
        </CardContain>
      </MainContainer>
    </>
  );
};

export default LawyerChat;
