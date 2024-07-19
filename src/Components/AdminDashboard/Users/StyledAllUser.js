import styled from "styled-components";

export const LawyerContainer = styled.div`
  width: 900px;
  min-height: 80px;
  display: flex;
  align-items: start;
  justify-content: start;
  background-color: white;
  flex-direction: column;
`;
export const UpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
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
  align-items: start;
  justify-content: center;
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
  color: black;
`;

export const HeadingContainer = styled.div`
  background-color: #7b2cbf;
  color: white;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  display: flex;
  height: 50px;
`;
export const UserContainer = styled.div`
  align-items: center;
  justify-content: space-around;
  width: 100%;
  display: flex;
  height: 50px;
`;
export const UserAdd = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 900px;
  display: flex;
  height: 50px;
  margin-bottom: 30px;
`;
export const HeadingText = styled.h1`
  font-size: 14px;
  font-weight: 500;
  margin: 0%;
  gap: 10px;
  cursor: pointer;
  display: flex;
  span {
    color: red;
  }
`;
export const HeadingActiveText = styled.h1`
  color: ${({ isActive }) => (isActive ? "green" : "red")};
  font-weight: bold;
  font-size: 14px;
  font-weight: 500;
  margin: 0%;
`;

export const AddButton = styled.button`
  width: 140px;
  height: 38px;
  padding: 6px 12px;
  gap: 8px;
  border-radius: 4px;
  background-color: #7b2cbf;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
