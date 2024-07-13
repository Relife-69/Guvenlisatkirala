import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  background-color: #eef1f9;
`;
export const Container = styled.div`
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 25px;
  border: none;
  border-radius: 8px;
  background-color: white;
  padding: 30px;
`;
export const Heading = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #7b2cbf;
  margin: 0%;
`;
export const ComponentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;
export const Component = styled.div`
  width: 300px;
  min-height: 40px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: #eef1f9;
  border: none;
  padding: 0px 15px;
  border-radius: 8px;
`;
export const Component1 = styled.div`
  width: 300px;
  min-height: 40px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: white;
  border: none;
  border-radius: 8px;
  padding: 0px 15px;
`;
export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.07px;
  margin: 0%;
  max-width: 200px;
`;
export const Text2 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 14.63px;
  margin: 0%;

  span {
    color: #7b2cbf;
  }
`;
