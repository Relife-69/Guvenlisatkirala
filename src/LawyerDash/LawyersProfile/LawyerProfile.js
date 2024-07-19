import React, { useState, useEffect } from "react";
import axios from "axios";
import LawyerNavbar from "../LawyerNavbar/LawyerNavbar";
import LawyerSidebar from "../LawyerSidebar/LawyerSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Prof from "../../Components/Images/Profile.png";
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
  AddProfilePic,
  ImageContainer,
} from "./StyledLawyerProfile";
import { FiEdit } from "react-icons/fi";

const LawyerProfile = () => {
  const [profilePicUrl, setProfilePicUrl] = useState("");
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

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("profile_picture", file);

    const token = localStorage.getItem("access-token");

    if (!token) {
      setError("You are not logged in. Please log in first.");
      return;
    }

    try {
      const result = await axios.post(
        "https://api.guvenlisatkirala.com/api/upload-profile-picture/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Profile Pic Upload Response:", result.data);
      if (result.data.profile_picture) {
        setProfilePicUrl(result.data.profile_picture);
      } else {
        console.warn("Profile picture URL is null or undefined");
      }
      alert("Profil resmi başarıyla yüklendi");
    } catch (error) {
      console.error(
        "Error uploading profile pic:",
        error.response || error.message
      );
      setError(error.response ? error.response.data.message : error.message);
      alert("Profil resmi yüklenirken bir hata oluştu, lütfen tekrar deneyin");
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("access-token");

        if (!token) {
          setError("You are not logged in. Please log in first.");
          return;
        }

        const response = await axios.get(
          "https://api.guvenlisatkirala.com/api/upload-profile-picture/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        if (data.profile_picture) {
          setProfilePicUrl(data.profile_picture);
        } else {
          console.warn("Profile picture URL is null or undefined in fetch");
        }

        // Fetch and set other profile data here if needed
        setFormData({
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          phoneNumber: data.phone_number,
        });
      } catch (error) {
        console.error(
          "Error fetching profile data:",
          error.response || error.message
        );
        setError(error.response ? error.response.data.message : error.message);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <LawyerNavbar />
      <MainContainer>
        <Humburger onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </Humburger>
        <LawyerSidebar showSideBar={showSideBar} />
        <CardContain>
          <Heading>Profili Düzenle</Heading>
          <ProfileContainer>
            <ImageContainer>
              <ProfilePic src={profilePicUrl || Prof} alt="Profile Picture" />
              <AddProfilePic
                onClick={() =>
                  document.getElementById("profilePicInput").click()
                }
              >
                <FiEdit />
              </AddProfilePic>
              <input
                id="profilePicInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleProfilePicChange}
              />
            </ImageContainer>
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

export default LawyerProfile;
