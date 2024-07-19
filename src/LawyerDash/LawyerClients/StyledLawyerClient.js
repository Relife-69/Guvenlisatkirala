import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  background-color: #eef1f9;
  gap: 15%;
`;
export const CardContain = styled.div`
  padding: 50px;
  max-width: 800px;
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
export const SearchHolder = styled.div`
  width: 800px;
  height: 120px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  background-color: white;
`;
export const SearchContainer = styled.div`
  background-color: #eef1f9;
  width: 320px;
  height: 45px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;
export const SearchInput = styled.input`
  width: 260px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #eef1f9;
  &:focus {
    outline: none;
    border: none;
  }
  &:active {
    outline: none;
  }
`;
export const SearchIcon = styled.div`
  width: 40px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  border-radius: 0px 6px 6px 0px;
  color: white;
  background-color: #7b2cbf;
`;
export const ArrowIcon = styled.div`
  width: 40px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  border-radius: 0px 6px 6px 0px;
  color: white;
  background-color: #7b2cbf;
`;
export const FilterContainer = styled.div`
  width: 150px;
  height: 45px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 1px solid #7b2cbf;
  background-color: white;
  padding-left: 5px;
`;
export const Filter = styled.select`
  width: 110px;
  height: 45px;
  display: flex;
  align-items: center;
  border: none;
  appearance: none;
  background-color: white;
  option {
    width: 150px;
    min-height: 45px;
    background-color: white;
  }
  &:focus {
    outline: none;
    border: none;
  }
  &:active {
    outline: none;
  }
`;
export const LawyerContainer = styled.div`
  width: 800px;
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
  width: 780px;
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

export const Whatsapp = styled.img`
  width: 100px;
  height: 100px;
  position: fixed;
  right: 10px;
  bottom: 40px;
  text-align: end;
  align-items: end;
`;
