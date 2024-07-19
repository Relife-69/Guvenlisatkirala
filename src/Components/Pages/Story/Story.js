import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import {
  MainContainer,
  StoryContainer,
  PicContainer,
  Image,
  RightContainer,
  Image2,
  Heading,
  Description,
} from "./StyledStory";
import Icon from "../../Images/Story.png";
import Back from "../../Images/Story1.png";
import Pic from "../../Images/7.png";
import Pic1 from "../../Images/8.png";
import ExtraFrame from "../../Frames/ExtraFrame/ExtraFrame";

const Story = () => {
  return (
    <>
      <Navbar />
      <ExtraFrame Contuct={Back} Head="BİZİM HİKAYEMİZ" Para="Hakkımızda" />
      <MainContainer>
        <StoryContainer>
          <PicContainer>
            <Image2 src={Icon}></Image2>
          </PicContainer>
          <RightContainer>
            <Heading>Vizyonumuz</Heading>
            <Description>
              Tüm Emlak işlemlerinde GÜVEN VE ŞEFFAFLIK sağlamak. Halkımızı
              yüksek emlak komisyonlarından korumak. Çok daha kaliteli bir
              hizmeti %70 daha uygun fiyat ile sunmak.
            </Description>
          </RightContainer>
        </StoryContainer>
        <StoryContainer>
          <RightContainer>
            <Heading>GUVENLİSATKİRALA Ailemiz</Heading>
            <Description>
              Kendini adamış, coşkulu bir ekip olmadan başarı mümkün olmazdı
              profesyonellerden oluşan bir ekip olarak her alandan en iyi
              insanları bir araya getirdik. Ekip üyelerimizin her biri, bu
              şartların yerine getirilmesinde hayati bir rol oynamaktadır.
              GUVENLİSATKİRALA rüyası, kolektif misyona inanan gerçek bir emlak
              devrimi.
            </Description>
          </RightContainer>
          <PicContainer>
            <Image src={Pic}></Image>
          </PicContainer>
        </StoryContainer>
        <StoryContainer>
          <PicContainer>
            <Image2 src={Pic1}></Image2>
          </PicContainer>
          <RightContainer>
            <Heading>Sonuçlarımız</Heading>
            <Description>
              guvenlisatkirala'nın temeli kapsamlı araştırmalar sonucunda
              atıldı. Türkiye'deki gayrimenkul sektörünün dinamiklerini
              değiştirmeye geldik. Güvenli ve şeffaf mülkiyet işlemleri sağlayan
              bir ürün geliştirmek ve sonuç odaklı karlı anlaşmalar. Gayrimenkul
              almak, satmak, kiralamak, yatırım yapmak veya geliştirmek isteyen
              herkes artık tüm işlemlerini hukuki güvence ile yapacaktır.
            </Description>
          </RightContainer>
        </StoryContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Story;
