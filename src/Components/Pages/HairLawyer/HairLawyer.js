import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Header/Navbar/Navbar";
import {
  Button,
  Description1,
  Description2,
  Heading1,
  HeadingContainer,
  Lawyerflex,
  LeftContainer,
  Logo,
  Maincontainer,
  RightContainer,
  SearchContainer,
  SearchLawyer,
  Heading2,
  SearchInput,
  DropdownContainer,
  Option,
  LawyerContainer,
} from "./StyledHairLawyer";
import { FaSearch } from "react-icons/fa";
import Law from "../../Images/Lawyer.png";
import Law2 from "../../Images/flex.png";
import Banner from "../../Banner/Banner";

const HairLawyer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [lawyers, setLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  useEffect(() => {
    async function fetchLawyers() {
      try {
        const response = await axios.get(
          "https://api.guvenlisatkirala.com/api/lawyers/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("API Response:", response.data);
        setLawyers(response.data);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    }

    fetchLawyers();
  }, []);

  const filteredOptions = lawyers.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const selected = lawyers.find(
      (user) => `${user.first_name} ${user.last_name}` === option
    );
    setSelectedLawyer(selected);
    setIsOpen(false);
  };

  const submitLawyer = async () => {
    if (selectedLawyer) {
      try {
        const response = await axios.post(
          "https://api.guvenlisatkirala.com/api/select-lawyer/",
          { lawyer_id: selectedLawyer.id },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("API Response:", response.data);
      } catch (error) {
        console.error("Error submitting lawyer:", error);
      }
    } else {
      console.error("No lawyer selected");
    }
  };

  return (
    <>
      <Banner />
      <Navbar />
      <Maincontainer>
        <LeftContainer>
          <Description1>
            SEÇTİĞİNİZ AVUKAT İLANINIZI ONAYLADIKTAN SONRA İLANININIZ
            YAYINLANACAKTIR.
          </Description1>
          <LawyerContainer>
            <SearchLawyer>
              <Heading1>Bir Avukat Seçin</Heading1>
              <SearchContainer onClick={() => setIsOpen(!isOpen)}>
                <Logo src={Law}></Logo>
                <SearchInput
                  type="text"
                  value={selectedOption}
                  placeholder="George J....."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setSelectedOption(e.target.value);
                  }}
                  onFocus={() => setIsOpen(true)}
                />
                <FaSearch />
              </SearchContainer>
            </SearchLawyer>
            {isOpen && (
              <DropdownContainer>
                {filteredOptions.map((user, index) => (
                  <Option
                    key={index}
                    onClick={() =>
                      handleOptionClick(`${user.first_name} ${user.last_name}`)
                    }
                  >
                    {`${user.first_name} ${user.last_name}`}
                  </Option>
                ))}
              </DropdownContainer>
            )}
          </LawyerContainer>
          <Button onClick={submitLawyer}>TAMAMLA</Button>
        </LeftContainer>
        <RightContainer>
          <HeadingContainer>
            <Heading2>AVUKAT</Heading2>
            <Description2>
              İLANINIZIN YAYINLANMASI İÇİN SEÇTİĞİNİZ AVUKATIN ONAYLAMASI
              GEREKİR.
            </Description2>
          </HeadingContainer>
          <Lawyerflex src={Law2} />
        </RightContainer>
      </Maincontainer>
    </>
  );
};

export default HairLawyer;
