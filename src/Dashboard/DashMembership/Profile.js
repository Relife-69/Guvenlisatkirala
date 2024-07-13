import React, { useState, useEffect } from "react";
import DashNav from "../DashNavbar/DashNav";
import Prof from "../../Components/Images/Profile.png";
import DashSidebar from "../DashSidebar/DashSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import {
  MainContainer,
  CardContain,
  Heading,
  ProfileContainer,
  ProfilePic,
  NameContainer,
  Holder,
  Input1,
  Input2,
  Label,
  NameContainer2,
  Button,
  Humburger,
} from "./StyledProfile";

const Profile = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username: formData.email,
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone_number: formData.phoneNumber,
    };

    console.log("Submitting user:", user);

    try {
      const token = localStorage.getItem("access-token");

      if (!token) {
        setError("You are not logged in. Please log in first.");
        return;
      }

      const result = await axios.put(
        "https://api.guvenlisatkirala.com/api/lawyers/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("API Response:", result.data);
      alert("Profil Güncellemesi Başarıyla Tamamlandı");
    } catch (error) {
      console.error("Error response:", error.response || error.message);
      setError(error.response ? error.response.data.message : error.message);
      alert("E-posta veya numara zaten mevcut, Lütfen tekrar deneyin");
    }
  };

  useEffect(() => {
    // Fetch and set initial data here if needed
    // Example:
    // axios.get('https://api.guvenlisatkirala.com/api/lawyer-profile', {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    //   },
    // }).then(response => {
    //   setFormData({
    //     firstName: response.data.first_name,
    //     lastName: response.data.last_name,
    //     email: response.data.email,
    //     phoneNumber: response.data.phone_number
    //   });
    // }).catch(error => {
    //   console.error(error);
    // });
  }, []);

  return (
    <>
      <DashNav />
      <MainContainer>
        <Humburger onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </Humburger>
        <DashSidebar showSideBar={showSideBar} />
        <CardContain>
          <Heading>Profili Düzenle</Heading>
          <ProfileContainer>
            <ProfilePic src={Prof} />
            <NameContainer>
              <Holder>
                <Label>İlk adı:</Label>
                <Input1
                  required
                  type="text"
                  placeholder="İsim"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Holder>
              <Holder>
                <Label>Soy isim:</Label>
                <Input1
                  required
                  type="text"
                  placeholder="Soyadı"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Holder>
            </NameContainer>
            <NameContainer2>
              <Label>E-posta</Label>
              <Input2
                required
                type="email"
                placeholder="E-posta"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </NameContainer2>
            <NameContainer>
              <Holder>
                <Label>İletişim Numarası</Label>
                <Input1
                  required
                  type="tel"
                  placeholder="Başına sıfır koymadan yazın"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Holder>
            </NameContainer>
            <Button onClick={handleSubmit}>KAYDET</Button>
          </ProfileContainer>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </CardContain>
      </MainContainer>
    </>
  );
};

export default Profile;
