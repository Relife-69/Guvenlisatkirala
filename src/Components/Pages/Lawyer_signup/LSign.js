import React, { useState } from "react";
import axios from "axios";
import {
  MainContainer,
  FormContainer,
  PictureContainer,
  InputContainer,
  StyledInput,
  Heading,
  ButtonContainer,
  ButtonContainer2,
  Heading2,
  LoginHeading,
  CheckBoxContainer,
  CheckBox,
  Label,
} from "./StyledLawyerSign";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";

const LSign = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [barAssociationName, setBarAssociationName] = useState("");
  const [barAssociationRegistryNumber, setBarAssociationRegistryNumber] =
    useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptAgreement, setAcceptAgreement] = useState(false);
  const [role, setRole] = useState("lawyer");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const Sign_in = () => {
    navigate("/signin");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const luser = {
      first_name: firstName,
      last_name: lastName,
      username: email,
      address,
      district_city: city,
      password,
      confirm_password: confirmPassword,
      bar_association_name: barAssociationName,
      bar_association_registry_number: barAssociationRegistryNumber,
      phone_number: phoneNumber,
      accept_agreement: acceptAgreement,
      role,
    };

    console.log("Submitting user:", luser);

    try {
      const result = await axios.post(
        "https://api.guvenlisatkirala.com/api/lawyers/",
        luser,
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
      <Navbar />
      <MainContainer>
        <FormContainer>
          <ButtonContainer>
            <Link to="/signup">
              <Button fb text="Standart" />
            </Link>
            <Link to="/lsign">
              <Button
                fb
                btntype="Main"
                text="Avukat"
                value="lawyer"
                onClick={() => setRole("lawyer")}
              />
            </Link>
          </ButtonContainer>

          <Heading>Yeni bir hesap oluştur</Heading>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <StyledInput
                type="text"
                placeholder="İsim"
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <StyledInput
                type="text"
                placeholder="Soyadı"
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <StyledInput
                type="email"
                placeholder="E-posta"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <StyledInput
                type="text"
                placeholder="Adres"
                name="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <StyledInput
                type="text"
                placeholder="İLÇE/ŞEHİR"
                name="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <StyledInput
                type="password"
                placeholder="Şifrenizi belirleyin"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <StyledInput
                type="password"
                placeholder="Şifreyi Onayla"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <StyledInput
                type="text"
                placeholder="Baro Adı"
                name="BarName"
                value={barAssociationName}
                onChange={(e) => setBarAssociationName(e.target.value)}
              />
              <StyledInput
                type="text"
                placeholder="Baro Sicil numarası"
                name="BarRegNumber"
                value={barAssociationRegistryNumber}
                onChange={(e) =>
                  setBarAssociationRegistryNumber(e.target.value)
                }
              />
              <Label>Numaranızı ülke kodu olmadan girin</Label>
              <StyledInput
                type="tel"
                placeholder="Telefon numarası ( Başında sıfır olmadan yazın )"
                name="phone_number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </InputContainer>
            <CheckBoxContainer>
              <CheckBox
                type="checkbox"
                id="checkAccept"
                name="accept_agreement"
                checked={acceptAgreement}
                onChange={(e) => setAcceptAgreement(e.target.checked)}
              />
              <Label>
                Türkiye Barolar Birliğinden avukat olduğunuz onaylandıktan sonra
                cep telefonunuza ve e-mail adresinize mesaj gönderilecektir.
                Üyelik sözleşmesini okudum ve kabul ediyorum.
              </Label>
            </CheckBoxContainer>
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

export default LSign;
