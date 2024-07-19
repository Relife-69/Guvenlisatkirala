import styled from "styled-components";

export const LawyerContainer = styled.div`
  width: 500px;
  min-height: 80px;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: start;
  justify-content: start;
  background-color: white;
  flex-direction: column;
  gap: 30px;
`;
export const UpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;
export const UpperTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const LowerContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 5px;
  flex-direction: column;
`;
export const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  gap: 5px;
`;
export const TextHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
`;
export const NameContainer = styled.h1`
  font-size: 18px;
  font-weight: 600;
  margin: 0%;
`;
export const IconContainer = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
`;
export const TextContainer1 = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 5px;
`;
export const TextContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #7b2cbf;
`;
export const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  margin: 0%;
`;
export const Item = styled.h1`
  font-size: 14px;
  font-weight: 500;
  margin: 0%;
`;
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  background-color: #eef1f9;
  gap: 15%;
`;
export const CardContain = styled.div`
  padding: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const Humburger = styled.div`
  font-size: 50px;
  color: white;
  display: none;
  @media (max-width: 800px) {
    display: flex;
    position: absolute;
    top: 8px;
    left: 20px;
  }
`;
export const Heading = styled.h1`
  font-size: 28px;
  display: flex;
  font-weight: 700;
  margin: 0%;
  width: 800px;
  color: black;
`;
export const Search = styled.div`
  display: flex;
  min-height: 50px;
  flex-direction: column;
  gap: 10px;
`;
export const Label = styled.label`
  padding-top: 10px;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
`;
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 50px;
  background-color: white;
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Select = styled.select`
  padding: 10px;
  width: 330px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 14.63px;
  margin: 0%;
  appearance: none;
  gap: 10px;
  border-radius: 6px;
  border: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Option = styled.option`
  display: flex;
  /* height: 24px; */
  padding: 10px;
  align-items: center;
  justify-content: center;
  height: 44px;
`;
export const SearchIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #7b2cbf;
  border: none;
  border-radius: 0px 7px 7px 0px;
  color: white;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
