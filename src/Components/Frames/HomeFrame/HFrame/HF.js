import React, { useState, useEffect } from "react";
import { MainContainer, Upper, Text, DotContainer, Dot } from "./StyledHF"; // assuming you'll create a styled component for dots
import Pic1 from "../../../Images/Home1.png";
import Pic2 from "../../../Images/Home2.png";

const HF = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: Pic1,
      texts: [
        "Emlak sahipleri istediği kiracı özelliğini kendi seçecek.",
        "Kiracılar avukatlar aracılığıyla kiralamak istedikleri emlak ile ilgili her şeyi şeffaf bir şekilde ve güvenle öğrenecekler.",
        "Emlak kiralamak veya satın almak için artık fahiş komisyon ödemek zorunda kalmayacaksınız. Emlak alımında toplamda %0.6 ve kiralamada kira bedelinin toplamda %30'unu ödeyeceksiniz.",
        "Tüm alım-satım ve kiralama işlemlerinde avukatlar her iki tarafın hakkını koruyacak sözleşmeler yapacak.",
      ],
    },
    {
      image: Pic2,
      texts: [
        "Avukat kira sözleşmesi yapabilir mi Evet, Kira sözleşmesinin vekâleten yapılması mümkündür. Bununla beraber kiraya veren bir şeyin kiralanması konusunda üçüncü bir kişiye temsil yetkisi verilebilmektedir. Fakat vekilin kira sözleşmesi yapması için yazılı bir vekâletnameye ihtiyacı yoktur. Danıştay 8. Dairesi, 2013/2249 E. – 2016/1372 K. numaralı kararıyla;",
        "Avukatlar tarafından Avukatlık Kanununun 56/5 maddesi uyarınca düzenlenen yetki belgesinin vekâletname hükmünde olduğu, vekâletname hükmünde olan bu yetki belgesinin tüm yargı mercileri ile resmi ve özel kişi, kurum ve kuruluşlar için hukuken vekâletname işlev ve etkisini taşıdığı (…)",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <MainContainer background={`url(${slides[currentSlide].image})`}>
      <Upper>
        {slides[currentSlide].texts.map((text, index) => (
          <Text key={index}>{text}</Text>
        ))}
      </Upper>
      <DotContainer>
        {slides.map((slide, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
    </MainContainer>
  );
};

export default HF;
