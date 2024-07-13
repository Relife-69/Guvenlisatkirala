import React from "react";
import PCard from "../../Card/ProjectCard/PCard";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import {
  MainContainer,
  TextContainer,
  ProjectsHeading,
  NOProjects,
} from "./StyledProject";
import Pic from "../../Images/CardImage.png";
import Pic1 from "../../Images/Test1.png";
import Pic2 from "../../Images/Test.png";
import Men from "../../Images/Bicon.png";
import Banner from "../../Banner/Banner";
const Project = () => {
  const cardsData = [
    {
      Card: Pic,
      Card1: Pic1,
      Card2: Pic2,
      Logo: Men,
      SquareArea: "100 Sqft - 300 Sqft | Mağaza ve Ofis",
      Price: "65 LAC'den 1,06 Crore'ye",
      Person: "İMARAT AVM",
      City: "GT Yolu, İstanbul",
      Description:
        "Mall of IMARAT, eski Arap mimarisine yansıyan İslami mirasımızı kutluyor Bu, ortak tarihimizin, geleneklerimizin, İslam sanatımızın ve mimari ihtişamımızın bir kutlamasıdır Alışveriş merkezi aynı zamanda Turkey'ın Arap dünyasıyla olan kardeşçe ilişkisini de simgeliyor.",
    },
    {
      Card: Pic,
      Card1: Pic1,
      Card2: Pic2,
      Logo: Men,
      SquareArea: "100 Sqft - 300 Sqft | Mağaza ve Ofis",
      Price: "65 LAC'den 1,06 Crore'ye",
      Person: "İMARAT AVM",
      City: "GT Yolu, İstanbul",
      Description:
        "Mall of IMARAT, eski Arap mimarisine yansıyan İslami mirasımızı kutluyor Bu, ortak tarihimizin, geleneklerimizin, İslam sanatımızın ve mimari ihtişamımızın bir kutlamasıdır. Alışveriş merkezi aynı zamanda Turkey'ın Arap dünyasıyla olan kardeşçe ilişkisini de simgeliyor.",
    },
    {
      Card: Pic,
      Card1: Pic1,
      Card2: Pic2,
      Logo: Men,
      SquareArea: "100 Sqft - 300 Sqft | Mağaza ve Ofis",
      Price: "65 LAC'den 1,06 Crore'ye",
      Person: "İMARAT AVM",
      City: "GT Yolu, İstanbul",
      Description:
        "Mall of IMARAT, eski Arap mimarisine yansıyan İslami mirasımızı kutluyor Bu, ortak tarihimizin, geleneklerimizin, İslam sanatımızın ve mimari ihtişamımızın bir kutlamasıdır. Alışveriş merkezi aynı zamanda Turkey'ın Arap dünyasıyla olan kardeşçe ilişkisini de simgeliyor.",
    },
    {
      Card: Pic,
      Card1: Pic1,
      Card2: Pic2,
      Logo: Men,
      SquareArea: "100 Sqft - 300 Sqft | Mağaza ve Ofis",
      Price: "65 LAC'den 1,06 Crore'ye",
      Person: "İMARAT AVM",
      City: "GT Yolu, İstanbul",
      Description:
        "Mall of IMARAT, eski Arap mimarisine yansıyan İslami mirasımızı kutluyor Bu, ortak tarihimizin, geleneklerimizin, İslam sanatımızın ve mimari ihtişamımızın bir kutlamasıdır. Alışveriş merkezi aynı zamanda Turkey'ın Arap dünyasıyla olan kardeşçe ilişkisini de simgeliyor.",
    },
    {
      Card: Pic,
      Card1: Pic1,
      Card2: Pic2,
      Logo: Men,
      SquareArea: "100 Sqft - 300 Sqft | Mağaza ve Ofis",
      Price: "65 LAC'den 1,06 Crore'ye",
      Person: "İMARAT AVM",
      City: "GT Yolu, İstanbul",
      Description:
        "Mall of IMARAT, eski Arap mimarisine yansıyan İslami mirasımızı kutluyor Bu, ortak tarihimizin, geleneklerimizin, İslam sanatımızın ve mimari ihtişamımızın bir kutlamasıdır. Alışveriş merkezi aynı zamanda Turkey'ın Arap dünyasıyla olan kardeşçe ilişkisini de simgeliyor.",
    },
    {
      Card: Pic,
      Card1: Pic1,
      Card2: Pic2,
      Logo: Men,
      SquareArea: "100 Sqft - 300 Sqft | Mağaza ve Ofis",
      Price: "65 LAC'den 1,06 Crore'ye",
      Person: "İMARAT AVM",
      City: "GT Yolu, İstanbul",
      Description:
        "Mall of IMARAT, eski Arap mimarisine yansıyan İslami mirasımızı kutluyor Bu, ortak tarihimizin, geleneklerimizin, İslam sanatımızın ve mimari ihtişamımızın bir kutlamasıdır. Alışveriş merkezi aynı zamanda Turkey'ın Arap dünyasıyla olan kardeşçe ilişkisini de simgeliyor.",
    },
    {
      Card: Pic,
      Card1: Pic1,
      Card2: Pic2,
      Logo: Men,
      SquareArea: "100 Sqft - 300 Sqft | Mağaza ve Ofis",
      Price: "65 LAC'den 1,06 Crore'ye",
      Person: "İMARAT AVM",
      City: "GT Yolu, İstanbul",
      Description:
        "Mall of IMARAT, eski Arap mimarisine yansıyan İslami mirasımızı kutluyor Bu, ortak tarihimizin, geleneklerimizin, İslam sanatımızın ve mimari ihtişamımızın bir kutlamasıdır. Alışveriş merkezi aynı zamanda Turkey'ın Arap dünyasıyla olan kardeşçe ilişkisini de simgeliyor.",
    },
    {
      Card: Pic,
      Card1: Pic1,
      Card2: Pic2,
      Logo: Men,
      SquareArea: "100 Sqft - 300 Sqft | Mağaza ve Ofis",
      Price: "65 LAC'den 1,06 Crore'ye",
      Person: "İMARAT AVM",
      City: "GT Yolu, İstanbul",
      Description:
        "Mall of IMARAT, eski Arap mimarisine yansıyan İslami mirasımızı kutluyor Bu, ortak tarihimizin, geleneklerimizin, İslam sanatımızın ve mimari ihtişamımızın bir kutlamasıdır. Alışveriş merkezi aynı zamanda Turkey'ın Arap dünyasıyla olan kardeşçe ilişkisini de simgeliyor.",
    },
    {
      Card: Pic,
      Card1: Pic1,
      Card2: Pic2,
      Logo: Men,
      SquareArea: "100 Sqft - 300 Sqft | Mağaza ve Ofis",
      Price: "65 LAC'den 1,06 Crore'ye",
      Person: "İMARAT AVM",
      City: "GT Yolu, İstanbul",
      Description:
        "Mall of IMARAT, eski Arap mimarisine yansıyan İslami mirasımızı kutluyor Bu, ortak tarihimizin, geleneklerimizin, İslam sanatımızın ve mimari ihtişamımızın bir kutlamasıdır. Alışveriş merkezi aynı zamanda Turkey'ın Arap dünyasıyla olan kardeşçe ilişkisini de simgeliyor.",
    },
  ];
  return (
    <>
      <Banner />
      <Navbar />
      <MainContainer>
        <TextContainer>
          <ProjectsHeading>Türkiye'deki Projeler</ProjectsHeading>
          <NOProjects>( Toplam 19 proje )</NOProjects>
        </TextContainer>
        {cardsData.map((card, index) => (
          <PCard
            key={index}
            Card={card.Card}
            Card1={card.Card1}
            Card2={card.Card2}
            Logo={card.Logo}
            SquareArea={card.SquareArea}
            Price={card.Price}
            PersoN={card.Person}
            City={card.City}
            Description={card.Description}
          />
        ))}
      </MainContainer>
      <Footer />
    </>
  );
};

export default Project;
