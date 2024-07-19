import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MainContainer,
  FormContainer,
  InputContainer,
  InputContain,
  Heading,
} from "./StyledAddUser";
import Button from "../../Button/Button";
import { useNavigate, useLocation } from "react-router-dom";

const EditDeveloper = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [joinedAt, setJoinedAt] = useState("");
  const [unitName, setUnitName] = useState("");
  const [status, setStatus] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.user) {
      const user = location.state.user;
      setEmployeeName(user.employee_name);
      setEmail(user.username);
      setJoinedAt(user.joined_at);
      setUnitName(user.unit_name);
      setStatus(user.status);
      setNeighborhood(user.neighbor_hood);
      setAddress(user.address);
      setCity(user.district_city);
    }
  }, [location.state]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      username: email,
      employee_name: employeeName,
      joined_at: joinedAt,
      address,
      neighbor_hood: neighborhood,
      district_city: city,
      status,
      unit_name: unitName,
    };

    const userId =
      location.state && location.state.user ? location.state.user.id : null;
    const apiUrl = `https://api.guvenlisatkirala.com/api/admin/employees/developer/${userId}/`;

    try {
      const result = await axios.put(apiUrl, user, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });

      console.log("API Response:", result.data);
      navigate("/frontenduser");
    } catch (error) {
      console.error("Error response:", error.response || error.message);
      if (error.response) {
        console.error("Error response data:", error.response.data);
      }
      setError(error.response ? error.response.data : error.message);
    }
  };

  return (
    <MainContainer>
      <FormContainer>
        <Heading>Küçük Partner Düzenle</Heading>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <InputContain
              required
              type="text"
              placeholder="Çalışan Adı"
              name="employeeName"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
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
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <InputContain
              type="text"
              placeholder="İlçe/Şehir"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <InputContain
              type="text"
              placeholder="Komşu"
              name="neighborhood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
            <InputContain
              required
              type="text"
              placeholder="Birim Adı"
              name="unitName"
              value={unitName}
              onChange={(e) => setUnitName(e.target.value)}
            />
            <InputContain
              required
              type="text"
              placeholder="Durum"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <InputContain
              type="text"
              placeholder="Katılım Tarihi"
              name="joinedAt"
              value={joinedAt}
              onChange={(e) => setJoinedAt(e.target.value)}
            />
            <Button btntype="Main" sb text="Güncelle" type="submit" />
          </InputContainer>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </FormContainer>
    </MainContainer>
  );
};

export default EditDeveloper;
