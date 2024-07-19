import React, { useState, useEffect, useRef } from "react";
import {
  MainContainer,
  CardContain,
  CardContainer,
  Humburger,
  ButtonContainer,
  AcceptButton,
  DeclineButton,
} from "./StyledApprovedAds";
import Buycard from "../../Components/Card/BuyCard/Buycard";
import LawyerNavbar from "../LawyerNavbar/LawyerNavbar";
import LawyerSidebar from "../LawyerSidebar/LawyerSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ApprovedLawyerAads = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const productContainerRef = useRef(null);
  const navigate = useNavigate();
  const use = localStorage.getItem("user-role");
  useEffect(() => {
    if (use !== "lawyer") {
      navigate("/");
    }
  }, [navigate]);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  useEffect(() => {
    async function fetchAdvertisements() {
      try {
        const response = await axios.get(
          "https://api.guvenlisatkirala.com/api/advertisements/waiting-to-approve/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer  ${localStorage.getItem("access-token")}`,
            },
          }
        );
        console.log("API Response:", response.data);

        if (response.headers["content-type"].includes("application/json")) {
          const advertisements = response.data;
          console.log("Advertisements:", advertisements);

          // Transforming the data to match the required structure for the cards
          const transformedData = advertisements.map((ad) => ({
            id: ad.id,
            Pic: ad.images[0]?.image || " ",
            Pic1: ad.images[1]?.image || " ",
            Name: ad.dynamic_attributes.title,
            PPrice: ad.dynamic_attributes.price,
            Beds: ad.dynamic_attributes.rooms,
            Washs: ad.dynamic_attributes.bathrooms,
            SqArea: ad.dynamic_attributes.area_sqft,
            PArea: ad.dynamic_attributes.neighborhood,
            PCity: ad.location,
            UpTime: ad.created_at,
            Href: `/singleproperty/${ad.id}`,
          }));

          setCardsData(transformedData);
        } else {
          console.error("Expected JSON, but received HTML:", response.data);
        }
      } catch (error) {
        console.error("Error fetching advertisements:", error);
      }
    }

    fetchAdvertisements();
  }, []);
  const token = localStorage.getItem("access-token");
  console.log(token);
  const handleApprove = async (id) => {
    try {
      const response = await axios.post(
        `https://api.guvenlisatkirala.com/api/advertisements/${id}/approve/`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer   ${localStorage.getItem("access-token")}`,
          },
        }
      );
      console.log("Approve Response:", response.data);

      // Optionally, refresh the advertisements list
      setCardsData(
        cardsData.map((ad) =>
          ad.id === id
            ? { ...ad, is_approved_by_lawyer: true, status: "active" }
            : ad
        )
      );
    } catch (error) {
      console.error("Error approving advertisement:", error);
    }
  };

  const handleDecline = async (id) => {
    try {
      const response = await axios.post(
        `https://api.guvenlisatkirala.com/api/advertisements/${id}/disapprove/`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${localStorage.getItem("access-token")}`,
          },
        }
      );
      console.log("Decline Response:", response.data);
      // Optionally, refresh the advertisements list
      setCardsData(
        cardsData.map((card) =>
          card.id === id
            ? { ...card, is_approved_by_lawyer: false, status: "inactive" }
            : card
        )
      );
    } catch (error) {
      console.error("Error declining advertisement:", error);
    }
  };

  return (
    <>
      <LawyerNavbar />
      <MainContainer>
        <Humburger onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </Humburger>
        <LawyerSidebar showSideBar={showSideBar} />
        <CardContain ref={productContainerRef}>
          {cardsData.map((card, index) => (
            <CardContainer key={index}>
              <Buycard
                Pic={card.Pic}
                Pic1={card.Pic1}
                Name={card.Name}
                PPrice={card.PPrice}
                SqArea={card.SqArea}
                Beds={card.Beds}
                Washs={card.Washs}
                PArea={card.PArea}
                PCity={card.PCity}
                UpTime={new Date(card.UpTime).toLocaleString()}
                Href={card.Href} // Pass Href to Buycard
              />
              <ButtonContainer>
                <AcceptButton onClick={() => handleApprove(card.id)}>
                  Accept
                </AcceptButton>
                <DeclineButton onClick={() => handleDecline(card.id)}>
                  Decline
                </DeclineButton>
              </ButtonContainer>
            </CardContainer>
          ))}
        </CardContain>
      </MainContainer>
    </>
  );
};

export default ApprovedLawyerAads;
