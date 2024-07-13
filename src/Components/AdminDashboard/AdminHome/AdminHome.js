import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MainContainer,
  CardContain,
  Humburger,
  ContextContainer,
  FirstContainer,
  PictureContainer,
  PictureContainer1,
  PictureContainer2,
  Picture,
  Heading,
  Container,
  HeadingContainer,
  Picture1,
  Heading1,
  TextContainer,
  TextCon,
  TextCon1,
  NumberText,
  Text,
  TextContainer1,
} from "./StyledAdminHome";
import Log from "../../Images/Ad.png";
import Log1 from "../../Images/Ad1.png";
import Log2 from "../../Images/Ad2.png";
import Log3 from "../../Images/V1.png";
import Log4 from "../../Images/V2.png";
import Log5 from "../../Images/V3.png";
import Log6 from "../../Images/V4.png";
import Log7 from "../../Images/V5.png";
import Log8 from "../../Images/V6.png";
import Log9 from "../../Images/V7.png";
import Log10 from "../../Images/V8.png";
import Log11 from "../../Images/V9.png";
import DoughnutChart from "../AdminComponents/Donetchart";

const AdminHome = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <>
      <AdminNavbar />
      <MainContainer>
        <Humburger onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </Humburger>
        <AdminSidebar />
        <CardContain>
          <ContextContainer>
            <FirstContainer>
              <PictureContainer>
                <Picture src={Log} />
              </PictureContainer>
              <Heading>Üyeler Yetkilendir</Heading>
            </FirstContainer>
            <Container>
              <HeadingContainer>
                <Picture1 src={Log3} />
                <Heading1>Projelere Genel Bakış</Heading1>
              </HeadingContainer>
              <TextContainer>
                <TextCon>
                  <NumberText>01</NumberText>
                  <Text>Açık</Text>
                </TextCon>
                <TextCon1>
                  <NumberText>59</NumberText>
                  <Text>
                    <span>Tamamlanmış</span>
                  </Text>
                </TextCon1>
                <TextCon>
                  <NumberText>07</NumberText>
                  <Text>Tutmak</Text>
                </TextCon>
              </TextContainer>
            </Container>
            <Container>
              <HeadingContainer>
                <Picture1 src={Log6} />
                <Heading1>Ekip Üyesinin Genel Bakışı</Heading1>
              </HeadingContainer>
              <TextContainer1>
                <TextCon1>
                  <NumberText>
                    <span>07</span>
                  </NumberText>
                  <Text>Takım üyeleri</Text>
                </TextCon1>
                <TextCon1>
                  <NumberText>
                    <span>15</span>
                  </NumberText>
                  <Text>İzinli</Text>
                </TextCon1>
                <TextCon1>
                  <NumberText>
                    <span>09</span>
                  </NumberText>
                  <Text>İzinli</Text>
                </TextCon1>
                <TextCon1>
                  <NumberText>
                    <span>50</span>
                  </NumberText>
                  <Text>İzinli</Text>
                </TextCon1>
              </TextContainer1>
            </Container>
            <Container>
              <HeadingContainer>
                <Picture1 src={Log9} />
                <Heading1>Olaylar</Heading1>
              </HeadingContainer>
            </Container>
          </ContextContainer>
          <ContextContainer>
            <FirstContainer>
              <PictureContainer1>
                <Picture src={Log1} />
              </PictureContainer1>
              <Heading>Küçük Ortak Sayısı</Heading>
            </FirstContainer>
            <Container>
              <HeadingContainer>
                <Picture1 src={Log4} />
                <Heading1>Faturaya Genel Bakış</Heading1>
              </HeadingContainer>
            </Container>
            <Container>
              <HeadingContainer>
                <Picture1 src={Log7} />
                <Heading1>Tüm Görevlere Genel Bakış</Heading1>
              </HeadingContainer>
            </Container>
            <Container>
              <HeadingContainer>
                <Picture1 src={Log10} />
                <Heading1>Duyuru</Heading1>
              </HeadingContainer>
            </Container>
          </ContextContainer>
          <ContextContainer>
            <FirstContainer>
              <PictureContainer2>
                <Picture src={Log2} />
              </PictureContainer2>
              <Heading>Çalışan Sayısı</Heading>
            </FirstContainer>
            <Container>
              <HeadingContainer>
                <Picture1 src={Log5} />
                <Heading1>Gelir ve Giderler</Heading1>
              </HeadingContainer>
              <DoughnutChart />
            </Container>
            <Container>
              <HeadingContainer>
                <Picture1 src={Log8} />
                <Heading1>Yapışkan notlar</Heading1>
              </HeadingContainer>
            </Container>
            <Container>
              <HeadingContainer>
                <Picture1 src={Log11} />
                <Heading1>Kalanlar</Heading1>
              </HeadingContainer>
            </Container>
          </ContextContainer>
        </CardContain>
      </MainContainer>
    </>
  );
};

export default AdminHome;
