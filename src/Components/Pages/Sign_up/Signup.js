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
  SLabel,
  CheckBoxContainer2,
  LoginHeading,
  MsgContainer,
  InputHolder,
  ToggleContainer,
  ToggleSlider,
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
  const [isEmailSelected, setIsEmailSelected] = useState(true);
  const [isSmsSelected, setIsSmsSelected] = useState(true);
  const [role, setRole] = useState("standard");
  const [neighborhood, setNeighborHood] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
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
      address,
      neighbor_hood: neighborhood,
      district_city: city,
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
                type="text"
                placeholder="Adres"
                name="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <InputContain
                type="text"
                placeholder="İLÇE/ŞEHİR"
                name="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <InputContain
                type="text"
                placeholder="Komşu"
                name="neighborhood"
                value={neighborhood}
                onChange={(e) => setNeighborHood(e.target.value)}
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
            <MsgContainer>
              <Label>
                Tüm duyuru ve kampanyalardan ticari elektronik ileti yoluyla
                haberdar olmak istiyorum.
              </Label>
              <InputHolder>
                <ToggleContainer>
                  <SLabel
                    isSelected={!isEmailSelected}
                    onClick={() => setIsEmailSelected(false)}
                  >
                    Hayır
                  </SLabel>
                  <SLabel
                    isSelected={isEmailSelected}
                    onClick={() => setIsEmailSelected(true)}
                  >
                    Evet
                  </SLabel>
                  <ToggleSlider isSelected={isEmailSelected} />
                </ToggleContainer>
                <ToggleContainer>
                  <SLabel
                    isSelected={!isSmsSelected}
                    onClick={() => setIsSmsSelected(false)}
                  >
                    Hayır
                  </SLabel>
                  <SLabel
                    isSelected={isSmsSelected}
                    onClick={() => setIsSmsSelected(true)}
                  >
                    Evet
                  </SLabel>
                  <ToggleSlider isSelected={isSmsSelected} />
                </ToggleContainer>
              </InputHolder>
            </MsgContainer>
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
