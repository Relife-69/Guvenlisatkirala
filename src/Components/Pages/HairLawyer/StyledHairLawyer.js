import styled from "styled-components";

export const Maincontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: #eef1f9;
  padding: 150px 0px;
  flex-wrap: wrap;
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: normal;
  justify-content: center;
  gap: 140px;
  flex-direction: column;
  padding-bottom: 20px;
`;
export const Description1 = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
  text-align: left;
  max-width: 435px;
  @media (max-width: 800px) {
    text-align: center;
  }
  @media (max-width: 400px) {
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Heading1 = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 34.13px;
  text-align: left;
  @media (max-width: 800px) {
    text-align: center;
  }
  @media (max-width: 400px) {
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Button = styled.button`
  width: 381px;
  height: 72px;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.26px;
  background-color: #7b2cbf;
  color: white;
  margin-left: 50px;
  @media (max-width: 400px) {
    width: 300px;
    margin: 0%;
  }
`;
export const SearchContainer = styled.div`
  width: 490px;
  height: 85px;
  border-radius: 21px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: white;
  @media (max-width: 500px) {
    width: 300px;
  }
`;
export const SearchIcon = styled.div`
  width: 90px;
  height: 85px;
  border-radius: 0px 22px 21px 0px;
  background-color: #7b2cbf;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  font-weight: 600;
  @media (max-width: 400px) {
    width: 50px;
    font-size: 24px;
  }
`;
export const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  margin-left: 10px;
  @media (max-width: 400px) {
    width: 40px;
    height: 40px;
  }
`;
export const SearchInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 85px;
  width: 310px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24.59px;
  text-align: left;
  appearance: none;
  background: white;
  padding-left: 10px;
  &:focus {
    border: none;
    outline: none;
  }
  @media (max-width: 500px) {
    width: 180px;
  }
`;
export const LawyerContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const DropdownContainer = styled.div`
  width: 490px;
  max-height: 200px;
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
export const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  &:hover {
    background: #f0f0f0;
  }
`;
export const SearchLawyer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 20px;
  flex-direction: column;
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Heading2 = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 34.13px;
  color: #7b2cbf;
  margin: 0%;
  @media (max-width: 400px) {
    width: 300px;
  }
`;
export const Description2 = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.94px;
  margin: 0%;
  @media (max-width: 400px) {
    width: 300px;
  }
`;
export const Lawyerflex = styled.img`
  width: 830px;
  height: 550px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
