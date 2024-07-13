import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 70vh;
  background-image: ${({ background }) => background};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Upper = styled.ul`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  text-align: start;
  @media (max-width: 1500px) {
    max-width: 800px;
  }
  @media (max-width: 1000px) {
    max-width: 600px;
  }
  @media (max-width: 700px) {
    max-width: 500px;
  }
  @media (max-width: 500px) {
    max-width: 400px;
  }
`;

const Text = styled.li`
  font-size: 30px;
  font-weight: 600;
  color: white;
  text-decoration: dotted;
  @media (max-width: 1500px) {
    max-width: 800px;
    font-size: 24px;
    font-weight: 500;
  }
  @media (max-width: 1000px) {
    max-width: 600px;
    font-size: 18px;
    font-weight: 400;
  }
  @media (max-width: 700px) {
    max-width: 500px;
    font-size: 14px;
    font-weight: 300;
  }
  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? "white" : "rgba(255, 255, 255, 0.5)"};
  margin: 0 5px;
  cursor: pointer;
`;

export { MainContainer, Upper, Text, DotContainer, Dot };
