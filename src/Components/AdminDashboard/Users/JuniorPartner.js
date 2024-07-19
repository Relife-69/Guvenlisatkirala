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
import { Link, useNavigate } from "react-router-dom";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";

const JuniorPartner = () => {
  const [isOpen, setIsOpen] = useState({});
  const [showSideBar, setShowSideBar] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const AddUser = () => {
    navigate("/addpartner");
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
        `https://api.guvenlisatkirala.com/api/admin/employees/partner/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Error fetching users. Please try again later.");
    }
  };

  const deletePartnerUser = async (id) => {
    try {
      await axios.delete(
        `https://api.guvenlisatkirala.com/api/admin/employees/partner/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("Error deleting user. Please try again later.");
    }
  };

  useEffect(() => {
    deletePartnerUser();
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
              <Heading>Küçük partner</Heading>
              <AddButton onClick={AddUser}>
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
                <UpperContainer onClick={() => toggleUserDetails(user.id)}>
                  <UserContainer>
                    <HeadingText>{user.employee_name}</HeadingText>
                    <HeadingText>{user.username}</HeadingText>
                    <HeadingText>{user.joined_at}</HeadingText>
                    <HeadingText>{user.unit_name}</HeadingText>
                    <HeadingActiveText isActive={user.status === "active"}>
                      {user.status}
                    </HeadingActiveText>
                    <HeadingText>
                      <Link to={`/editpartner/${user.id}`}>
                        <FiEdit />
                      </Link>
                      <span onClick={() => deletePartnerUser(user.id)}>
                        <ImBin />
                      </span>
                    </HeadingText>
                  </UserContainer>
                </UpperContainer>
                {isOpen[user.id] && (
                  <div>Additional details can be placed here</div>
                )}
              </LawyerContainer>
            ))}
          </CardContainer>
        </CardContain>
      </MainContainer>
    </>
  );
};

export default JuniorPartner;
