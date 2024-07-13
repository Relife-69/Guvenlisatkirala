import React from 'react';
import Buycard from '../../../Card/BuyCard/Buycard';
import { MainContainer ,CardContainer} from './StyledBF1';
import Slider from 'react-slick';
import CardPic from '../../../Images/Buy.png';
import CardPic1 from '../../../Images/CardImage.png';

const BF1 = () => {
    const cardsData = [
        {
            Pic: CardPic,
            Pic1: CardPic1,
            Name: "Villa Boğaz",
            PPrice: "50,000",
            Beds: "2",
            Washs: "2",
            SqArea: "7 Marla",
            PArea: "1-10",
            PCity: "Istanbul",
            UpTime: "3 saat önce eklendi"
        },
        {
            Pic: CardPic,
            Pic1: CardPic1,
            Name: "Villa Boğaz",
            PPrice: "50,000",
            Beds: "2",
            Washs: "2",
            SqArea: "7 Marla",
            PArea: "1-10",
            PCity: "Istanbul",
            UpTime: "3 saat önce eklendi"
        },
        {
            Pic: CardPic,
            Pic1: CardPic1,
            Name: "Villa Boğaz",
            PPrice: "50,000",
            Beds: "2",
            Washs: "2",
            SqArea: "7 Marla",
            PArea: "1-10",
            PCity: "Istanbul",
            UpTime: "3 saat önce eklendi"
        },
        {
            Pic: CardPic,
            Pic1: CardPic1,
            Name: "Villa Boğaz",
            PPrice: "50,000",
            Beds: "2",
            Washs: "2",
            SqArea: "7 Marla",
            PArea: "1-10",
            PCity: "Istanbul",
            UpTime: "3 saat önce eklendi"
        },
        {
            Pic: CardPic,
            Pic1: CardPic1,
            Name: "Villa Boğaz",
            PPrice: "50,000",
            Beds: "2",
            Washs: "2",
            SqArea: "7 Marla",
            PArea: "1-10",
            PCity: "Istanbul",
            UpTime: "3 saat önce eklendi"
        },
        {
            Pic: CardPic,
            Pic1: CardPic1,
            Name: "Villa Boğaz",
            PPrice: "50,000",
            Beds: "2",
            Washs: "2",
            SqArea: "7 Marla",
            PArea: "1-10",
            PCity: "Istanbul",
            UpTime: "3 saat önce eklendi"
        },
    ];
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    return (
        <MainContainer>
       <Slider {...settings}>
                {cardsData.map((card, index) => (
                    <CardContainer key={index}>
                        <Buycard
                            Pic={card.Pic}
                            Pic1={card.Pic1}
                            Name={card.Name}
                            PPrice={card.PPrice}
                            SqArea={card.SqArea}
                            Beds={card.Beds}
                            Washs={card.Washs}
                            PArea={card.PArea}
                            PCity={card.PCity}
                            UpTime={card.UpTime}
                        />
                    </CardContainer>
                ))}
            </Slider>
        </MainContainer>
    );
};

export default BF1;
