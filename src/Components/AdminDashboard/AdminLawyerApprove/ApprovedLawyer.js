import React, { useState, useEffect } from "react";
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
  LawyerContainer,
  UpperContainer,
  LowerContainer,
  ProfilePic,
  TextContainer,
  TextHolder,
  NameContainer,
  IconContainer,
  TextContainer2,
  TextContainer1,
  Title,
  Item,
  ButtonContainer,
  Button1,
  Button2,
  UpperTextContainer,
} from "./StyledApprovedLawyer";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import Logo from "../../Images/Bicon.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ApprovedLawyer = () => {
  const [isOpen, setIsOpen] = useState({});
  const [showSideBar, setShowSideBar] = useState(false);
  const [lawyers, setLawyers] = useState([]);
  const navigate = useNavigate();
  const use = localStorage.getItem("user-role");
  useEffect(() => {
    if (use !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const toggleLawyerDetails = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const fetchLawyerById = async (lawyerId) => {
    try {
      const response = await axios.get(
        `https://api.guvenlisatkirala.com/api/lawyer/${lawyerId}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching lawyer:", error);
      return null;
    }
  };

  const updateLawyerStatus = async (lawyerId) => {
    try {
      const response = await axios.post(
        `https://api.guvenlisatkirala.com/api/admin/approve-lawyer/${lawyerId}/`,
        {
          is_approved: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error updating lawyer status:", error);
      return null;
    }
  };

  const declineLawyer = (id) => {
    axios
      .delete(`https://api.guvenlisatkirala.com/api/lawyers/${id}/`)
      .then((response) => {
        if (response.status === 204) {
          setLawyers((prevLawyers) =>
            prevLawyers.filter((lawyer) => lawyer.id !== id)
          );
        }
      })
      .catch((error) => console.error("Error declining lawyer: ", error));
  };

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
                <FaChevronDown />
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
                <FaChevronDown />
              </FilterContainer>
            </SearchHolder>
            <Heading>üye bilgisi</Heading>
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
                        <IconContainer>
                          <RiDeleteBin5Line />
                        </IconContainer>
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
                  <ButtonContainer>
                    <Button1 onClick={updateLawyerStatus}>
                      <FaRegCircleCheck />
                      Accept
                    </Button1>
                    <Button2 onClick={() => declineLawyer(lawyer.id)}>
                      <ImCross /> Decline
                    </Button2>
                  </ButtonContainer>
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

export default ApprovedLawyer;
