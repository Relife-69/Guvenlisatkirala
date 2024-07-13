import React from "react";
import DashboardLayout from "../DashboardLayout";
import { MainContainer, CardContain } from "./StyledDashHome";

const DashHome = () => {
  return (
    <>
      <MainContainer>
        <DashboardLayout />
        <CardContain></CardContain>
      </MainContainer>
    </>
  );
};
export default DashHome;
