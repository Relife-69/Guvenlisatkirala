import styled from "styled-components";

const MainContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 430px;
  flex-wrap: wrap;
  margin-top: 25px;
`;

const PicContainer = styled.div`
  width: 540px;
  height: 310px;
  @media (max-width: 550px) {
    width: 400px;
    height: 250px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
    height: 200px;
  }
`;
const Pic = styled.img`
  width: 540px;
  height: 310px;

  @media (max-width: 550px) {
    width: 400px;
    height: 250px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
    height: 200px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
  @media (max-width: 500px) {
    align-items: center;
  }
`;

const Heading = styled.h1`
  width: 170px;
  font-size: 22px;
  font-weight: 600;
  margin: 0%;
  @media (max-width: 400px) {
    min-width: 120px;
  }
`;
const Para = styled.p`
  width: 420px;
  font-size: 14px;
  font-weight: 400;
  margin: 0%;
  @media (max-width: 500px) {
    width: 300px;
  }
`;
const SearchContainer = styled.div`
  width: 320px;
  height: 41px;
  display: flex;
  background-color: whitesmoke;
  align-items: center;
  justify-content: space-around;
  padding: 0px 20px;
  @media (max-width: 500px) {
    width: 250px;
  }
`;

const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  color: black;
`;
const Input = styled.select`
  width: 260px;
  height: 41px;
  background-color: whitesmoke;
  border-radius: 5px 0px 5px 0px;
  border: none;
  font-size: 12px;
  font-weight: 300;
  /* appearance: none; */

  &:focus {
    outline: none;
    border: none;
  }
`;
const DropdownButton = styled.button`
  width: 100px;
  height: 41px;
  border: none;
  background: whitesmoke;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 360px;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  background-color: #fff;
`;

const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export {
  PicContainer,
  Pic,
  TextContainer,
  Heading,
  Para,
  SearchContainer,
  SearchIcon,
  Input,
  MainContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
};
