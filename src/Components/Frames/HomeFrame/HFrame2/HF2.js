import React from "react";
import {
  MainContainer,
  Design,
  Card,
  PicContainer,
  Pic,
  Heading,
  Text,
  Button,
  Design2,
} from "./StyledHF2";
import Des1 from "../../../Images/D1.png";
import Des2 from "../../../Images/D2.png";
import C1 from "../../../Images/C1.png";
import C2 from "../../../Images/C2.png";
import C3 from "../../../Images/C3.png";
import { Link } from "react-router-dom";

const HF2 = () => {
  return (
    <MainContainer>
      <Design src={Des1}></Design>
      <Design2 src={Des2}></Design2>
      <Card>
        <PicContainer>
          <Pic src={C1}></Pic>
        </PicContainer>
        <Heading>Gayrimenkul Satın Al</Heading>
        <Text>Nerede “mükemmel” olduğunu bulun “mutlu” ile tanışır</Text>
        <Link to="/buy">
          <Button> İLAN ARA </Button>
        </Link>
      </Card>
      <Card>
        <PicContainer>
          <Pic src={C2}></Pic>
        </PicContainer>
        <Heading>Gayrimenkul sat</Heading>
        <Text>En iyi değeri elde herhangi bir ekonomi</Text>
        <Link to="/sell">
          <Button>DETAY EKLE</Button>
        </Link>
      </Card>
      <Card>
        <PicContainer>
          <Pic src={C3}></Pic>
        </PicContainer>
        <Heading>Gayrimenkul Kiralama</Heading>
        <Text>Sevebileceğin yerde yaşa</Text>
        <Link to="/rent">
          <Button>KİRALIK FIRSATLARI BUL</Button>
        </Link>
      </Card>
    </MainContainer>
  );
};

export default HF2;
