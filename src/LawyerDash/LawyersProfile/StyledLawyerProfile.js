import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  background-color: #eef1f9;
  gap: 40px;
`;
export const CardContain = styled.div`
  padding: 100px 0px 0px 100px;
  width: 500px;
  display: flex;
  align-items: start;
  gap: 35px;
  flex-direction: column;
`;
export const Heading = styled.h1`
  width: 185px;
  height: 29px;
  margin: 0%;
  color: #7b2cbf;
  font-size: 24px;
  font-weight: 700;
`;
export const ProfileContainer = styled.div`
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  flex-direction: column;
`;
export const ProfilePic = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #7b2cbf;
`;
export const NameContainer = styled.div`
  width: 450px;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 25px;
`;
export const NameContainer2 = styled.div`
  width: 450px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
`;
export const Holder = styled.div`
  width: 210px;
  align-items: start;
  justify-content: start;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
export const Input1 = styled.input`
  width: 190px;
  height: 30px;
  border-radius: 8px;
  border: 1px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.5px;
`;
export const Input2 = styled.input`
  width: 430px;
  height: 30px;
  border-radius: 8px;
  border: 1px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.5px;
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin: 0%;
`;

export const Button = styled.button`
  width: 450px;
  height: 50px;
  border-radius: 8px;
  border: 1px;
  background-color: #7b2cbf;
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.94px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #7b2cbf;
    border: 2px solid #7b8cbf;
  }
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
