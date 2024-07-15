import React, { useState } from "react";
import axios from "axios";
import {
  MainContainer,
  FormContainer,
  InputContainer,
  InputContain,
  Heading,
} from "./StyledAddUser";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const AddForntend = () => {
  const [employeeType, setEmployeeType] = useState("frontend_admin");
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [joinedAt, setJoinedAt] = useState("");
  const [unitname, setUnitname] = useState("");
  const [status, setStatus] = useState("");
  const [neighborhood, setNeighborHood] = useState("");
  const [address, setAddress] = useState("");
  const [userID, setUserID] = useState("103");
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      username: email, // Ensure the username is set to the email
      employee_type: employeeType,
      employee_name: employeeName,
      joined_at: joinedAt,
      address,
      neighbor_hood: neighborhood,
      district_city: city,
      status,
      user: userID,
      unit_name: unitname,
    };

    console.log("Submitting user:", user);

    try {
      const result = await axios.post(
        "https://api.guvenlisatkirala.com/api/admin/employees/create/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );

      console.log("API Response:", result.data);
      console.log("User information stored in localStorage");
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
        <Heading>Ön Uç Yöneticisi Ekle</Heading>
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
              type="text"
              placeholder="Birim Adı"
              name="unitname"
              value={unitname}
              onChange={(e) => setUnitname(e.target.value)}
            />
            <InputContain
              required
              type="text"
              placeholder="Durum"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            {/* <InputContain
              required
              type="text"
              placeholder="Katılım Tarihi"
              name="joinedAt"
              value={joinedAt}
              onChange={(e) => setJoinedAt(e.target.value)}
            /> */}
            <Button btntype="Main" sb text="Eklemek" type="submit" />
          </InputContainer>
        </form>
      </FormContainer>
    </MainContainer>
  );
};

export default AddForntend;
