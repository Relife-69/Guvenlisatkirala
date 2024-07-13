import React, { useState } from "react";
import DashNav from "../DashNavbar/DashNav";
import DashSidebar from "../DashSidebar/DashSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MainContainer,
  CardContain,
  Humburger,
} from "./StyledAuthorizedLawyer";
const AuthorizedLawyer = () => {
  const [showSideBar, setShowSideBar] = useState("false");
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <>
      <DashNav />
      <MainContainer>
        <Humburger onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </Humburger>
        <DashSidebar showSideBar={showSideBar} />
        <CardContain></CardContain>
      </MainContainer>
    </>
  );
};

export default AuthorizedLawyer;
