import React, { useState } from "react";
import axios from "axios";
import {
  MainContainer,
  CardContain,
  PasswordContainer,
  DeviceContainer,
  HeadingContainer,
  LowerBody,
  PasswordField,
  PasswordInput,
  InputField,
  IconContainer,
  Button,
  Description,
  DevicesHeading,
  DevicesBox,
  Device,
  Button1,
  Devices,
  Textcontiner,
  Text,
  Detail,
  DetailContainer,
  Humburger,
} from "./StyledChangePassword";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDevices, MdOutlineSmartphone } from "react-icons/md";
import { BsFillLaptopFill } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AdminChangePassword = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOldPasswordCorrect, setIsOldPasswordCorrect] = useState(true); // Initially assume old password is correct
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const validatePassword = (password) => {
    // Define your password requirements here
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const toggleShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChangePassword = async () => {
    // Client-side validation
    if (!validatePassword(newPassword)) {
      setError(
        "Yeni şifre en az 8 karakter içermeli, en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir."
      );
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Yeni şifreler eşleşmiyor. Lütfen doğrulayın.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("access-token");

      // Check if token is present
      if (!token) {
        setError("You are not logged in. Please log in first.");
        return;
      }

      const response = await axios.put(
        `https://api.guvenlisatkirala.com/api/change-password/`,
        {
          old_password: oldPassword,
          new_password: newPassword,
          confirm_new_password: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle success response
      console.log(response.data); // Optionally, log the response data
      setSuccessMessage("Şifreniz başarıyla değiştirildi.");
      setIsOldPasswordCorrect(true); // Reset old password validation
    } catch (error) {
      // Handle error
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        localStorage.removeItem("access-token");
      } else if (error.response && error.response.status === 400) {
        setIsOldPasswordCorrect(false); // Set old password validation error
      } else {
        setError(
          "Şifre değiştirilirken bir hata oluştu. Lütfen tekrar deneyin."
        );
      }
      console.error("Password change error:", error);
    } finally {
      setLoading(false);
    }
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
          <PasswordContainer>
            <HeadingContainer>
              Şifre değiştir
              <RiLockPasswordFill />
            </HeadingContainer>
            <LowerBody>
              <Description>
                Şifrenizi değiştirmek için lütfen aşağıdaki alanları doldurunuz.
                Şifreniz en az 8 karakter içermeli, şunları içermelidir: en az
                bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter.
              </Description>
              <PasswordField>
                <PasswordInput>
                  <InputField
                    type={showOldPassword ? "text" : "password"}
                    placeholder="Mevcut Şifre"
                    name="old_password"
                    id="old_password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <IconContainer onClick={toggleShowOldPassword}>
                    {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                  </IconContainer>
                </PasswordInput>
                {!isOldPasswordCorrect && (
                  <p style={{ color: "red" }}>
                    Mevcut şifre yanlış. Lütfen tekrar deneyin.
                  </p>
                )}
                <PasswordInput>
                  <InputField
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Yeni Şifre"
                    name="new_password"
                    id="new_password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <IconContainer onClick={toggleShowNewPassword}>
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </IconContainer>
                </PasswordInput>
                <PasswordInput>
                  <InputField
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Şifreyi Onayla"
                    name="confirm_password"
                    id="confirm_password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <IconContainer onClick={toggleShowConfirmPassword}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </IconContainer>
                </PasswordInput>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {successMessage && (
                  <p style={{ color: "green" }}>{successMessage}</p>
                )}
              </PasswordField>
              <Button disabled={loading} onClick={handleChangePassword}>
                {loading ? "Loading..." : "Şifre değiştir"}
              </Button>
            </LowerBody>
          </PasswordContainer>
        </CardContain>
      </MainContainer>
    </>
  );
};

export default AdminChangePassword;
