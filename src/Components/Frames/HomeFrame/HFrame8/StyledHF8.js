import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  background-color: #eef1f9;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0px;
  gap: 5px;
`;
const TextContainer = styled.div`
  max-width: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  @media (max-width: 500px) {
    max-width: 300px;
  }
`;
const Heading = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 2.1rem;
  line-height: 1.7;
`;
const Description = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const CardHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;
  margin-top: 25px;
`;

export { MainContainer, TextContainer, Heading, Description, CardHolder };
