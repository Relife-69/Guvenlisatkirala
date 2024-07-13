import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background-color: #eef1f9;
`;

export const Text = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 0%;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  border: none;
  background-color: #eef1f9;
  &:hover {
    background-color: white;
    border-bottom: 2px solid #7b2cbf;
  }
`;
export const Button2Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const Button2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  gap: 5px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
export const Text2 = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0%;
`;
export const SelectionContainer = styled.div`
  max-width: 970px;
  padding: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  border-radius: 8px;
  @media (max-width: 500px) {
    padding: 40px 0px;
    min-width: 310px;
    gap: 10px;
    border-radius: 0%;
  }
`;
export const Selection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Select = styled.select`
  display: flex;
  padding: 10px 45px 10px 10px;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.63px;
  margin: 0%;
  appearance: none;
  gap: 10px;
  height: 44px;
  border-radius: 6px;
`;
export const Option = styled.option`
  display: flex;
  /* height: 24px; */
  padding: 10px;
  align-items: center;
  justify-content: center;
  height: 44px;
`;
export const Drag = styled.div`
  right: 0%;
  width: 35px;
  position: absolute;
  height: 44px;
  border-radius: 0px 5px 5px 0px;
  color: white;
  background-color: #7b2cbf;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const SearchContainer = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 345px;
  @media (max-width: 500px) {
    width: 300px;
  }
`;
export const SearchIcon = styled.div`
  left: 0%;
  width: 45px;
  position: absolute;
  height: 44px;
  border-radius: 5px 0px 0px 5px;
  color: white;
  background-color: #7b2cbf;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const Search = styled.input`
  display: flex;
  padding: 0px 10px 0px 55px;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.63px;
  margin: 0%;
  appearance: none;
  gap: 10px;
  height: 44px;
  border-radius: 6px;
  background-color: #eef1f9;
  width: 100%;
`;
