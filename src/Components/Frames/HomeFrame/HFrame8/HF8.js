import React from 'react';
import Card2 from '../../../Card/Card2/Card2';
import { MainContainer, TextContainer, Heading, Description, CardHolder } from './StyledHF8';
import Pic from '../../../Images/3.png';

const HF8 = () => {
  // Define an array of objects containing data for each card
  const cardsData = [
    {
      Pict: Pic,
      Text: "Roshan Apna Ghar, Devlet tarafından yönetilen bir girişimdir Pakistan Merkez Bankası (SBP), krizi hafifletmeyi hedefliyor Dünya çapında Turkey diasporası. Şema Roshan'ın tüm müşterilerinin kullanımına açıktır Dijital Hesap (RDA)",
      Desc: "Devamını oku",
      Link: "/"
    },
    {
      Pict: Pic,
      Text: "Roshan Apna Ghar, Devlet tarafından yönetilen bir girişimdir Pakistan Merkez Bankası (SBP), krizi hafifletmeyi hedefliyor Dünya çapında Turkey diasporası. Şema Roshan'ın tüm müşterilerinin kullanımına açıktır Dijital Hesap (RDA)",
      Desc: "Devamını oku",
      Link: "/"
    },
    {
      Pict: Pic,
      Text: "Roshan Apna Ghar, Devlet tarafından yönetilen bir girişimdir Pakistan Merkez Bankası (SBP), krizi hafifletmeyi hedefliyor Dünya çapında Turkey diasporası. Şema Roshan'ın tüm müşterilerinin kullanımına açıktır Dijital Hesap (RDA)",
      Desc: "Devamını oku",
      Link: "/"
    }
  ];

  return (
    <MainContainer>
      <TextContainer>
        <Heading>Olaylar</Heading>
        <Description>En iyi karşılanan kampanyalarımızdan bazılarının manzarasında gezinin!</Description>
      </TextContainer>
      <CardHolder>
        {/* Map over the cardsData array and render a Card2 component for each object */}
        {cardsData.map((card, index) => (
          <Card2
            key={index}
            Pict={card.Pict}
            Text={card.Text}
            Desc={card.Desc}
            Link={card.Link}
          />
        ))}
      </CardHolder>
    </MainContainer>
  );
};

export default HF8;
