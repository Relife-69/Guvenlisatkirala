import React from 'react'
import BCard from '../../../Card/BlogCard/BCard'
import { MainContainer, HeadingContainer, Heading, Description, CardContainer, Button } from './StyledHF6'
import Pic from '../../../Images/Blog.png'
import Icon from '../../../Images/Bicon.png'

const HF6 = () => {
  const cardsData = [
    {
      Img1: Pic,
      Head: "Is a Wealth Management...",
      Text: "Do you dream of using your financial passion to empower high-net-worth clients and secure their futures? If so, then wealth management might be the perfect fit for you...",
      Logo: Icon,
      PersonN: "Rayan",
      Time:"8 Mayıs 2024 . 3 dk okuma"
    },
    {
      Img1: Pic,
      Head: "Is a Wealth Management...",
      Text: "Do you dream of using your financial passion to empower high-net-worth clients and secure their futures? If so, then wealth management might be the perfect fit for you...",
      Logo: Icon,
      PersonN: "Rayan",
      Time:"8 Mayıs 2024 . 3 dk okuma"
    },
    {
      Img1: Pic,
      Head: "Is a Wealth Management...",
      Text: "Do you dream of using your financial passion to empower high-net-worth clients and secure their futures? If so, then wealth management might be the perfect fit for you...",
      Logo: Icon,
      PersonN: "Rayan",
      Time:"8 Mayıs 2024 . 3 dk okuma"
    },
    {
      Img1: Pic,
      Head: "Is a Wealth Management...",
      Text: "Do you dream of using your financial passion to empower high-net-worth clients and secure their futures? If so, then wealth management might be the perfect fit for you...",
      Logo: Icon,
      PersonN: "Rayan",
      Time:"8 Mayıs 2024 . 3 dk okuma"
    }
  ];

  return (
    <MainContainer>
      <HeadingContainer>
        <Heading>Bloglar</Heading>
        <Description>Alıcılar ve yatırımcılar için trendler ve perspektifler</Description>
      </HeadingContainer>
      <CardContainer>
      {cardsData.map((card, index) => (
        <BCard 
        key={index}
        Img1={card.Img1}
        Head={card.Head}
        Text={card.Text}
        Logo={card.Logo}
        PersonN={card.PersonN}
        Time={card.Time}
        />
          
        ))}
      </CardContainer>
      <Button>TÜM BLOGLARI GÖRÜNTÜLE</Button>
    </MainContainer>
  )
}

export default HF6
