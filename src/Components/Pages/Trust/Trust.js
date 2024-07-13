import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import {
  MainContainer,
  ContextContainer,
  Heading,
  HeadingContainer,
  Heading1,
  IconContainer,
  Description,
  DiscriptionContainer,
} from "./StyledTrust";
import { IoGlasses } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { SiWechat } from "react-icons/si";
import Pic from "../../Images/Ai.png";
import ExtraFrame from "../../Frames/ExtraFrame/ExtraFrame";

const Trust = () => {
  return (
    <>
      <Navbar />
      <ExtraFrame Contuct={Pic} />
      <MainContainer>
        <ContextContainer>
          <Heading>
            Emlak İşlemlerinde Güven ve Verimlilik: Yapay Zekâ Destekli
            Özelliklerimiz
          </Heading>
          <Description>
            guvenlisatkirala.com olarak emlak işlemlerinin doğruluğunu ve
            güvenliğini artırmak, kullanıcı deneyimini iyileştirmek ve
            platformdaki işlemleri daha verimli hale getirmek için yapay zekâ
            teknolojilerini kullanıyoruz. İşte sunduğumuz yapay zekâ destekli
            özellikler:
          </Description>
          <HeadingContainer>
            <IconContainer>
              <IoGlasses />
            </IconContainer>
            <Heading1>3 Boyutlu Sanal Tur ve Mimari Krokiler</Heading1>
          </HeadingContainer>
          <Description>
            Hayalinizdeki evi sanal olarak gezmek artık mümkün! Yapay zekâ
            modelimiz emlak ilanlarındaki fotoğrafları kullanarak mülklerin iç
            mekânlarını üç boyutlu olarak oluşturur ve mimari krokilerle
            destekler. Bu sayede evin içinde sanal bir tur atabilir, odaların
            boyutlarını ve yerleşimlerini detaylıca inceleyebilirsiniz. Hiçbir
            detayı kaçırmadan oturduğunuz yerden evinizi keşfedin ve en doğru
            kararı verin. Bu özellik mülk seçim sürecinizi hem keyifli hem de
            pratik hale getiriyor.
          </Description>
          <HeadingContainer>
            <IconContainer>
              <FaSearch />
            </IconContainer>
            <Heading1>Otomatik İlan Analizi ve Sahte İlan Tespiti</Heading1>
          </HeadingContainer>
          <Description>
            Yapay zekâ sistemimiz kullanıcılar tarafından eklenen ilanların
            doğruluğunu ve eksiksizliğini kontrol ederken, aynı zamanda sahte
            veya dolandırıcılık amaçlı ilanları tespit eder. İlan açıklamaları
            ve başlıkları analiz edilerek emlak tipi, konum ve fiyat gibi
            bilgilerin doğruluğu kontrol edilir. Fotoğraflar ile bilgiler
            karşılaştırılarak gerçek mülk fotoğrafları olup olmadığı tespit
            edilir. Anomali tespiti algoritmalarımız ile sahte ilanlar anında
            belirlenir, böylece platformumuzda güvenli ve doğru bilgilerle
            karşılaşırsınız.
          </Description>
          <HeadingContainer>
            <IconContainer>
              <BsGraphUpArrow />
            </IconContainer>
            <Heading1>Fiyat ve Performans Tahmin Modelleri</Heading1>
          </HeadingContainer>
          <Description>
            Yapay zekâ tabanlı fiyat tahmin modelimiz, emlakların piyasa
            değerini ve gelecekteki fiyat eğilimlerini tahmin eder. Tarihsel
            satış verileri, konum, mülk özellikleri ve pazar eğilimleri gibi
            verileri kullanarak en doğru fiyat tahminlerini sunar. Ayrıca,
            kiralama veya satış işlemlerinin başarılı olma olasılığını tahmin
            eden modelimiz sayesinde mülklerinizi daha hızlı kiralamanız veya
            satmanız için stratejik bilgiler sağlar. Bu bilgiler ışığında doğru
            fiyatlandırma ve pazarlama stratejileri ile emlak işlemlerinizi en
            verimli şekilde yönetebilirsiniz.
          </Description>
          <HeadingContainer>
            <IconContainer>
              <SiWechat />
            </IconContainer>
            <Heading1>Akıllı Chatbot ve İlan Performans Analizi</Heading1>
          </HeadingContainer>
          <Description>
            Kullanıcılara 7/24 destek sağlayan akıllı chatbotumuz sorularınızı
            yanıtlar ve yönlendirme yapar. Doğal dil işleme (NLP) teknikleri ile
            geliştirilen sohbet botumuz, ihtiyaç duyduğunuz bilgilere hızlı bir
            şekilde ulaşmanızı sağlar ve müşteri memnuniyetini artırır. Aynı
            zamanda ilanlarınızın performansını analiz eden ve optimize edilmesi
            için öneriler sunan yapay zekâ modelimiz sayesinde ilanlarınızın
            daha fazla görüntülenmesini ve etkileşim almasını sağlarsınız.
          </Description>
          <DiscriptionContainer>
            <Description>
              Güvenli ve Doğru Emlak İşlemleri İçin guvenlisatkirala.com olarak
              emlak işlemlerinizde güven, doğruluk ve verimlilik sağlamak için
              en gelişmiş yapay zekâ teknolojilerini kullanıyoruz. Yapay zekâ
              destekli özelliklerimiz sayesinde doğru bilgilere ulaşabilir,
              güvenli işlemler gerçekleştirebilir ve mülklerinizi en verimli
              şekilde yönetebilirsiniz.
            </Description>
            <Description>
              Siz de güvenli, hızlı ve verimli emlak işlemleri için
              guvenlisatkirala.com'u tercih edin.
            </Description>
          </DiscriptionContainer>
        </ContextContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Trust;
