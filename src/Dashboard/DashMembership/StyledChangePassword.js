import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  background-color: #eef1f9;
  gap: 40px;
`;
export const CardContain = styled.div`
  padding: 100px 0px 0px 10px;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 100px;
  flex-wrap: wrap;
`;
export const PasswordContainer = styled.div`
  height: 600px;
  display: flex;
  align-items: start;
  flex-direction: column;
`;
export const DeviceContainer = styled.div`
  width: 380px;
  height: 600px;
  display: flex;
  align-items: start;
  flex-direction: column;
`;
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  width: 450px;
  height: 50px;
  background-color: #7b2cbf;
  color: white;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;
export const LowerBody = styled.div`
  display: flex;
  width: 480px;
  height: 500px;
  flex-direction: column;
  padding-left: 30px;
  align-items: start;
  justify-content: space-around;
  background-color: white;
`;
export const PasswordField = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const PasswordInput = styled.div`
  width: 380px;
  height: 50px;
  border-radius: 8px;
  border: 3px solid #7b2cbf;
  display: flex;
`;
export const InputField = styled.input`
  width: 310px;
  border-radius: 8px;
  position: relative;
  padding-left: 10px;
  padding-right: 60px;
  border: none;
  font-size: 16px;
  font-weight: 400;

  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 0px 5px 5px 0px;
  align-items: center;
  justify-content: center;
  background-color: #7b2cbf;
  color: white;
  cursor: pointer;
`;
export const Button = styled.button`
  width: 380px;
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
export const Description = styled.p`
  max-width: 370px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
  margin: 0%;
`;
export const DevicesHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  width: 290px;
  height: 50px;
  background-color: #7b2cbf;
  color: white;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;
export const DevicesBox = styled.div`
  display: flex;
  width: 350px;
  height: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
`;
export const Device = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  padding: 10px;
  font-size: 22px;
  font-weight: 600;
  gap: 10px;
  color: #7b2cbf;
  border-bottom: 2px solid #7b2cbf;
`;
export const Button1 = styled.button`
  width: 300px;
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
export const Devices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Textcontiner = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
`;
export const Text = styled.p`
  font-size: 8px;
  font-weight: 600;
  margin: 0%;
  color: black;
`;
export const Detail = styled.p`
  font-size: 8px;
  font-weight: 400;
  margin: 0%;
  color: black;
`;
export const DetailContainer = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
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
