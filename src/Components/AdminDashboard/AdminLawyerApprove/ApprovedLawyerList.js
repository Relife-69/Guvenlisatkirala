import React, { useState, useEffect } from "react";
import {
  MainContainer,
  CardContain,
  CardContainer,
  Humburger,
  Heading,
  LawyerContainer,
  UpperContainer,
  LowerContainer,
  ProfilePic,
  TextContainer,
  TextHolder,
  NameContainer,
  UpperTextContainer,
  TextContainer2,
  TextContainer1,
  Title,
  Item,
} from "./StyledApprovedLawyer";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../Images/Bicon.png";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import axios from "axios";

const ApprovedLawyerList = () => {
  const [isOpen, setIsOpen] = useState({});
  const [showSideBar, setShowSideBar] = useState(false);
  const [lawyers, setLawyers] = useState([]);
  const [error, setError] = useState("");

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const toggleLawyerDetails = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const fetchApprovedLawyers = async () => {
    try {
      const response = await axios.get(
        `https://api.guvenlisatkirala.com/api/admin/approved-lawyers/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      setLawyers(response.data);
    } catch (error) {
      console.error("Error fetching lawyers:", error);
      setError("Error fetching lawyers. Please try again later.");
    }
  };

  useEffect(() => {
    fetchApprovedLawyers();
  }, []);

  return (
    <>
      <AdminNavbar />
      <MainContainer>
        <Humburger onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </Humburger>
        <AdminSidebar showSideBar={showSideBar} />
        <CardContain>
          <CardContainer>
            <Heading>Vekalet sahibi üyeler</Heading>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {lawyers.map((lawyer) => (
              <LawyerContainer key={lawyer.id}>
                <UpperContainer>
                  <UpperTextContainer
                    onClick={() => toggleLawyerDetails(lawyer.id)}
                  >
                    <ProfilePic src={Logo} />
                    <TextContainer>
                      <TextHolder>
                        <NameContainer>
                          {lawyer.first_name} {lawyer.last_name}
                        </NameContainer>
                      </TextHolder>
                      <TextHolder>
                        <TextContainer2>
                          <FaPhone /> {lawyer.phone_number}
                        </TextContainer2>
                        <TextContainer2>
                          <IoMdMail /> {lawyer.username}
                        </TextContainer2>
                      </TextHolder>
                    </TextContainer>
                  </UpperTextContainer>
                </UpperContainer>
                {isOpen[lawyer.id] && (
                  <LowerContainer>
                    <TextContainer1>
                      <Title>Doğum tarihi:</Title>
                      <Item>{lawyer.birth_date || "N/A"}</Item>
                    </TextContainer1>
                    <TextContainer1>
                      <Title>Telefon numarası:</Title>
                      <Item>{lawyer.phone_number}</Item>
                    </TextContainer1>
                    <TextContainer1>
                      <Title>E-posta:</Title>
                      <Item>{lawyer.username}</Item>
                    </TextContainer1>
                    <TextContainer1>
                      <Title>Verildiği Tarih:</Title>
                      <Item>{lawyer.given_date || "N/A"}</Item>
                    </TextContainer1>
                    <TextContainer1>
                      <Title>Durum:</Title>
                      <Item>{lawyer.is_approved ? "Aktif" : "Beklemede"}</Item>
                    </TextContainer1>
                  </LowerContainer>
                )}
              </LawyerContainer>
            ))}
          </CardContainer>
        </CardContain>
      </MainContainer>
    </>
  );
};

export default ApprovedLawyerList;
