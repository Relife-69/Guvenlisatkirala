import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #eef1f9;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 800px;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  gap: 50px;
  padding: 20px 0px;
`;

const Design = styled.img`
  width: 290px;
  height: 290px;
  position: absolute;
  bottom: 0px;
  left: 13%;
  @media (max-width: 400px) {
    width: 250px;
    height: 250px;
  }
`;
const Design2 = styled.img`
  width: 290px;
  height: 290px;
  position: absolute;
  right: 13%;
  top: 0px;
  @media (max-width: 400px) {
    width: 250px;
    height: 250px;
  }
`;

const Card = styled.div`
  width: 320px;
  min-height: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: relative;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.3);
  gap: 20px;
  @media (max-width: 400px) {
    width: 250px;
  }
`;

const PicContainer = styled.div`
  width: 220px;
  height: 150px;
`;
const Pic = styled.img`
  width: 220px;
  height: 150px;
`;
const Heading = styled.h1`
  max-width: 240px;
  font-size: 22px;
  font-weight: 600;
  margin: 0%;
`;
const Text = styled.p`
  max-width: 230px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin: 0%;
  height: 34px;
`;

const Button = styled.button`
  max-width: 220px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  background-color: #7b2cbf;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export {
  MainContainer,
  Design,
  Card,
  PicContainer,
  Pic,
  Heading,
  Text,
  Button,
  Design2,
};
