import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MainContainer,
  RightContainer,
  Pic,
  LeftContainer,
  TextContainer,
  Heading,
  Text,
  InputContainer,
  Input,
} from "./StyledPassword";
import Button from "../../../Button/Button";
import Pice from "../../../Images/Password.png";
import axios from "axios";

const Password = () => {
  const navigate = useNavigate();
  //   const { uidb64, token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const uidb64 = urlParams.get("uidb64");
  const token = urlParams.get("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `https://api.guvenlisatkirala.com/api/password-reset-confirm/${uidb64}/${token}/`,
        {
          new_password: password,
          confirm_new_password: confirmPassword,
        }
      );

      setSuccess("Password has been reset successfully.");
      setTimeout(() => {
        navigate("/signin"); // Redirect to login page or another appropriate page
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <LeftContainer>
        <TextContainer>
          <Heading>Yeni Şifre Girilsin mi?</Heading>
          <Text>Lütfen yeni şifrenizi aşağıya girin:</Text>
        </TextContainer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              type="password"
              placeholder="Yeni Şifre"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <Input
              type="password"
              placeholder="Şifreyi Onayla"
              name="confirm_password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </InputContainer>
          <Button
            btntype="Main"
            cb
            text={loading ? "Gönderiliyor..." : "Şifre güncelle"}
          />
        </form>
        <InputContainer>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </InputContainer>
      </LeftContainer>
      <RightContainer>
        <Pic src={Pice} />
      </RightContainer>
    </MainContainer>
  );
};

export default Password;
