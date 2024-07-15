import React, { useState, useEffect } from "react";
import {
  MainContainer,
  CardContain,
  CardContainer,
  Humburger,
  Heading,
  LawyerContainer,
  UpperContainer,
  HeadingContainer,
  HeadingText,
  UserContainer,
  AddButton,
  UserAdd,
  HeadingActiveText,
} from "./StyledAllUser";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrAddCircle } from "react-icons/gr";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Worker = () => {
  const [isOpen, setIsOpen] = useState({});
  const [showSideBar, setShowSideBar] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const Adduser = () => {
    navigate("/addworker");
  };
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const toggleUserDetails = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const fetchFrontendUser = async () => {
    try {
      const response = await axios.get(
        `https://api.guvenlisatkirala.com/api/admin/employees/worker/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error Users:", error);
      setError("Error Users. Please try again later.");
    }
  };

  useEffect(() => {
    fetchFrontendUser();
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
            <UserAdd>
              <Heading>Çalışan</Heading>
              <AddButton onClick={Adduser}>
                <GrAddCircle />
                Add New
              </AddButton>
            </UserAdd>
            <UpperContainer>
              <HeadingContainer>
                <HeadingText>Yönetici Adı</HeadingText>
                <HeadingText>E-posta</HeadingText>
                <HeadingText>Şu tarihten beri katıldı</HeadingText>
                <HeadingText>Ünite Adı</HeadingText>
                <HeadingText>Durum</HeadingText>
                <HeadingText>Aksiyon</HeadingText>
              </HeadingContainer>
            </UpperContainer>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {users.map((user) => (
              <LawyerContainer key={user.id}>
                {/* <LawyerContainer> */}
                <UpperContainer onClick={() => toggleUserDetails(user.id)}>
                  <UserContainer>
                    <HeadingText>{user.employee_name}</HeadingText>
                    <HeadingText>{user.username}</HeadingText>
                    <HeadingText>{user.joined_at}</HeadingText>
                    <HeadingText>{user.unit_name}</HeadingText>
                    <HeadingActiveText isActive={user.status === "active"}>
                      {user.status}
                    </HeadingActiveText>
                    <HeadingText>Aksiyon</HeadingText>
                  </UserContainer>
                </UpperContainer>
                {/* {isOpen[user.id] && <LowerContainer></LowerContainer>} */}
              </LawyerContainer>
            ))}
          </CardContainer>
        </CardContain>
      </MainContainer>
    </>
  );
};

export default Worker;
