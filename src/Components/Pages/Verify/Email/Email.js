import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MainContainer,
  TextContainer,
  Heading,
  Text,
  Button,
  Picture,
  ErrorMessage,
  SuccessMessage,
} from "./StyledEmail";
import EmailPic from "../../../Images/Email.png";
import { useNavigate, useLocation } from "react-router-dom";

const Email = () => {
  const [emailFromStorage, setEmailFromStorage] = useState("");
  const [phoneNumberFromStorage, setPhoneNumberFromStorage] = useState("");
  const [usernameFromStorage, setUsernameFromStorage] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const phone_number = localStorage.getItem("phone");

    if (username && phone_number) {
      setUsernameFromStorage(username);
      setPhoneNumberFromStorage(phone_number);
    } else {
      setError("Username or phone number not found in storage.");
    }

    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");

    // if (username && token) {
    //   handleVerifyEmail(username, token);
    // } else {
    //   // setError("Invalid verification link.");
    // }
  }, [location]);

  const handleVerifyEmail = async (username, token) => {
    try {
      const verificationResult = await axios.post(
        "https://api.guvenlisatkirala.com/api/send-verification-email/",
        { username },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Basic ${token}`,
          },
        }
      );

      const sendOtpResponse = await axios.post(
        "https://api.guvenlisatkirala.com/api/send-otp/",
        { phone_number: phoneNumberFromStorage },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Basic ${token}`,
          },
        }
      );

      console.log("OTP Response:", sendOtpResponse);

      if (sendOtpResponse.data?.message === "OTP sent successfully.") {
        setMsg("OTP sent successfully.");
        setMsg("Email sent successfully.");
        // navigate("/otp");
      } else {
        setError("Failed to send OTP.");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        // setError(error.response.data.error || "Failed to verify email.");
      } else {
        // setError("Failed to verify email.");
      }
    }
  };

  return (
    <MainContainer>
      <TextContainer>
        <Heading>
          <span>Email </span>
          adresinizi doğrulayın
        </Heading>
        <Text>
          <span>{usernameFromStorage} </span>
          adresini kullanıcı olarak girdiniz. Lütfen aşağıdaki butona tıklayarak
          bu e-posta adresini doğrulayın
        </Text>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {msg && <SuccessMessage>{msg}</SuccessMessage>}
        <Button
          type="button"
          onClick={() => handleVerifyEmail(usernameFromStorage)}
        >
          Hesabınızı Doğrulayın
        </Button>
      </TextContainer>
      <Picture src={EmailPic} alt="EmailPic" />
    </MainContainer>
  );
};

export default Email;
