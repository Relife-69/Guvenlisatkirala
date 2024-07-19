import React, { useState } from "react";
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
  Return,
  ReturnLink,
  FormContaienr,
} from "./StyledForget";
import Button from "../../Button/Button";
import Pice from "../../Images/Forget.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Forget = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const user = {
        username: email,
      };

      console.log("Submitting user:", user);
      const response = await axios.post(
        "https://api.guvenlisatkirala.com/api/password-reset/",
        user
      );
      console.log("Api-response", response);
      alert(response.data.message);
      setSuccess("Password reset email has been sent.");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  const Sign_in = () => {
    navigate("/signin");
  };

  return (
    <MainContainer>
      <LeftContainer>
        <TextContainer>
          <Heading>Şifreni mi unuttun?</Heading>
          <Text>Lütfen E-posta Adresinizi aşağıya girin:</Text>
        </TextContainer>
        <FormContaienr onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="E-posta Adresi"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Button
            btntype="Main"
            cb
            text={loading ? "Gönderiliyor..." : "Şifreyi yenile"}
          />
        </FormContaienr>
        <InputContainer>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
          <Return>
            <ReturnLink onClick={Sign_in}>Oturum Açmaya Geri Dön</ReturnLink>
          </Return>
        </InputContainer>
      </LeftContainer>
      <RightContainer>
        <Pic src={Pice}></Pic>
      </RightContainer>
    </MainContainer>
  );
};

export default Forget;
