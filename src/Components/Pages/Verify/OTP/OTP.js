import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  MainContainer,
  OTPContainer,
  OTPInput,
  Heading,
  TextContainer,
  Text1,
  Text2,
  Input,
  Button,
  Picture,
} from "./StyledOTP";
import OTPImage from "../../../Images/OTP.png";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phone") || "+1-xxxx-xxx-xxx"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    const phone_number = localStorage.getItem("phone");
    if (phone_number) {
      setPhoneNumber(phone_number);
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://api.guvenlisatkirala.com/api/verify-otp/",
        {
          otp: otp.join(""),
        }
      );

      console.log("OTP verified successfully:", response.data);
      // Handle successful verification
      navigate("/success");
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError("OTP doğrulama başarısız oldu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://api.guvenlisatkirala.com/api/send-otp/",
        {
          phone_number: phoneNumber,
        }
      );
      console.log("OTP resent successfully:", response.data);
    } catch (err) {
      console.error("Error resending OTP:", err);
      setError("OTP yeniden gönderme başarısız oldu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <OTPContainer>
        <Heading>OTP Doğrulaması</Heading>
        <TextContainer>
          <Text1>
            Aldığınız <span>OTP</span>'yi girin
          </Text1>
          <Text2>{phoneNumber}</Text2>
        </TextContainer>
        <OTPInput>
          {otp.map((digit, index) => (
            <Input
              key={index}
              type="tel"
              maxLength={1}
              placeholder="-"
              name="OTP"
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </OTPInput>
        {error && (
          <TextContainer style={{ color: "red" }}>{error}</TextContainer>
        )}
        <TextContainer>
          <Text1>OTP alınmadı</Text1>
          <Text1 onClick={handleResendOtp} style={{ cursor: "pointer" }}>
            <span>Yeniden gönder</span>
          </Text1>
        </TextContainer>
        <Button onClick={handleVerifyOtp} disabled={loading}>
          {loading ? "Yükleniyor..." : "Onaylayın"}
        </Button>
      </OTPContainer>
      <Picture src={OTPImage} alt="OTP" />
    </MainContainer>
  );
};

export default OTP;
