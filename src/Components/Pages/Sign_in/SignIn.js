import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  MainContainer,
  FormContainer,
  InputContainer,
  InputContain,
  Heading,
  Heading2,
  CheckBoxContainer2,
  Label1,
} from "./StyledSignin";
import Button from "../../Button/Button";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = {
        username: email,
        password,
      };

      console.log("Submitting user:", user);

      const loginResponse = await axios.post(
        "https://api.guvenlisatkirala.com/api/login/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Login Response:", loginResponse.data);

      const token = loginResponse.data.access;
      const role = loginResponse.data.role;
      const username = loginResponse.data.username;
      const phone_number = loginResponse.data.phone_number;
      const is_approved_by_government =
        loginResponse.data.is_approved_by_government;


      if (token && role) {
        localStorage.setItem("access-token", token);
        localStorage.setItem("user-role", role);
        localStorage.setItem("username", username);
        localStorage.setItem("phone_number", phone_number);
        localStorage.setItem(
          "is_approved_by_government",
          is_approved_by_government
        );
        setMsg("Login success.");
        alert("Login Successful");
        navigate("/");
      } else {
        setMsg("Unexpected response format");
        console.error("Unexpected response format", loginResponse.data);
      }
    } catch (error) {
      if (error.response) {
        alert(
          "Giriş başarısız oldu. Lütfen kimlik bilgilerinizi veya şifrenizi kontrol edin."
        );
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
        setMsg(
          "Giriş başarısız oldu. Lütfen kimlik bilgilerinizi veya şifrenizi kontrol edin."
        );
      } else if (error.request) {
        console.error("Error request data:", error.request);
        setMsg("No response from the server. Please try again later.");
      } else {
        console.error("Error message:", error.message);
        setMsg("An error occurred. Please try again.");
      }
      console.error("Error config:", error.config);
    }
  };

  return (
    <>
      <Navbar />
      <MainContainer>
        <FormContainer>
          <Heading>Giriş Yap</Heading>
          <form onSubmit={handleLogin}>
            <InputContainer>
              <InputContain
                type="email"
                placeholder="E-posta"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputContain
                type="password"
                placeholder="Şifre"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CheckBoxContainer2>
                <Label1>
                  <Link to="/forget">Şifrenizi mi unuttunuz?</Link>
                </Label1>
              </CheckBoxContainer2>
            </InputContainer>
            <Button btntype="Main" cb text="GİRİŞ YAP" type="submit" />
          </form>
          {msg && <p>{msg}</p>}
        </FormContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Signin;
