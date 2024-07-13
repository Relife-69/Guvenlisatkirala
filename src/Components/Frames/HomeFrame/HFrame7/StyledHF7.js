import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 430px;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 25px;
`;
const PicContainer = styled.div`
  width: 490px;
  height: 390px;
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;
const Pic = styled.img`
  width: 490px;
  height: 390px;
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;
const TextContainer = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 500px) {
    max-width: 300px;
    align-items: center;
    gap: 10px;
  }
`;
const Heading = styled.h1`
  max-width: 260px;
  font-size: 22px;
  font-weight: 600;
  @media (max-width: 500px) {
    margin: 0%;
  }
`;
const Text = styled.p`
  max-width: 390px;
  font-size: 14px;
  font-weight: 400;
  text-align: start;
  @media (max-width: 500px) {
    max-width: 300px;
    text-align: center;
    margin: 0%;
  }
`;
const Download = styled.div`
  max-width: 400px;
  min-height: 38px;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  @media (max-width: 500px) {
    max-width: 300px;
  }
`;
const Download2 = styled.div`
  max-width: 175px;
  min-height: 38px;
  background-color: #9d4edd;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 100px;
  }
`;
const Download3 = styled.div`
  max-width: 175px;
  min-height: 38px;
  background-color: black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  gap: 5px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100px;
  }
`;
const DownloadPic = styled.img`
  width: 18px;
  height: 18px;
`;
const DownloadHeading = styled.h1`
  max-width: 60px;
  min-height: 10px;
  font-size: 8px;
  font-weight: 400;
  margin: 0%;
  color: white;
`;
const DownloadPara = styled.p`
  max-width: 145px;
  min-height: 15px;
  font-size: 12px;
  font-weight: 400;
  margin: 0%;
  color: white;
`;
const DownloadTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;
export {
  MainContainer,
  PicContainer,
  Pic,
  TextContainer,
  Text,
  Heading,
  Download,
  Download2,
  DownloadPic,
  DownloadHeading,
  DownloadTextContainer,
  DownloadPara,
  Download3,
};
