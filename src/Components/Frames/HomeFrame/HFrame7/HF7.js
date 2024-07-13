import React from "react";
import {
  MainContainer,
  PicContainer,
  Pic,
  TextContainer,
  Text,
  Download3,
  Heading,
  Download,
  Download2,
  DownloadPic,
  DownloadHeading,
  DownloadTextContainer,
  DownloadPara,
} from "./StyledHF7";
import Pice1 from "../../../Images/M1.png";
import Pice2 from "../../../Images/M2.png";
import Pice3 from "../../../Images/M3.png";

const HF7 = () => {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <Heading>Mobil Uygulamayı Alın</Heading>
          <Text>
            Yüzbinlerce güncel listede arama yapın Mükemmel evinizi ve
            gayrimenkulünüzü bulmak için güçlü filtreler yatırım. Özel mülkleri
            ve fırsatları bulun ve LOGO'ya özgüdür.
          </Text>
          <Download>
            <Download3>
              <DownloadPic src={Pice2} />
              <DownloadTextContainer>
                <DownloadHeading>Şuradan indirin</DownloadHeading>
                <DownloadPara>UYGULAMA MAĞAZASI</DownloadPara>
              </DownloadTextContainer>
            </Download3>
            <Download2>
              <DownloadPic src={Pice3} />
              <DownloadTextContainer>
                <DownloadHeading>Başla</DownloadHeading>
                <DownloadPara>OYUN MAĞAZASI</DownloadPara>
              </DownloadTextContainer>
            </Download2>
          </Download>
        </TextContainer>
        <PicContainer>
          <Pic src={Pice1} />
        </PicContainer>
      </MainContainer>
    </>
  );
};
export default HF7;
