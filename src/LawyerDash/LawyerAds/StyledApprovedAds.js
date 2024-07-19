import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  background-color: #eef1f9;
`;

export const CardContain = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
  flex-direction: column;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const AcceptButton = styled.button`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  color: green;
  height: 50px;
  background-color: white;
  cursor: pointer;
`;
export const DeclineButton = styled.button`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  height: 40px;
  background-color: white;
  color: red;
  cursor: pointer;
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
export const Whatsapp = styled.img`
  width: 100px;
  height: 100px;
  position: fixed;
  right: 10px;
  bottom: 40px;
  text-align: end;
  align-items: end;
`;
