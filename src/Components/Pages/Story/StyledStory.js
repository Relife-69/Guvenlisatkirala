import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 150px;
  padding: 50px;
`;
const StoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 100px;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const PicContainer = styled.div`
  width: 400px;
  height: 290px;
  background-color: #7b2cbf;
  border-radius: 10px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  display: flex;
  max-width: 600px;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 390px;
  height: 280px;
  margin-right: 20px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Image2 = styled.img`
  padding: 15px 0px 0px 15px;
  width: 400px;
  height: 300px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Heading = styled.h1`
  font-weight: 600;
  font-size: 28px;
  margin: 0%;
  color: #7b2cbf;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 0%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export {
  MainContainer,
  StoryContainer,
  PicContainer,
  Image,
  RightContainer,
  Image2,
  Heading,
  Description,
};
