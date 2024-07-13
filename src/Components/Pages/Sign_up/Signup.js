import React, { useState } from "react";
import axios from "axios";
import {
  MainContainer,
  FormContainer,
  PictureContainer,
  InputContainer,
  InputContain,
  Heading,
  ButtonContainer,
  ButtonContainer2,
  Heading2,
  CheckBox,
  Label,
  CheckBoxContainer2,
  LoginHeading,
} from "./Styledsignup";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Banner from "../../Banner/Banner";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptAgreement, setAcceptAgreement] = useState(false);
  const [role, setRole] = useState("standard");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const Sign_in = () => {
    navigate("/signin");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      username: email, // Ensure the username is set to the email
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      password: password,
      confirm_password: confirmPassword,
      accept_agreement: acceptAgreement,
      role,
    };

    console.log("Submitting user:", user);

    try {
      const result = await axios.post(
        "https://api.guvenlisatkirala.com/api/users/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", result.data);
      localStorage.setItem("user-info", JSON.stringify(result.data));
      localStorage.setItem("phone", result.data.phone_number);
      localStorage.setItem("username", result.data.username);
      console.log("User information stored in localStorage");
      navigate("/email");
    } catch (error) {
      console.error("Error response:", error.response || error.message);
      setError(error.response ? error.response.data.message : error.message);
      alert("E-posta veya numara zaten mevcut, Lütfen tekrar deneyin");
      // alert(result.data.username + "already exist");
    }
  };
  //     if (result.data) {
  //       try {
  //         const verificationResult = await axios.post(
  //           "https://api.guvenlisatkirala.com/api/send-verification-email/",
  //           { username: email },
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //               Accept: "application/json",
  //             },
  //           }
  //         );
  //         console.log("API Response:", verificationResult.data);
  //         if (
  //           verificationResult.data &&
  //           verificationResult.data.verification_url
  //         ) {
  //           // Store verification URL in localStorage
  //           localStorage.setItem(
  //             "verification_url",
  //             verificationResult.data.verification_url
  //           );
  //           localStorage.setItem("user-info", JSON.stringify(result.data));
  //           localStorage.setItem(
  //             "phone",
  //             JSON.stringify(result.data.phone_number)
  //           );

  //           console.log("User information stored in localStorage");

  //           // Extracting and storing the token in localStorage
  //           const verificationUrl = verificationResult.data.verification_url;
  //           const token = new URL(verificationUrl).searchParams.get("token");
  //           const username = new URL(verificationUrl).searchParams.get(
  //             "username"
  //           );
  //           localStorage.setItem("auth-token", token);
  //           localStorage.setItem("user-name", username);
  //           navigate("/email");
  //         } else {
  //           console.error(
  //             "Unexpected response format",
  //             verificationResult.data
  //           );
  //         }
  //       } catch (verificationError) {
  //         if (verificationError.response) {
  //           console.error(
  //             "Error verifying email:",
  //             verificationError.response.data
  //           );
  //           console.error(
  //             "Error response status:",
  //             verificationError.response.status
  //           );
  //           console.error(
  //             "Error response headers:",
  //             verificationError.response.headers
  //           );
  //         } else if (verificationError.request) {
  //           console.error("Error request data:", verificationError.request);
  //         } else {
  //           console.error("Error message:", verificationError.message);
  //         }
  //         console.error("Error config:", verificationError.config);
  //       }
  //     } else {
  //       console.error("Unexpected response format", result.data);
  //     }
  //   }
  //   catch (error) {
  //     if (error.response) {
  //       console.error("Error response data:", error.response.data);
  //       console.error("Error response status:", error.response.status);
  //       console.error("Error response headers:", error.response.headers);
  //     } else if (error.request) {
  //       console.error("Error request data:", error.request);
  //     } else {
  //       console.error("Error message:", error.message);
  //     }
  //     console.error("Error config:", error.config);
  //   }
  // };

  return (
    <>
      <Banner />
      <Navbar />
      <MainContainer>
        <FormContainer>
          <ButtonContainer>
            <Link to="/signup">
              <Button
                fb
                btntype="Main"
                text="Standart"
                value="standard"
                onClick={() => setRole("standard")}
              />
            </Link>
            <Link to="/lsign">
              <Button fb text="Avukat" />
            </Link>
          </ButtonContainer>
          <Heading>Yeni bir hesap oluştur</Heading>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <InputContain
                required
                type="text"
                placeholder="İsim"
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputContain
                required
                type="text"
                placeholder="Soyadı"
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <InputContain
                required
                type="email"
                placeholder="E-posta"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputContain
                required
                type="password"
                placeholder="Şifrenizi belirleyin"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputContain
                required
                type="password"
                placeholder="Şifreyi Onayla"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputContain
                required
                type="tel"
                placeholder="Telefon numarası ( Başında sıfır olmadan yazın )"
                name="phone_number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </InputContainer>
            <CheckBoxContainer2>
              <CheckBox
                required
                type="checkbox"
                id="checkAccept"
                name="accept_agreement"
                checked={acceptAgreement}
                onChange={(e) => setAcceptAgreement(e.target.checked)}
              />
              <Label>
                DİKKAT! Emlak danışmanları veya emlakçılar bu siteye üye
                olamazlar. Yayınlanan emlak ilanlarından herhangi biri Komisyon
                alamazsınız.{" "}
                <Link to="/trust">
                  {" "}
                  Lütfen Kullanım Koşulları, Üyelik Sözleşmesi ve Gizlilik
                  Koşulları Sözleşmelerini Okuyun
                </Link>
              </Label>
            </CheckBoxContainer2>
            <Button btntype="Main" sb text="Üye Ol" type="submit" />
          </form>
        </FormContainer>
        <PictureContainer>
          <LoginHeading>Zaten bir üye misiniz?</LoginHeading>
          <ButtonContainer2>
            <Button onClick={Sign_in} btntype="Main" tb text="Giriş Yap" />
          </ButtonContainer2>
        </PictureContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Signup;
